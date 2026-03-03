export const categories = [
  { id: 'sport', label: 'Sport', icon: 'Trophy', color: 'bg-blue-500', text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-500' },
  { id: 'education', label: 'Éducation', icon: 'GraduationCap', color: 'bg-emerald-500', text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-500' },
  { id: 'culture', label: 'Culture', icon: 'Music', color: 'bg-purple-500', text: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-500' },
  { id: 'entrepreneuriat', label: 'Entrepreneuriat', icon: 'Briefcase', color: 'bg-amber-500', text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-500' },
  { id: 'sante', label: 'Santé', icon: 'HeartPulse', color: 'bg-rose-500', text: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-500' },
]

export const getCategoryById = (id) => categories.find((c) => c.id === id)
