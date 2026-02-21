import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import { getNewsById } from '../data/newsData'

const getCategoryColor = (category) => {
  const colors = {
    'Événement': { badge: 'bg-blue-100 text-blue-800', accent: 'border-blue-500' },
    'Réalisation': { badge: 'bg-green-100 text-green-800', accent: 'border-green-500' },
    'Éducation': { badge: 'bg-purple-100 text-purple-800', accent: 'border-purple-500' },
    'Culture': { badge: 'bg-pink-100 text-pink-800', accent: 'border-pink-500' },
    'Santé': { badge: 'bg-red-100 text-red-800', accent: 'border-red-500' },
    'Sport': { badge: 'bg-yellow-100 text-yellow-800', accent: 'border-yellow-500' }
  }
  return colors[category] || { badge: 'bg-gray-100 text-gray-800', accent: 'border-gray-500' }
}

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('fr-FR', options)
}

const NewsDetail = () => {
  const { id } = useParams()
  const news = getNewsById(Number(id))

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

  const catStyle = getCategoryColor(news.category)
  const contentParagraphs = Array.isArray(news.content) ? news.content : [news.content]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-500 to-accent-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Actualités
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold ${catStyle.badge} shadow-sm`}>
                <Tag className="w-3.5 h-3.5" />
                {news.category}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(news.date)}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold">{news.title}</h1>
          </div>
        </div>
      </section>

      {/* Chapeau / introduction */}
      <section className="bg-white border-b border-cream-200">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto py-10 border-l-4 ${catStyle.accent} pl-6`}>
            <p className="text-gray-800 text-xl md:text-2xl leading-relaxed font-medium italic">
              {contentParagraphs[0]}
            </p>
          </div>
        </div>
      </section>

      {/* Corps de l'article */}
      {contentParagraphs.length > 1 && (
        <section className="py-14 bg-cream-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Contenu principal */}
                <div className="lg:col-span-8 space-y-6">
                  {contentParagraphs.slice(1).map((paragraph, index) => (
                    <p key={index} className="text-gray-700 text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Encart latéral */}
                <aside className="lg:col-span-4">
                  <div className="bg-white rounded-2xl shadow-md p-6 sticky top-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Informations</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Date</p>
                          <p className="text-gray-900 font-medium">{formatDate(news.date)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent-50 flex items-center justify-center flex-shrink-0">
                          <Tag className="w-5 h-5 text-accent-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Catégorie</p>
                          <p className="text-gray-900 font-medium">{news.category}</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-cream-200 mt-6 pt-6">
                      <Link
                        to="/contact"
                        className="block w-full text-center btn-primary py-3"
                      >
                        Nous soutenir
                      </Link>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Barre de retour */}
      <section className="py-8 bg-cream-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 btn-primary py-3 px-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Toutes les actualités
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsDetail
