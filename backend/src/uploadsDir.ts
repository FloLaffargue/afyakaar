import path from 'path'

// En Docker, les uploads vivent sur le volume monté dans /app/uploads.
// En dev local ce chemin n'est pas accessible : surchargez avec UPLOADS_DIR.
export const UPLOADS_DIR = path.resolve(process.env.UPLOADS_DIR || '/app/uploads')
