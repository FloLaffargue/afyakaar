import { Link } from 'react-router-dom'
import {
  GraduationCap,
  Heart,
  Trophy,
  TrendingUp,
  ArrowRight,
  Calendar,
  Store,
  Shirt,
  Globe,
  MapPin,
  Quote
} from 'lucide-react'
import { images } from '../data/imageData'
import { projects2026, getCategoryById } from '../data/projectsData'

const Home = () => {
  const missions = [
    {
      icon: GraduationCap,
      title: 'Éducation',
      description: 'Soutien scolaire et activités culturelles pour les enfants',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: TrendingUp,
      title: 'Entrepreneuriat',
      description: 'Développement des activités économiques locales',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Heart,
      title: 'Santé',
      description: 'Prise en charge des soins pour la population et les animaux',
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: Trophy,
      title: 'Loisirs',
      description: 'Organisation de tournoi de pétanque et activités sportives',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50'
    }
  ]

  const stats = [
    { value: '66%', label: 'Réduction Fiscale', description: 'Déduction d\'impôt sur tous vos dons' },
    { value: '100%', label: 'Impact Direct', description: 'Chaque euro bénéficie aux communautés' },
    { value: '9', label: 'Années d\'Action', description: 'Depuis 2015 au service de l\'Afrique' }
  ]

  const featuredProjects = projects2026.slice(0, 3).map((p) => {
    const cat = getCategoryById(p.category)
    return {
      ...p,
      categoryLabel: cat.label,
      categoryColor: cat.color,
    }
  })

  const entrepreneurship = [
    {
      icon: Store,
      title: 'Boutique Locale',
      description: 'Commercialisation de produits artisanaux',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon:
      Shirt,
      title: 'Défilés de Mode',
      description: 'Organisation de soirées promotionnelles',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: TrendingUp,
      title: 'Stands de Vente',
      description: 'Création d\'espaces pour femmes entrepreneurs',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    }
  ]

  const education = {
    title: 'Impact sur l\'Éducation',
    subtitle: 'École de Danse et Chant',
    description: [
      'Nous développons les talents artistiques des enfants à travers des cours de danse et de chant, leur offrant l\'opportunité de se produire en spectacle.',
      'Ces activités renforcent leur confiance et créent des perspectives d\'avenir.'
    ]
  }

  return (
    <div>
      {/* Bannière hero */}
      <section className="relative w-full h-[28rem] md:h-[36rem] lg:h-[42rem]">
        <img
          src={images.home.home2}
          alt="Af Yakaar — L'espoir en action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12 md:pb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Af Yakaar</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl drop-shadow">
              L'espoir en action, du sud de la France au Sénégal
            </p>
          </div>
        </div>
      </section>

      {/* Présentation de l'Association */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-cream-100 via-cream-50 to-cream-100">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Image */}
            <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={images.achievements.school3}
                alt="Af Yakaar au Sénégal"
                className="w-full h-96 lg:h-[550px] object-cover"
              />
            </div>

            {/* Texte */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">L'espoir en action, du sud de la France au Sénégal</h2>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-5">
                Depuis plus de <span className="font-semibold text-primary-600">10 ans</span>, nous tissons un pont entre Mandelieu et le Sénégal. Chaque projet que nous portons — un tournoi de pétanque, une salle de classe équipée, un cours de danse — naît d'une conviction simple : la solidarité change des vies, des deux côtés de la Méditerranée.
              </p>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
                Af Yakaar, c'est avant tout une aventure humaine portée par des bénévoles passionnés, où chaque don se transforme en impact concret sur le terrain.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-base font-medium px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4" /> Mandelieu
                </span>
                <span className="inline-flex items-center gap-2 bg-accent-50 text-accent-700 text-base font-medium px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4" /> Depuis 2015
                </span>
                <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-base font-medium px-4 py-2 rounded-full">
                  <Globe className="w-4 h-4" /> Sénégal
                </span>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center text-lg text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
              >
                Découvrir notre histoire
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-cream-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Notre Mission</h2>
            <p className="section-subtitle">
              Quatre piliers pour un impact durable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missions.map((mission, index) => {
              const Icon = mission.icon
              return (
                <div key={index} className="card p-6 hover:scale-105 transition-transform duration-300">
                  <div className={`${mission.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                    <Icon className={`w-8 h-8 ${mission.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{mission.title}</h3>
                  <p className="text-gray-600">{mission.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Nos Actions */}
      <section className="py-16 bg-gradient-to-br from-cream-50 to-cream-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Nos Actions</h2>
            <p className="section-subtitle">
              Les projets en cours que nous portons
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredProjects.map((project, index) => (
              <Link
                key={index}
                to={`/projects/${project.slug}`}
                className="card group flex flex-col hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow">
                    <Calendar className="w-3 h-3" />
                    {project.month}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className={`self-start inline-flex items-center ${project.categoryColor} text-white text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide mb-3`}>
                    {project.categoryLabel}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
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
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center btn-primary text-lg py-3 px-8"
            >
              Voir tous nos projets
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Education Impact Section */}
      <section className="py-16 bg-cream-200">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              {/* Image */}
              <div className="lg:col-span-3 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={images.home.school4}
                  alt="École de danse et chant"
                  className="w-full h-80 lg:h-[450px] object-cover"
                />
              </div>

              {/* Contenu */}
              <div className="lg:col-span-2 card p-8">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <div className="bg-primary-100 p-4 rounded-full">
                    <GraduationCap className="w-12 h-12 text-primary-600" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{education.title}</h2>
                <h3 className="text-xl text-primary-600 font-semibold mb-6">{education.subtitle}</h3>
                <div className="space-y-4">
                  {education.description.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneurship Section */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Soutien aux Entrepreneurs</h2>
            <p className="section-subtitle">
              Développer l'économie locale et l'autonomie
            </p>
          </div>

          {/* Image entrepreneuriat */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src={images.home.femmes_auto}
                alt="Entrepreneuriat local au Sénégal"
                className="w-full h-64 md:h-[520px] object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {entrepreneurship.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="card p-6 hover:scale-105 transition-transform duration-300">
                  <div className={`${item.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                    <Icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Le mot de la présidente */}
      <section className="py-16 md:py-20 bg-cream-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center mb-12">Le Mot de la Présidente</h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Photo */}
              <div className="lg:col-span-2 flex flex-col items-center">
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary-200">
                  <img
                    src={images.home.nathalie2}
                    alt="La présidente d'Af Yakaar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-lg font-bold text-gray-900">La Présidente</p>
                <p className="text-primary-600 font-medium">Fondatrice d'Af Yakaar</p>
              </div>

              {/* Citation */}
              <div className="lg:col-span-3">
                <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-10">
                  <Quote className="absolute top-4 left-4 w-10 h-10 text-primary-200" />
                  <blockquote className="relative z-10">
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic mb-6">
                      Af Yakaar est né d'un rêve partagé : celui de créer un lien vivant entre la France et le Sénégal. Chaque action que nous menons, qu'il s'agisse d'équiper une école, d'organiser un tournoi de pétanque ou de soutenir une femme entrepreneur, porte en elle la conviction que la solidarité n'a pas de frontières. Ce qui me touche le plus, c'est de voir les sourires des enfants et la fierté des familles que nous accompagnons. C'est cette énergie qui nous pousse à aller toujours plus loin.
                    </p>
                    <footer className="border-t border-cream-200 pt-4">
                      <p className="text-primary-600 font-semibold">— La Présidente d'Af Yakaar</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Partenaires */}
      <section className="py-16 bg-cream-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Nos Partenaires</h2>
            <p className="section-subtitle">
              Ils nous soutiennent dans nos actions
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {[
              { name: 'Mairie de Mandelieu', initials: 'MM' },
              { name: 'Fondation Solidarité', initials: 'FS' },
              { name: 'Sport Pour Tous', initials: 'SPT' },
              { name: 'Éducation Sans Frontières', initials: 'ESF' },
              { name: 'Santé Afrique', initials: 'SA' },
            ].map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary-600">{partner.initials}</span>
                </div>
                <p className="text-sm font-semibold text-gray-700 text-center">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Stats */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-accent-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Votre Don Fait la Différence
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Rejoignez-nous dans notre mission pour construire un avenir meilleur pour l'Afrique
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-cream-50 rounded-2xl p-8 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 border-4 border-primary-200/30">
                <div className="text-6xl md:text-7xl font-black text-primary-600 mb-4">{stat.value}</div>
                <div className="text-2xl font-bold text-gray-900 mb-3">{stat.label}</div>
                <div className="text-gray-600 text-base">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-cream-50 text-primary-600 hover:bg-cream-200 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Nous soutenir
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
