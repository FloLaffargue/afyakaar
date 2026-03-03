import { Router } from 'express'
import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

const UPLOADS_DIR = path.resolve('/app/uploads')

const storage = multer.diskStorage({
  destination: UPLOADS_DIR,
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase()
    cb(null, `${crypto.randomUUID()}${ext}`)
  },
})

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (/^image\/(jpeg|png|gif|webp|svg\+xml)$/.test(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Seules les images sont autorisées (jpeg, png, gif, webp, svg)'))
    }
  },
})

const router = Router()

router.post('/', upload.single('file'), (req, res) => {
  if (!req.file) {
    res.status(400).json({ error: 'Aucun fichier envoyé' })
    return
  }
  res.json({ url: `/uploads/${req.file.filename}` })
})

export default router
