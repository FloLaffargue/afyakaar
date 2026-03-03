const colorMap = {
  sport: 'bg-blue-100 text-blue-700',
  education: 'bg-emerald-100 text-emerald-700',
  culture: 'bg-purple-100 text-purple-700',
  entrepreneuriat: 'bg-amber-100 text-amber-700',
  sante: 'bg-rose-100 text-rose-700',
  'en cours': 'bg-green-100 text-green-700',
  termine: 'bg-slate-100 text-slate-600',
  planifie: 'bg-yellow-100 text-yellow-700',
}

export default function Badge({ value }) {
  const colors = colorMap[value?.toLowerCase()] || 'bg-slate-100 text-slate-600'
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${colors}`}>
      {value}
    </span>
  )
}
