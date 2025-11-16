import { Calendar, Target, TrendingUp, Heart, GraduationCap, Store, Shirt } from 'lucide-react'
import { images } from '../data/imageData'

const Projects = () => {
  const projects2026 = [
    {
      icon: '🎯',
      title: 'Grand Concours de Pétanque à La Somone',
      date: '17-18 Janvier 2026',
      description: 'Avec notre parrain Fara Ndiaye, champion du Sénégal',
      image: images.projects.petanque2026,
      month: 'Janvier'
    },
    {
      icon: '🏫',
      title: 'Aménagement Scolaire',
      description: 'Mobilier de bureau, tables, cuisine et espaces de jeux',
      image: images.projects.school,
      month: 'Février-Mars'
    },
    {
      icon: '💃',
      title: 'École de Danse Africaine à Saly',
      description: 'Pour promouvoir la culture locale',
      image: images.projects.dance,
      month: 'Avril-Mai'
    },
    {
      icon: '👩‍💼',
      title: 'Aide aux Femmes Entrepreneurs',
      description: 'Accompagnement pour gagner en visibilité et contribuer à leur développement par l\'échange et l\'entraide',
      image: images.projects.entrepreneurship,
      month: 'Mai-Juin'
    },
    {
      icon: '⚕️',
      title: 'Don de Médicaments',
      description: 'Don de médicaments et de matériel pour les centres de soins',
      image: images.projects.health,
      month: 'Juin'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-500 to-accent-500 text-white py-16 overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <img
            src={images.projects.hero}
            alt="Projets Af Yakaar"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/90 to-accent-500/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Projets</h1>
          <p className="text-xl">Des actions concrètes pour un avenir meilleur</p>
        </div>
      </section>

      {/* Projects 2026 Section - Timeline */}
      <section className="py-16 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Projets 2026</h2>
            <p className="section-subtitle">
              Nos initiatives pour l'année à venir
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-6xl mx-auto">
            {projects2026.map((project, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                {/* Ligne verticale */}
                {index !== projects2026.length - 1 && (
                  <div className="absolute left-8 md:left-1/2 top-32 md:top-40 w-0.5 h-full bg-gradient-to-b from-primary-500 to-accent-500 transform md:-translate-x-1/2 z-0"></div>
                )}

                {/* Contenu Timeline */}
                <div className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Image avec overlay */}
                  <div className="w-full md:w-5/12 relative">
                    <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group">
                      <div className="relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                        {/* Mois en bas de l'image */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                            <div className="flex items-center text-primary-600">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span className="font-bold text-sm">{project.month} 2026</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Point central avec icône */}
                  <div className="hidden md:flex w-2/12 justify-center relative z-10">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                        <Target className="w-10 h-10 text-white" />
                      </div>
                      {/* Pulse effect */}
                      <div className="absolute inset-0 w-20 h-20 bg-primary-500 rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>

                  {/* Contenu texte */}
                  <div className="w-full md:w-5/12">
                    <div className="card p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-primary-500">
                      {/* Badge 2026 */}
                      <div className="inline-flex items-center bg-primary-50 px-4 py-2 rounded-full mb-4">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-bold text-primary-600 uppercase tracking-wider">Projet 2026</span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{project.title}</h3>

                      {project.date && (
                        <div className="flex items-center text-accent-600 font-semibold mb-4 bg-accent-50 px-3 py-2 rounded-lg inline-flex">
                          <Calendar className="w-5 h-5 mr-2" />
                          {project.date}
                        </div>
                      )}

                      <p className="text-gray-700 leading-relaxed text-lg">{project.description}</p>

                      {/* Indicateur mobile */}
                      <div className="md:hidden mt-6 pt-6 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Étape {index + 1}/{projects2026.length}</span>
                          <div className="flex gap-1">
                            {projects2026.map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full ${
                                  i === index ? 'bg-primary-500 w-6' : 'bg-gray-300'
                                } transition-all duration-300`}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-accent-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <Target className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Participez à Nos Projets
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Votre soutien nous permet de réaliser ces projets et d'avoir un impact durable sur les communautés
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Faire un don
          </a>
        </div>
      </section>
    </div>
  )
}

export default Projects
