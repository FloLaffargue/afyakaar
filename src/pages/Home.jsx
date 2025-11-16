import { Link } from 'react-router-dom'
import {
  GraduationCap,
  Heart,
  Trophy,
  Music,
  TrendingUp,
  ArrowRight,
  Users,
  Target,
  Award,
  Calendar,
  Store,
  Shirt,
  Sparkles,
  Shield,
  CheckCircle,
  Globe,
  Zap,
  Lock
} from 'lucide-react'
import { images } from '../data/imageData'
import Carousel from '../components/Carousel'

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

  const achievements = [
    {
      title: 'Aide aux écoles de Saly',
      description: 'Fournitures scolaires, doudous et matelas pour la sieste des enfants',
      image: images.achievements.school,
      icon: '🏫',
      month: 'Janvier-Février'
    },
    {
      title: 'Tournoi de Pétanque',
      description: '63 équipes participantes, dons de boules, accessoires et équipements complets',
      image: images.achievements.petanque,
      icon: '🎯',
      month: 'Mars'
    },
    {
      title: 'Équipement Sportif',
      description: 'Dons de chaussures d\'athlétisme et baskets pour la Fédération sénégalaise d\'athlétisme basée à MBOUR',
      image: images.achievements.sports,
      icon: '👟',
      month: 'Juin-Juillet'
    }
  ]

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

  const values = [
    {
      icon: Sparkles,
      title: 'Notre Passion',
      description: 'Un engagement sincère pour l\'Afrique',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Heart,
      title: 'Solidarité',
      description: 'Unis pour un impact durable',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Shield,
      title: 'Responsabilité',
      description: 'Transparence dans chaque action',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: CheckCircle,
      title: 'Intégrité',
      description: 'Honnêteté et éthique avant tout',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Globe,
      title: 'Diversité',
      description: 'Richesse de nos différences',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      icon: Zap,
      title: 'Engagement',
      description: 'Action concrète et déterminée',
      color: 'from-red-400 to-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Lock,
      title: 'Confiance',
      description: 'Relation authentique et durable',
      color: 'from-indigo-400 to-indigo-600',
      bgColor: 'bg-indigo-50'
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

  const carouselSlides = [
    {
      image: images.achievements.school,
      title: 'Soutien Scolaire',
      description: 'Fournitures scolaires et matériel éducatif pour les écoles de Saly'
    },
    {
      image: images.achievements.petanque,
      title: 'Tournoi de Pétanque',
      description: '63 équipes participantes, promotion du sport et de la convivialité'
    },
    {
      image: images.projects.dance,
      title: 'École de Danse et Chant',
      description: 'Développement des talents artistiques des enfants'
    },
    {
      image: images.achievements.sports,
      title: 'Équipement Sportif',
      description: 'Dons de chaussures et équipements pour la Fédération d\'athlétisme'
    },
    {
      image: images.projects.entrepreneurship,
      title: 'Entrepreneuriat Local',
      description: 'Soutien aux femmes entrepreneurs et développement économique'
    }
  ]

  return (
    <div>
      {/* Carousel Section */}
      <section className="bg-cream-200">
        <Carousel slides={carouselSlides} />
      </section>

      {/* Nos Valeurs Section */}
      <section className="py-16 bg-gradient-to-br from-cream-100 via-cream-50 to-cream-100 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="section-title">Nos Valeurs</h2>
            <p className="section-subtitle">
              Les principes qui guident chacune de nos actions au service de l'Afrique
            </p>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="card p-6 h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-primary-200">
                    {/* Icon with gradient background */}
                    <div className={`${value.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      <Icon className={`w-8 h-8 bg-gradient-to-br ${value.color} bg-clip-text text-transparent relative z-10 group-hover:text-white transition-all duration-500`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-2 text-center text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      {value.description}
                    </p>

                    {/* Decorative element */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-lg`}></div>
                  </div>
                </div>
              )
            })}
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

      {/* Achievements Section - Timeline */}
      <section className="py-16 bg-gradient-to-br from-cream-50 to-cream-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos Réalisations en 2025</h2>
            <p className="section-subtitle">
              Des actions concrètes pour un impact réel
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                {/* Ligne verticale */}
                {index !== achievements.length - 1 && (
                  <div className="absolute left-8 md:left-1/2 top-32 md:top-40 w-0.5 h-full bg-gradient-to-b from-primary-500 to-accent-500 transform md:-translate-x-1/2 z-0"></div>
                )}

                {/* Contenu Timeline */}
                <div className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Image avec overlay */}
                  <div className="w-full md:w-5/12 relative">
                    <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group">
                      <div className="relative">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>


                        {/* Mois en bas de l'image */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                            <div className="flex items-center text-primary-600">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span className="font-bold text-sm">{achievement.month} 2025</span>
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
                        <Award className="w-10 h-10 text-white" />
                      </div>
                      {/* Pulse effect */}
                      <div className="absolute inset-0 w-20 h-20 bg-primary-500 rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>

                  {/* Contenu texte */}
                  <div className="w-full md:w-5/12">
                    <div className="card p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-accent-500">
                      {/* Badge 2025 */}
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{achievement.title}</h3>

                      <p className="text-gray-700 leading-relaxed text-lg">{achievement.description}</p>

                      {/* Indicateur mobile */}
                      <div className="md:hidden mt-6 pt-6 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Réalisation {index + 1}/{achievements.length}</span>
                          <div className="flex gap-1">
                            {achievements.map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full ${
                                  i === index ? 'bg-accent-500 w-6' : 'bg-gray-300'
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

      {/* Education Impact Section */}
      <section className="py-16 bg-cream-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={images.projects.dance}
                  alt="École de danse et chant"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenu */}
              <div className="card p-8">
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
                src={images.projects.entrepreneurship}
                alt="Entrepreneuriat local au Sénégal"
                className="w-full h-64 md:h-96 object-cover"
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
