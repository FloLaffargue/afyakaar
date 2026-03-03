import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { mkdirSync } from 'fs'
import path from 'path'
import projectsRouter from './routes/projects.js'
import newsRouter from './routes/news.js'
import mailsRouter from './routes/mails.js'
import uploadsRouter from './routes/uploads.js'

const UPLOADS_DIR = path.resolve('/app/uploads')
mkdirSync(UPLOADS_DIR, { recursive: true })

const app = express()
const PORT = parseInt(process.env.PORT || '3001', 10)

app.use(cors())
app.use(express.json())

// Serve uploaded files
app.use('/uploads', express.static(UPLOADS_DIR))

// Routes
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/projects', projectsRouter)
app.use('/api/news', newsRouter)
app.use('/api/mails', mailsRouter)
app.use('/api/uploads', uploadsRouter)

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`)
})
