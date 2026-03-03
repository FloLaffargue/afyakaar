import { Router } from 'express'
import prisma from '../prisma.js'

const router = Router()

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
router.post('/', async (req, res) => {
  try {
    const { subject, email, message } = req.body
    if (!subject || !email || !message) {
      res.status(400).json({ error: 'subject, email, and message are required' })
      return
    }
    const mail = await prisma.mail.create({
      data: { subject, email, message },
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
