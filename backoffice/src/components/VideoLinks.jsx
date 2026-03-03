import { useState } from 'react'

const inputClass = 'w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'

/**
 * Converts a regular YouTube/Dailymotion watch URL to an embed URL.
 * If already an embed URL or unrecognized, returns as-is.
 */
function toEmbedUrl(raw) {
  const url = raw.trim()
  try {
    const u = new URL(url)
    // YouTube: youtube.com/watch?v=ID or youtu.be/ID
    if (u.hostname.includes('youtube.com') && u.searchParams.get('v')) {
      return `https://www.youtube.com/embed/${u.searchParams.get('v')}`
    }
    if (u.hostname === 'youtu.be') {
      return `https://www.youtube.com/embed${u.pathname}`
    }
    // Dailymotion: dailymotion.com/video/ID
    const dmMatch = u.pathname.match(/^\/video\/([a-zA-Z0-9]+)/)
    if (u.hostname.includes('dailymotion.com') && dmMatch) {
      return `https://www.dailymotion.com/embed/video/${dmMatch[1]}`
    }
  } catch {
    // not a valid URL, return as-is
  }
  return url
}

export default function VideoLinks({ value = [], onChange }) {
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')

  const add = () => {
    const trimmed = url.trim()
    if (!trimmed) return
    onChange([...value, { url: toEmbedUrl(trimmed), title: title.trim() || null }])
    setUrl('')
    setTitle('')
  }

  const remove = (index) => {
    onChange(value.filter((_, i) => i !== index))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      add()
    }
  }

  return (
    <div className="space-y-3">
      {/* Existing videos */}
      {value.length > 0 && (
        <div className="space-y-2">
          {value.map((video, i) => (
            <div key={i} className="flex items-start gap-2 p-2 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-700 truncate">
                  {video.title || `Vidéo ${i + 1}`}
                </p>
                <p className="text-xs text-slate-400 truncate">{video.url}</p>
              </div>
              {/* Thumbnail preview for YouTube */}
              {video.url.includes('youtube.com/embed/') && (
                <img
                  src={`https://img.youtube.com/vi/${video.url.split('/embed/')[1].split('?')[0]}/mqdefault.jpg`}
                  alt=""
                  className="h-12 w-auto rounded"
                />
              )}
              <button
                type="button"
                onClick={() => remove(i)}
                className="shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full text-xs flex items-center justify-center hover:bg-red-200"
                title="Supprimer"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add new video */}
      <div className="flex gap-2 items-end">
        <div className="flex-1 space-y-1">
          <input
            className={inputClass}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="URL YouTube, Dailymotion..."
          />
        </div>
        <div className="flex-1 space-y-1">
          <input
            className={inputClass}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Titre (optionnel)"
          />
        </div>
        <button
          type="button"
          onClick={add}
          disabled={!url.trim()}
          className="shrink-0 px-3 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 disabled:opacity-40"
        >
          Ajouter
        </button>
      </div>
      <p className="text-xs text-slate-400">
        Collez un lien YouTube ou Dailymotion — il sera automatiquement converti en lien embed.
      </p>
    </div>
  )
}
