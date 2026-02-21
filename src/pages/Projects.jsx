import { Link } from 'react-router-dom'
import { Calendar, Trophy, GraduationCap, Music, Briefcase, HeartPulse, Users, Heart } from 'lucide-react'
import { images } from '../data/imageData'
import { projects2026, categories as categoriesData, getCategoryById } from '../data/projectsData'

const iconMap = { Trophy, GraduationCap, Music, Briefcase, HeartPulse }

const Projects = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div>
      {/* Hero compact */}
      <section className="relative bg-gradient-to-r from-primary-500 to-accent-500 text-white py-14 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.projects.hero}
            alt="Projets Af Yakaar"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/90 to-accent-500/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Nos Projets 2026</h1>
          <p className="text-xl mb-8 max-w-2xl">Des actions concrètes pour un avenir meilleur au Sénégal</p>

          {/* Pastilles de domaine */}
          <div className="flex flex-wrap gap-3">
            {categoriesData.map((cat) => {
              const Icon = iconMap[cat.icon]
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollTo(cat.id)}
                  className="flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Grille de projets */}
      <section className="py-16 bg-gradient-to-br from-cream-50 to-cream-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Projets 2026</h2>
            <p className="section-subtitle">Nos initiatives pour l'année à venir</p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects2026.map((project, index) => {
              const cat = getCategoryById(project.category)
              const Icon = iconMap[cat.icon]

              return (
                <Link
                  key={index}
                  to={`/projects/${project.slug}`}
                  id={cat.id}
                  className="card group flex flex-col hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    {/* Tag mois flottant */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow">
                      <Calendar className="w-3 h-3" />
                      {project.month}
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1.5 ${cat.color} text-white text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide`}>
                        {Icon && <Icon className="w-3 h-3" />}
                        {cat.label}
                      </span>
                      <span className={`text-xs font-semibold ${cat.text} ${cat.bg} px-2.5 py-0.5 rounded-full`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                    {project.date && (
                      <p className="text-sm font-medium text-accent-600 mb-2">{project.date}</p>
                    )}
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{project.description}</p>
                    {project.donationUrl && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-lg p-3 flex items-center gap-3">
                          <div className="bg-gradient-to-br from-accent-500 to-accent-600 w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Heart className="w-4 h-4 text-white fill-white" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[11px] uppercase tracking-wider font-semibold text-accent-600">Cagnotte en ligne</p>
                            {project.donationGoal && (
                              <p className="text-base font-bold text-gray-900">
                                {project.donationGoal.toLocaleString('fr-FR')}&nbsp;&euro;
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bande Impact */}
      <section className="py-12 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-1">5</div>
              <div className="text-white/80 text-sm uppercase tracking-wider font-medium">Projets en 2026</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-1">3</div>
              <div className="text-white/80 text-sm uppercase tracking-wider font-medium">Écoles soutenues</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-1">500+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider font-medium">Bénéficiaires</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA split */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Participez à Nos Projets</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Votre soutien nous permet de réaliser ces projets et d'avoir un impact durable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <Link
              to="/contact"
              className="flex-1 flex items-center gap-3 justify-center bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Heart className="w-5 h-5" />
              <div className="text-left">
                <div className="text-base">Faire un don</div>
                <div className="text-xs font-normal opacity-80">Soutenez nos actions</div>
              </div>
            </Link>
            <Link
              to="/contact"
              className="flex-1 flex items-center gap-3 justify-center bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Users className="w-5 h-5" />
              <div className="text-left">
                <div className="text-base">Devenir bénévole</div>
                <div className="text-xs font-normal opacity-80">Rejoignez l'équipe</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
