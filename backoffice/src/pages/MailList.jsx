import { useEffect, useState } from 'react'
import { getMails, deleteMail } from '../api'
import DataTable from '../components/DataTable'
import Modal from '../components/Modal'

const columns = [
  { key: 'subject', label: 'Sujet' },
  { key: 'email', label: 'Email' },
  {
    key: 'message',
    label: 'Message',
    render: (v) => (
      <span title={v}>{v?.length > 80 ? v.slice(0, 80) + '...' : v}</span>
    ),
  },
  {
    key: 'createdAt',
    label: 'Date',
    render: (v) => new Date(v).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }),
  },
]

export default function MailList() {
  const [mails, setMails] = useState([])
  const [loading, setLoading] = useState(true)
  const [toDelete, setToDelete] = useState(null)

  const load = () => {
    setLoading(true)
    getMails().then(setMails).finally(() => setLoading(false))
  }

  useEffect(load, [])

  const handleDelete = async () => {
    await deleteMail(toDelete.id)
    setToDelete(null)
    load()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Messages reçus</h1>
      {loading ? (
        <p className="text-slate-400">Chargement...</p>
      ) : (
        <DataTable
          columns={columns}
          rows={mails}
          onDelete={setToDelete}
        />
      )}
      <Modal
        open={!!toDelete}
        title="Supprimer le message"
        message={`Voulez-vous vraiment supprimer le message de ${toDelete?.email} ? Cette action est irréversible.`}
        onConfirm={handleDelete}
        onCancel={() => setToDelete(null)}
      />
    </div>
  )
}
