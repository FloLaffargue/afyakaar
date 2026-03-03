import { useState, useRef } from 'react'
import { uploadFile } from '../api'

const inputClass = 'w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'

export default function ImageUpload({ value, onChange, required = false }) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState(null)
  const fileRef = useRef()

  const handleFile = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    setError(null)
    try {
      const { url } = await uploadFile(file)
      onChange(url)
    } catch (err) {
      setError(err.message)
    } finally {
      setUploading(false)
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2 items-center">
        <input
          className={inputClass}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="URL de l'image ou uploader ci-dessous"
          required={required}
        />
      </div>
      <div className="flex items-center gap-3">
        <label className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-lg hover:bg-slate-200 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {uploading ? 'Upload...' : 'Choisir un fichier'}
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={handleFile}
            disabled={uploading}
            className="hidden"
          />
        </label>
        {uploading && <span className="text-xs text-slate-400">Upload en cours...</span>}
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
      {value && (
        <div className="mt-2">
          <img
            src={value}
            alt="Aperçu"
            className="h-24 w-auto rounded border border-slate-200 object-cover"
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </div>
      )}
    </div>
  )
}
