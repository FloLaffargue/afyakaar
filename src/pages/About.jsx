import { Users, Calendar, MapPin, Target } from 'lucide-react'
import { images } from '../data/imageData'

const About = () => {
  const team = [
    { name: 'Nathalie Prophète', role: 'Présidente' },
    { name: 'Sébastien Prophète', role: 'Vice-président' },
    { name: 'Andy Armbruster', role: 'Secrétaire' }
  ]

  const domains = [
    {
      icon: '📚',
      title: 'Éducation',
      description: 'Fournitures et infrastructures scolaires'
    },
    {
      icon: '❤️',
      title: 'Santé',
      description: 'Soins pour humains et animaux'
    },
    {
      icon: '🏆',
      title: 'Sport',
      description: 'Tournois et équipements sportifs'
    },
    {
      icon: '🎭',
      title: 'Culture',
      description: 'Danse, chant et mode'
    },
    {
      icon: '💼',
      title: 'Économie',
      description: 'Soutien aux entrepreneurs locaux'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-500 to-accent-500 text-white py-16 overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <img
            src={images.achievements.school}
            alt="Équipe Af Yakaar"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/90 to-accent-500/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Qui sommes-nous ?</h1>
          <p className="text-xl">Découvrez notre histoire et notre équipe</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Image du Sénégal */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src={images.achievements.school3}
                alt="Sénégal - Af Yakaar"
                className="w-full h-64 md:h-96 object-cover"
                style={{'height': '500px'}}
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card p-6">
                <Calendar className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Fondée en Septembre 2015</h3>
                <p className="text-gray-600">
                  Plus de 9 ans d'engagement au service des communautés africaines
                </p>
              </div>
              <div className="card p-6">
                <MapPin className="w-12 h-12 text-accent-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Basée à Mandelieu</h3>
                <p className="text-gray-600">
                  Association humanitaire loi 1901, intervenant principalement au Sénégal
                </p>
              </div>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Notre Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Af Yakaar est une association humanitaire dédiée à l'amélioration des conditions de vie
                des populations en Afrique, principalement au Sénégal. Nous croyons en un développement
                durable et équitable, centré sur l'éducation, la santé, le sport et la culture.
              </p>
            </div>

            <div className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Avantage Fiscal</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                En tant qu'association loi 1901, vos dons à Af Yakaar ouvrent droit à une
                <span className="font-bold text-accent-600"> réduction d'impôt de 66%</span>.
                Chaque euro donné a un impact direct sur nos projets et bénéficie aux communautés que nous soutenons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Notre Équipe</h2>
            <p className="section-subtitle">
              Des personnes engagées pour faire la différence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="bg-primary-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Nos Domaines d'Action</h2>
            <p className="section-subtitle">
              Une approche globale pour un impact durable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {domains.map((domain, index) => (
              <div key={index} className="card p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">{domain.icon}</div>
                <h3 className="text-lg font-bold mb-2">{domain.title}</h3>
                <p className="text-gray-600 text-sm">{domain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-accent-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-bold italic max-w-3xl mx-auto">
            « Ensemble, construisons un avenir meilleur pour l'Afrique »
          </blockquote>
        </div>
      </section>
    </div>
  )
}

export default About
