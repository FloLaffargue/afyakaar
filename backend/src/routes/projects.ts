import { Router } from 'express'
import prisma from '../prisma.js'

const router = Router()

// GET /api/projects — list with optional filters
router.get('/', async (req, res) => {
  try {
    const { year, category, featured } = req.query

    const where: Record<string, unknown> = {}
    if (year) where.year = parseInt(year as string, 10)
    if (category) where.category = category as string
    if (featured === 'true') where.featured = true

    const projects = await prisma.project.findMany({
      where,
      orderBy: { id: 'asc' },
    })
    res.json(projects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// GET /api/projects/:slug — single project by slug
router.get('/:slug', async (req, res) => {
  try {
    const project = await prisma.project.findUnique({
      where: { slug: req.params.slug },
    })
    if (!project) {
      res.status(404).json({ error: 'Project not found' })
      return
    }
    res.json(project)
  } catch (error) {
    console.error('Error fetching project:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// POST /api/projects — create
router.post('/', async (req, res) => {
  try {
    const project = await prisma.project.create({ data: req.body })
    res.status(201).json(project)
  } catch (error) {
    console.error('Error creating project:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// PUT /api/projects/:id — update by id
router.put('/:id', async (req, res) => {
  try {
    const project = await prisma.project.update({
      where: { id: parseInt(req.params.id, 10) },
      data: req.body,
    })
    res.json(project)
  } catch (error) {
    console.error('Error updating project:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// DELETE /api/projects/:id — delete by id
router.delete('/:id', async (req, res) => {
  try {
    await prisma.project.delete({
      where: { id: parseInt(req.params.id, 10) },
    })
    res.status(204).send()
  } catch (error) {
    console.error('Error deleting project:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
