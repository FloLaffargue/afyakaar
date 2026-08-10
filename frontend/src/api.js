const API_BASE = '/api'

async function fetchJSON(url) {
  const res = await fetch(`${API_BASE}${url}`)
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  return res.json()
}

export async function fetchProjects(params = {}) {
  const query = new URLSearchParams()
  if (params.year) query.set('year', String(params.year))
  if (params.category) query.set('category', params.category)
  if (params.featured) query.set('featured', 'true')
  const qs = query.toString()
  return fetchJSON(`/projects${qs ? `?${qs}` : ''}`)
}

export async function fetchProjectBySlug(slug) {
  return fetchJSON(`/projects/${slug}`)
}

export async function fetchNews(params = {}) {
  const query = new URLSearchParams()
  if (params.category) query.set('category', params.category)
  if (params.limit) query.set('limit', String(params.limit))
  const qs = query.toString()
  return fetchJSON(`/news${qs ? `?${qs}` : ''}`)
}

export async function fetchNewsById(id) {
  return fetchJSON(`/news/${id}`)
}

export async function sendContactMessage({ subject, email, message, website }) {
  const res = await fetch(`${API_BASE}/mails`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ subject, email, message, website }),
  })
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  return res.json()
}
