import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { getProjects, deleteProject } from '../api'
import DataTable from '../components/DataTable'
import Badge from '../components/Badge'
import Modal from '../components/Modal'

const columns = [
  { key: 'title', label: 'Titre' },
  { key: 'category', label: 'Catégorie', render: (v) => <Badge value={v} /> },
  { key: 'year', label: 'Année' },
  { key: 'status', label: 'Statut', render: (v) => <Badge value={v} /> },
  { key: 'featured', label: 'Vedette', render: (v) => (v ? 'Oui' : 'Non') },
]

export default function ProjectList() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [toDelete, setToDelete] = useState(null)
  const navigate = useNavigate()

  const load = () => {
    setLoading(true)
    getProjects().then(setProjects).finally(() => setLoading(false))
  }

  useEffect(load, [])

  const handleDelete = async () => {
    await deleteProject(toDelete.id)
    setToDelete(null)
    load()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Projets</h1>
        <Link
          to="/projects/new"
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700"
        >
          <Plus size={16} /> Nouveau projet
        </Link>
      </div>
      {loading ? (
        <p className="text-slate-400">Chargement...</p>
      ) : (
        <DataTable
          columns={columns}
          rows={projects}
          onEdit={(row) => navigate(`/projects/${row.slug}/edit`)}
          onDelete={setToDelete}
        />
      )}
      <Modal
        open={!!toDelete}
        title="Supprimer le projet"
        message={`Voulez-vous vraiment supprimer « ${toDelete?.title} » ? Cette action est irréversible.`}
        onConfirm={handleDelete}
        onCancel={() => setToDelete(null)}
      />
    </div>
  )
}
