const API_BASE = '/api'

async function request(url, options = {}) {
  const res = await fetch(`${API_BASE}${url}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  })
  if (res.status === 204) return null
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.error || `API error: ${res.status}`)
  }
  return res.json()
}

// Projects
export const getProjects = () => request('/projects')
export const getProjectBySlug = (slug) => request(`/projects/${slug}`)
export const createProject = (data) => request('/projects', { method: 'POST', body: JSON.stringify(data) })
export const updateProject = (id, data) => request(`/projects/${id}`, { method: 'PUT', body: JSON.stringify(data) })
export const deleteProject = (id) => request(`/projects/${id}`, { method: 'DELETE' })

// News
export const getNews = () => request('/news')
export const getNewsById = (id) => request(`/news/${id}`)
export const createNews = (data) => request('/news', { method: 'POST', body: JSON.stringify(data) })
export const updateNews = (id, data) => request(`/news/${id}`, { method: 'PUT', body: JSON.stringify(data) })
export const deleteNews = (id) => request(`/news/${id}`, { method: 'DELETE' })

// Mails
export const getMails = () => request('/mails')
export const deleteMail = (id) => request(`/mails/${id}`, { method: 'DELETE' })

// Uploads
export async function uploadFile(file) {
  const formData = new FormData()
  formData.append('file', file)
  const res = await fetch(`${API_BASE}/uploads`, { method: 'POST', body: formData })
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.error || `Upload échoué: ${res.status}`)
  }
  return res.json()
}
