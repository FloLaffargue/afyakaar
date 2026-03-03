import { NavLink } from 'react-router-dom'
import { LayoutDashboard, FolderKanban, Newspaper, Mail } from 'lucide-react'

const links = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/projects', icon: FolderKanban, label: 'Projets' },
  { to: '/news', icon: Newspaper, label: 'Actualités' },
  { to: '/mails', icon: Mail, label: 'Messages' },
]

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 w-60 bg-slate-800 text-white flex flex-col">
      <div className="px-6 py-5 border-b border-slate-700">
        <h1 className="text-lg font-bold tracking-wide">Af Yakaar</h1>
        <p className="text-xs text-slate-400">Administration</p>
      </div>
      <nav className="flex-1 py-4">
        {links.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 text-sm transition-colors ${
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
