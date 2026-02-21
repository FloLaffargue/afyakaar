import { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight as ArrowRightIcon, Calendar, ExternalLink, Mail, Heart, Trophy, GraduationCap, Music, Briefcase, HeartPulse, Image, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { allProjects, getCategoryById } from '../data/projectsData'

const iconMap = {
  Trophy,
  GraduationCap,
  Music,
  Briefcase,
  HeartPulse,
}

const ProjectDetail = () => {
  const { slug } = useParams()
  const project = allProjects.find((p) => p.slug === slug)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const goPrev = useCallback(() => {
    if (project?.gallery) {
      setLightboxIndex((i) => (i > 0 ? i - 1 : project.gallery.length - 1))
    }
  }, [project])
  const goNext = useCallback(() => {
    if (project?.gallery) {
      setLightboxIndex((i) => (i < project.gallery.length - 1 ? i + 1 : 0))
    }
  }, [project])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [lightboxIndex, closeLightbox, goPrev, goNext])

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

  return (
    <div className="min-h-screen">
      {/* Lien retour */}
      <div className="bg-cream-50 border-b border-cream-200">
        <div className="container mx-auto px-4 py-4">
          <Link to="/projects" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Retour aux projets
          </Link>
        </div>
      </div>

      {/* Contenu principal : image + texte côte à côte */}
      <section className="py-12 bg-white">
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

              {/* Description courte */}
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

      {/* Description détaillée */}
      {project.longDescription && (
        <section className="py-14 bg-cream-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">À propos de ce projet</h2>
              <div className={`border-l-4 ${cat.border} bg-white rounded-r-2xl shadow-md p-8 md:p-10`}>
                <div className="flex items-start gap-4">
                  <div className={`hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full ${cat.bg} items-center justify-center`}>
                    {Icon && <Icon className={`w-6 h-6 ${cat.text}`} />}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{project.longDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Galerie Photos */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Image className="w-6 h-6 text-primary-500" />
                Galerie Photos
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className="rounded-xl overflow-hidden shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <img
                      src={img}
                      alt={`${project.title} — photo ${i + 1}`}
                      className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Vidéos */}
      {project.videos && project.videos.length > 0 && (
        <section className="py-14 bg-cream-100">
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
      {/* Lightbox modale */}
      {lightboxIndex !== null && project.gallery && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Bouton fermer */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Compteur */}
          <div className="absolute top-4 left-4 text-white/70 text-sm font-medium">
            {lightboxIndex + 1} / {project.gallery.length}
          </div>

          {/* Navigation précédent */}
          {project.gallery.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="absolute left-4 text-white/70 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
          )}

          {/* Image */}
          <img
            src={project.gallery[lightboxIndex]}
            alt={`${project.title} — photo ${lightboxIndex + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Navigation suivant */}
          {project.gallery.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="absolute right-4 text-white/70 hover:text-white transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default ProjectDetail
