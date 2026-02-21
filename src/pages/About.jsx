import { Users, Calendar, MapPin, Target } from 'lucide-react'
import { images } from '../data/imageData'

const About = () => {
  const team = [
    {
      name: 'Nathalie Prophète',
      role: 'Présidente',
      description: 'Fondatrice d\'Af Yakaar, Nathalie porte l\'association depuis ses débuts en 2015. Originaire du Sénégal et installée à Mandelieu, elle met son énergie et sa connaissance du terrain au service de chaque projet. C\'est elle qui tisse les liens entre les bénévoles français et les communautés sénégalaises.',
    },
    {
      name: 'Sébastien Prophète',
      role: 'Vice-président',
      description: 'Pilier de l\'association, Sébastien coordonne la logistique des événements et des missions sur le terrain. De l\'organisation des tournois de pétanque à l\'acheminement du matériel scolaire, il veille à ce que chaque action se concrétise efficacement.',
    },
    {
      name: 'Andy Armbruster',
      role: 'Secrétaire',
      description: 'Andy assure le suivi administratif et la communication de l\'association. Rigoureux et impliqué, il gère les relations avec les partenaires, la rédaction des comptes-rendus et la visibilité d\'Af Yakaar auprès du public et des institutions.',
    }
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
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Deux images côte à côte */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={images.achievements.school}
                  alt="École soutenue par Af Yakaar"
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={images.achievements.school3}
                  alt="Af Yakaar au Sénégal"
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
            </div>

            {/* Texte */}
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-sm font-medium px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4" /> Depuis septembre 2015
                </span>
                <span className="inline-flex items-center gap-2 bg-accent-50 text-accent-700 text-sm font-medium px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4" /> Mandelieu
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-left">Une association au service de l'Afrique</h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-4 text-left">
                Af Yakaar est une association humanitaire loi 1901 fondée en septembre 2015 à Mandelieu-la-Napoule. Portée par des bénévoles passionnés, elle s'engage pour l'amélioration des conditions de vie des populations en Afrique, principalement au Sénégal.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4 text-left">
                Notre action repose sur cinq piliers : l'éducation, la santé, le sport, la culture et le soutien à l'entrepreneuriat local. Qu'il s'agisse de fournir du matériel scolaire aux écoles de Saly, d'organiser des tournois de pétanque fédérateurs, de développer une école de danse pour les enfants ou d'accompagner des femmes entrepreneurs, chaque projet est pensé pour créer un impact durable et concret.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 text-left">
                Nous croyons en un développement équitable, construit sur l'échange et la solidarité entre la France et le Sénégal. Chaque euro donné bénéficie directement aux communautés que nous soutenons.
              </p>

              <div className="bg-accent-50 border-l-4 border-accent-500 p-5 rounded-lg text-left">
                <p className="text-gray-700 text-base leading-relaxed">
                  <span className="font-bold text-accent-600">Avantage fiscal :</span> en tant qu'association loi 1901, vos dons ouvrent droit à une réduction d'impôt de 66%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-cream-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Notre Équipe</h2>
            <p className="section-subtitle">
              Des personnes engagées pour faire la différence
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {team.map((member, index) => (
              <div key={index} className="card flex flex-col sm:flex-row items-center sm:items-start gap-6 p-8">
                <div className="flex-shrink-0">
                  <div className="bg-primary-100 w-24 h-24 rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary-600" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains Section */}
      {/*<section className="py-16 bg-cream-50">*/}
      {/*  <div className="container mx-auto px-4">*/}
      {/*    <div className="text-center mb-12">*/}
      {/*      <h2 className="section-title">Nos Domaines d'Action</h2>*/}
      {/*      <p className="section-subtitle">*/}
      {/*        Une approche globale pour un impact durable*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">*/}
      {/*      {domains.map((domain, index) => (*/}
      {/*        <div key={index} className="card p-6 text-center hover:scale-105 transition-transform duration-300">*/}
      {/*          <div className="text-5xl mb-4">{domain.icon}</div>*/}
      {/*          <h3 className="text-lg font-bold mb-2">{domain.title}</h3>*/}
      {/*          <p className="text-gray-600 text-sm">{domain.description}</p>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

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
