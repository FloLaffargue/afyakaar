import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProjectBySlug, createProject, updateProject } from '../api'
import FormField from '../components/FormField'
import ImageUpload from '../components/ImageUpload'
import GalleryUpload from '../components/GalleryUpload'
import VideoLinks from '../components/VideoLinks'
import RichTextEditor from '../components/RichTextEditor'

const categories = ['sport', 'education', 'culture', 'entrepreneuriat', 'sante']
const statuses = ['en cours', 'termine', 'planifie']
const months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre']

const emptyForm = {
  slug: '', title: '', description: '', longDescription: '',
  image: '', gallery: [], month: 'Janvier', year: new Date().getFullYear(),
  category: 'education', status: 'en cours', featured: false,
  donationUrl: '', donationGoal: '', videos: [],
}

const inputClass = 'w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'

export default function ProjectForm() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const isEdit = !!slug
  const [form, setForm] = useState(emptyForm)
  const [projectId, setProjectId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!isEdit) return
    setLoading(true)
    getProjectBySlug(slug)
      .then((p) => {
        setProjectId(p.id)
        setForm({
          slug: p.slug,
          title: p.title,
          description: p.description,
          longDescription: p.longDescription || '',
          image: p.image,
          gallery: Array.isArray(p.gallery) ? p.gallery : [],
          month: p.month,
          year: p.year,
          category: p.category,
          status: p.status,
          featured: p.featured,
          donationUrl: p.donationUrl || '',
          donationGoal: p.donationGoal ?? '',
          videos: Array.isArray(p.videos) ? p.videos : [],
        })
      })
      .finally(() => setLoading(false))
  }, [slug, isEdit])

  const set = (key) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [key]: val }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    try {
      const data = {
        ...form,
        year: parseInt(form.year, 10),
        donationGoal: form.donationGoal ? parseInt(form.donationGoal, 10) : null,
        donationUrl: form.donationUrl || null,
        longDescription: form.longDescription || null,
        gallery: form.gallery,
        videos: form.videos,
      }
      if (isEdit) {
        await updateProject(projectId, data)
      } else {
        await createProject(data)
      }
      navigate('/projects')
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
        {isEdit ? 'Modifier le projet' : 'Nouveau projet'}
      </h1>
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg">{error}</div>
      )}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-5 max-w-3xl">
        <div className="grid grid-cols-2 gap-4">
          <FormField label="Titre" required>
            <input className={inputClass} value={form.title} onChange={set('title')} required />
          </FormField>
          <FormField label="Slug" required>
            <input className={inputClass} value={form.slug} onChange={set('slug')} required />
          </FormField>
        </div>

        <FormField label="Description courte" required>
          <RichTextEditor value={form.description} onChange={(html) => setForm((f) => ({ ...f, description: html }))} rows={3} />
        </FormField>

        <FormField label="Description longue">
          <RichTextEditor value={form.longDescription} onChange={(html) => setForm((f) => ({ ...f, longDescription: html }))} rows={6} placeholder="Description détaillée du projet" />
        </FormField>

        <div className="grid grid-cols-2 gap-4">
          <FormField label="Catégorie" required>
            <select className={inputClass} value={form.category} onChange={set('category')}>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </FormField>
          <FormField label="Statut" required>
            <select className={inputClass} value={form.status} onChange={set('status')}>
              {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </FormField>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <FormField label="Mois" required>
            <select className={inputClass} value={form.month} onChange={set('month')}>
              {months.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>
          </FormField>
          <FormField label="Année" required>
            <input className={inputClass} type="number" value={form.year} onChange={set('year')} required />
          </FormField>
          <FormField label="Image" required>
            <ImageUpload value={form.image} onChange={(url) => setForm((f) => ({ ...f, image: url }))} required />
          </FormField>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField label="URL de don">
            <input className={inputClass} value={form.donationUrl} onChange={set('donationUrl')} />
          </FormField>
          <FormField label="Objectif de don">
            <input className={inputClass} type="number" value={form.donationGoal} onChange={set('donationGoal')} />
          </FormField>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="featured" checked={form.featured} onChange={set('featured')} className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
          <label htmlFor="featured" className="text-sm text-slate-700">Projet vedette</label>
        </div>

        <FormField label="Galerie">
          <GalleryUpload value={form.gallery} onChange={(urls) => setForm((f) => ({ ...f, gallery: urls }))} />
        </FormField>

        <FormField label="Vidéos">
          <VideoLinks value={form.videos} onChange={(videos) => setForm((f) => ({ ...f, videos }))} />
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
            onClick={() => navigate('/projects')}
            className="px-5 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-200"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  )
}
