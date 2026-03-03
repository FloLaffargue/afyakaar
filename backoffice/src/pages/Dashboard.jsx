import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FolderKanban, Newspaper, Mail } from 'lucide-react'
import { getProjects, getNews, getMails } from '../api'

const cards = [
  { key: 'projects', label: 'Projets', icon: FolderKanban, color: 'bg-indigo-500', link: '/projects' },
  { key: 'news', label: 'Actualités', icon: Newspaper, color: 'bg-emerald-500', link: '/news' },
  { key: 'mails', label: 'Messages', icon: Mail, color: 'bg-amber-500', link: '/mails' },
]

export default function Dashboard() {
  const [counts, setCounts] = useState({ projects: 0, news: 0, mails: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([getProjects(), getNews(), getMails()])
      .then(([projects, news, mails]) => {
        setCounts({ projects: projects.length, news: news.length, mails: mails.length })
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Tableau de bord</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map(({ key, label, icon: Icon, color, link }) => (
          <Link
            key={key}
            to={link}
            className="bg-white rounded-lg shadow p-6 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div className={`${color} p-3 rounded-lg text-white`}>
              <Icon size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500">{label}</p>
              <p className="text-3xl font-bold text-slate-900">
                {loading ? '...' : counts[key]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
