import { Router } from 'express'
import prisma from '../prisma.js'

const router = Router()

// GET /api/news — list with optional filters
router.get('/', async (req, res) => {
  try {
    const { category, limit } = req.query

    const where: Record<string, unknown> = {}
    if (category) where.category = category as string

    const news = await prisma.news.findMany({
      where,
      orderBy: { date: 'desc' },
      ...(limit ? { take: parseInt(limit as string, 10) } : {}),
    })
    res.json(news)
  } catch (error) {
    console.error('Error fetching news:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// GET /api/news/:id — single news by id
router.get('/:id', async (req, res) => {
  try {
    const news = await prisma.news.findUnique({
      where: { id: parseInt(req.params.id, 10) },
    })
    if (!news) {
      res.status(404).json({ error: 'News not found' })
      return
    }
    res.json(news)
  } catch (error) {
    console.error('Error fetching news:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// POST /api/news — create
router.post('/', async (req, res) => {
  try {
    const news = await prisma.news.create({ data: req.body })
    res.status(201).json(news)
  } catch (error) {
    console.error('Error creating news:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// PUT /api/news/:id — update
router.put('/:id', async (req, res) => {
  try {
    const news = await prisma.news.update({
      where: { id: parseInt(req.params.id, 10) },
      data: req.body,
    })
    res.json(news)
  } catch (error) {
    console.error('Error updating news:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// DELETE /api/news/:id — delete
router.delete('/:id', async (req, res) => {
  try {
    await prisma.news.delete({
      where: { id: parseInt(req.params.id, 10) },
    })
    res.status(204).send()
  } catch (error) {
    console.error('Error deleting news:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
