import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Calendar, ExternalLink, Mail, Heart, Trophy, GraduationCap, Music, Briefcase, HeartPulse } from 'lucide-react'
import { projects2026, getCategoryById } from '../data/projectsData'

const iconMap = {
  Trophy,
  GraduationCap,
  Music,
  Briefcase,
  HeartPulse,
}

const ProjectDetail = () => {
  const { slug } = useParams()
  const projectIndex = projects2026.findIndex((p) => p.slug === slug)
  const project = projects2026[projectIndex]

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Projet introuvable</h1>
        <p className="text-gray-600 mb-8">Ce projet n'existe pas ou a été déplacé.</p>
        <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Retour aux projets
        </Link>
      </div>
    )
  }

  const cat = getCategoryById(project.category)
  const Icon = iconMap[cat.icon]
  const prev = projectIndex > 0 ? projects2026[projectIndex - 1] : null
  const next = projectIndex < projects2026.length - 1 ? projects2026[projectIndex + 1] : null

  return (
    <div className="bg-gradient-to-br from-cream-50 to-cream-100 min-h-screen">
      {/* Lien retour */}
      <div className="container mx-auto px-4 pt-6 pb-2">
        <Link to="/projects" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Retour aux projets
        </Link>
      </div>

      {/* Contenu principal : image + texte côte à côte */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 sm:h-80 lg:h-[28rem] object-cover"
              />
            </div>

            {/* Infos */}
            <div className="flex flex-col">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`inline-flex items-center gap-1.5 ${cat.color} text-white text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wide`}>
                  {Icon && <Icon className="w-4 h-4" />}
                  {cat.label}
                </span>
                <span className={`text-sm font-semibold ${cat.text} ${cat.bg} px-3 py-1 rounded-full`}>
                  {project.status}
                </span>
                {project.month && (
                  <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.month}
                  </span>
                )}
              </div>

              {/* Titre */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>

              {/* Date */}
              {project.date && (
                <p className="text-lg font-semibold text-accent-600 mb-4">{project.date}</p>
              )}

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{project.description}</p>

              {/* CTA */}
              <div className="mt-auto">
                {project.donationUrl ? (
                  <div className="bg-gradient-to-r from-accent-50 via-primary-50 to-accent-50 rounded-2xl p-6 border border-accent-100 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-to-br from-accent-500 to-accent-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <Heart className="w-6 h-6 text-white fill-white" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider font-semibold text-accent-600">Cagnotte en ligne</p>
                        {project.donationGoal && (
                          <p className="text-2xl font-black text-gray-900">
                            Objectif : {project.donationGoal.toLocaleString('fr-FR')}&nbsp;&euro;
                          </p>
                        )}
                      </div>
                    </div>
                    <a
                      href={project.donationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold text-lg py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Participer à la cagnotte
                    </a>
                  </div>
                ) : (
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 btn-primary text-lg py-3 px-8"
                  >
                    <Mail className="w-5 h-5" />
                    Nous contacter
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vidéos */}
      {project.videos && project.videos.length > 0 && (
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Vidéos</h2>
              <div className="space-y-6">
                {project.videos.map((video, i) => (
                  <div key={i}>
                    {video.title && (
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">{video.title}</h3>
                    )}
                    <div className="relative w-full rounded-xl overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        src={video.url}
                        title={video.title || `Vidéo ${i + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Navigation prev/next */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 border-t border-cream-200 pt-6">
            {prev ? (
              <Link
                to={`/projects/${prev.slug}`}
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
                to={`/projects/${next.slug}`}
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

export default ProjectDetail
