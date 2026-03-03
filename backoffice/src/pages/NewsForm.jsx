import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getNewsById, createNews, updateNews } from '../api'
import FormField from '../components/FormField'
import ImageUpload from '../components/ImageUpload'
import RichTextEditor from '../components/RichTextEditor'

const categories = ['sport', 'education', 'culture', 'entrepreneuriat', 'sante']

const emptyForm = {
  title: '', date: '', category: 'education', excerpt: '', content: '', image: '',
}

const inputClass = 'w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'

export default function NewsForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = !!id
  const [form, setForm] = useState(emptyForm)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!isEdit) return
    setLoading(true)
    getNewsById(id)
      .then((n) => {
        const paragraphs = Array.isArray(n.content) ? n.content.join('<br><br>') : (n.content || '')
        setForm({
          title: n.title,
          date: n.date,
          category: n.category,
          excerpt: n.excerpt,
          content: paragraphs,
          image: n.image || '',
        })
      })
      .finally(() => setLoading(false))
  }, [id, isEdit])

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    try {
      const data = {
        ...form,
        image: form.image || null,
        content: form.content
          .split(/<br\s*\/?>\s*<br\s*\/?>/)
          .map((s) => s.trim())
          .filter(Boolean),
      }
      if (isEdit) {
        await updateNews(id, data)
      } else {
        await createNews(data)
      }
      navigate('/news')
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <p className="text-slate-400">Chargement...</p>

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">
        {isEdit ? "Modifier l'actualité" : 'Nouvelle actualité'}
      </h1>
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg">{error}</div>
      )}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-5 max-w-3xl">
        <FormField label="Titre" required>
          <input className={inputClass} value={form.title} onChange={set('title')} required />
        </FormField>

        <div className="grid grid-cols-3 gap-4">
          <FormField label="Date" required>
            <input className={inputClass} value={form.date} onChange={set('date')} required placeholder="ex: 15 mars 2024" />
          </FormField>
          <FormField label="Catégorie" required>
            <select className={inputClass} value={form.category} onChange={set('category')}>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </FormField>
          <FormField label="Image">
            <ImageUpload value={form.image} onChange={(url) => setForm((f) => ({ ...f, image: url }))} />
          </FormField>
        </div>

        <FormField label="Extrait" required>
          <RichTextEditor value={form.excerpt} onChange={(html) => setForm((f) => ({ ...f, excerpt: html }))} rows={2} />
        </FormField>

        <FormField label="Contenu" required>
          <RichTextEditor value={form.content} onChange={(html) => setForm((f) => ({ ...f, content: html }))} rows={10} placeholder="Contenu de l'actualité" />
        </FormField>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-50"
          >
            {saving ? 'Enregistrement...' : isEdit ? 'Enregistrer' : 'Créer'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/news')}
            className="px-5 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-200"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  )
}
