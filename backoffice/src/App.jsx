import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import ProjectList from './pages/ProjectList'
import ProjectForm from './pages/ProjectForm'
import NewsList from './pages/NewsList'
import NewsForm from './pages/NewsForm'
import MailList from './pages/MailList'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/new" element={<ProjectForm />} />
          <Route path="/projects/:slug/edit" element={<ProjectForm />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/new" element={<NewsForm />} />
          <Route path="/news/:id/edit" element={<NewsForm />} />
          <Route path="/mails" element={<MailList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
