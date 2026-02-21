import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Calendar, Tag, Newspaper } from 'lucide-react'
import { getAllNews, getNewsById } from '../data/newsData'

const getCategoryColor = (category) => {
  const colors = {
    'Événement': 'bg-blue-100 text-blue-800',
    'Réalisation': 'bg-green-100 text-green-800',
    'Éducation': 'bg-purple-100 text-purple-800',
    'Culture': 'bg-pink-100 text-pink-800',
    'Santé': 'bg-red-100 text-red-800',
    'Sport': 'bg-yellow-100 text-yellow-800'
  }
  return colors[category] || 'bg-gray-100 text-gray-800'
}

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('fr-FR', options)
}

const NewsDetail = () => {
  const { id } = useParams()
  const news = getNewsById(Number(id))
  const allNews = getAllNews()

  if (!news) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Article introuvable</h1>
        <p className="text-gray-600 mb-8">Cet article n'existe pas ou a été déplacé.</p>
        <Link to="/news" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Retour aux actualités
        </Link>
      </div>
    )
  }

  const currentIndex = allNews.findIndex((n) => n.id === news.id)
  const prev = currentIndex < allNews.length - 1 ? allNews[currentIndex + 1] : null
  const next = currentIndex > 0 ? allNews[currentIndex - 1] : null

  return (
    <div className="bg-gradient-to-br from-cream-50 to-cream-100 min-h-screen">
      {/* Lien retour */}
      <div className="container mx-auto px-4 pt-6 pb-2">
        <Link to="/news" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Retour aux actualités
        </Link>
      </div>

      {/* Contenu principal */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
              {news.image ? (
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-64 sm:h-80 object-cover"
                />
              ) : (
                <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center">
                  <Newspaper className="w-20 h-20 text-primary-500 opacity-50" />
                </div>
              )}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(news.category)}`}>
                <Tag className="w-3.5 h-3.5" />
                {news.category}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(news.date)}
              </span>
            </div>

            {/* Titre */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{news.title}</h1>

            {/* Contenu */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>{news.content}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation prev/next */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex items-center justify-between gap-4 border-t border-cream-200 pt-6">
            {prev ? (
              <Link
                to={`/news/${prev.id}`}
                className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">{prev.title}</span>
                <span className="sm:hidden">Précédent</span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                to={`/news/${next.id}`}
                className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors text-right"
              >
                <span className="hidden sm:inline">{next.title}</span>
                <span className="sm:hidden">Suivant</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsDetail
