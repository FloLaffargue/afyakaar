import { useState, useRef } from 'react'
import { uploadFile } from '../api'

export default function GalleryUpload({ value = [], onChange }) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState(null)
  const fileRef = useRef()

  const handleFiles = async (e) => {
    const files = Array.from(e.target.files || [])
    if (!files.length) return
    setUploading(true)
    setError(null)
    try {
      const urls = []
      for (const file of files) {
        const { url } = await uploadFile(file)
        urls.push(url)
      }
      onChange([...value, ...urls])
    } catch (err) {
      setError(err.message)
    } finally {
      setUploading(false)
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  const remove = (index) => {
    onChange(value.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <label className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-lg hover:bg-slate-200 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          {uploading ? 'Upload...' : 'Ajouter des images'}
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFiles}
            disabled={uploading}
            className="hidden"
          />
        </label>
        {uploading && <span className="text-xs text-slate-400">Upload en cours...</span>}
        <span className="text-xs text-slate-400">{value.length} image{value.length !== 1 ? 's' : ''}</span>
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
      {value.length > 0 && (
        <div className="grid grid-cols-4 gap-2">
          {value.map((url, i) => (
            <div key={i} className="relative group">
              <img
                src={url}
                alt={`Galerie ${i + 1}`}
                className="h-20 w-full rounded border border-slate-200 object-cover"
                onError={(e) => { e.target.src = ''; e.target.alt = 'Erreur' }}
              />
              <button
                type="button"
                onClick={() => remove(i)}
                className="absolute top-1 right-1 w-5 h-5 bg-red-600 text-white rounded-full text-xs leading-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                title="Supprimer"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
