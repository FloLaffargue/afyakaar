import { useState } from 'react'
import { Calendar, Tag, Newspaper } from 'lucide-react'
import { getAllNews } from '../data/newsData'

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('Toutes')
  const allNews = getAllNews()
  
  const categories = ['Toutes', ...new Set(allNews.map(news => news.category))]
  
  const filteredNews = selectedCategory === 'Toutes' 
    ? allNews 
    : allNews.filter(news => news.category === selectedCategory)

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('fr-FR', options)
  }

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

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-accent-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <Newspaper className="w-12 h-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Actualités</h1>
          </div>
          <p className="text-xl text-center">Suivez nos dernières actions et événements</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredNews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Aucune actualité dans cette catégorie pour le moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((news) => (
                <article key={news.id} className="card hover:scale-105 transition-transform duration-300">
                  {news.image && (
                    <div className="h-48 bg-gradient-to-br from-primary-200 to-accent-200">
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  {!news.image && (
                    <div className="h-48 bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center">
                      <Newspaper className="w-16 h-16 text-primary-500 opacity-50" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(news.category)}`}>
                        {news.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(news.date)}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{news.title}</h3>
                    <p className="text-gray-600 mb-4">{news.excerpt}</p>
                    <div className="border-t pt-4">
                      <p className="text-gray-700">{news.content}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Restez Informés
            </h2>
            <p className="text-gray-700 mb-6">
              Suivez-nous sur nos réseaux sociaux pour ne rien manquer de nos actualités et événements.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News
