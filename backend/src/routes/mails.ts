import { Router } from 'express'
import rateLimit from 'express-rate-limit'
import prisma from '../prisma.js'
import { sendContactNotification } from '../mailer.js'

const router = Router()

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Trop de messages envoyés, veuillez réessayer plus tard.' },
})

// GET /api/mails — list all
router.get('/', async (_req, res) => {
  try {
    const mails = await prisma.mail.findMany({
      orderBy: { createdAt: 'desc' },
    })
    res.json(mails)
  } catch (error) {
    console.error('Error fetching mails:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// POST /api/mails — create
router.post('/', contactLimiter, async (req, res) => {
  try {
    const { subject, email, message, website } = req.body
    // Honeypot : champ invisible pour les humains ; s'il est rempli, c'est un bot.
    // On répond 201 sans rien enregistrer pour ne pas révéler le mécanisme.
    if (website) {
      res.status(201).json({ ok: true })
      return
    }
    if (!subject || !email || !message) {
      res.status(400).json({ error: 'subject, email, and message are required' })
      return
    }
    const mail = await prisma.mail.create({
      data: { subject, email, message },
    })
    // Le message est en base : un échec d'envoi de la notification ne doit pas
    // faire échouer la requête du visiteur.
    sendContactNotification({ subject, email, message }).catch((error) => {
      console.error('Error sending contact notification email:', error)
    })
    res.status(201).json(mail)
  } catch (error) {
    console.error('Error creating mail:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// DELETE /api/mails/:id — delete
router.delete('/:id', async (req, res) => {
  try {
    await prisma.mail.delete({
      where: { id: parseInt(req.params.id, 10) },
    })
    res.status(204).send()
  } catch (error) {
    console.error('Error deleting mail:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
