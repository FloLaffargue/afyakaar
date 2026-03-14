import { Calendar, MapPin, Quote } from 'lucide-react'
import { images } from '../data/imageData'

const About = () => {
  const team = [
    {
      name: 'Nathalie Prophète',
      role: 'Présidente',
      photo: images.team.nathalie,
      description: 'Assure la communication avec les partenaires locaux, la recherche de financement',
    },
    {
      name: 'Sébastien Prophète',
      role: 'Vice-président',
      photo: images.team.sebastien,
      description: 'Gestion des projets sportifs et culturels.',
    },
    {
      name: 'Andy Armbruster',
      role: 'Secrétaire',
      photo: images.team.andy,
      description: 'Aide aux projets sportifs et à la recherche de partenaires.',
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
          <p className="text-xl">Découvrez notre histoire</p>
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
                  src={images.about.about1}
                  alt="École soutenue par Af Yakaar"
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={images.about.about2}
                  alt="Af Yakaar au Sénégal"
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
            </div>

            {/* Notre Histoire */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="section-title text-center mb-4">Notre Histoire</h2>
              <p className="section-subtitle text-center mb-12">Le voyage qui a changé ma vie</p>

              <div className="relative border-l-4 border-primary-300 pl-8 md:pl-12 space-y-6">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary-500 border-4 border-white shadow" />

                <p className="text-gray-700 text-lg leading-relaxed">
                  En 2012 une amie me propose de les rejoindre au Sénégal, je décide de partir dix jours avec mes deux fils (Andy et Sébastien),
                  dans la petite ville de Saly.
                  Dès notre arrivée, nous avons ressentis un bien-être indescriptible, j’avais le sentiment
                  d'être déjà venue, de toujours avoir connu ce pays.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Lors de notre séjour, nous avons rencontrés des personnes extraordinaires, dôtés d’une grande
                  gentillesse et d'une bienveillance incroyable. Toujours le sourire malgré leur vie difficile.
                  Nous avons partagés des moments privilégiés avec eux. Lors de notre départ, nous avons compris que ce
                  voyage allait changer notre vie.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Depuis, nous retournons ensemble sur Saly chaque année. Au fil du temps, nous avons tissés des liens très fort, fait des rencontres bouleversantes et partagé des moments magiques.
                  Je savais au plus profond de moi que ce n'était que le début d'une belle et longue aventure.
                </p>

                <div className="relative">
                  <div className="absolute -left-[3.25rem] md:-left-[4.25rem] top-1 w-6 h-6 rounded-full bg-accent-500 border-4 border-white shadow" />
                  <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                    <p className="text-gray-800 text-lg leading-relaxed">
                      En 2015, j'ai décidé de créer officiellement l'association <span className="text-primary-600 font-bold">AF YAKAAR</span> — « yakaar » signifie « espoir » en wolof. Depuis, avec mes deux fils, nous oeuvrons pour financer un maximum de projets au Sénégal.
                    </p>
                    <p className="text-primary-600 font-semibold mt-3 text-sm">— Nathalie Prophète, Fondatrice</p>
                  </div>
                </div>
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="card p-8 text-center flex flex-col items-center">
                <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg ring-4 ring-primary-100 mb-5">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Portrait</h2>
            <p className="section-subtitle">
              Notre rencontre avec Arouna
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Portrait */}
              <div className="lg:col-span-2 flex flex-col items-center">
                <div className="w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src={images.about.about3}
                    alt="Arouna"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Arouna</h3>
                <p className="text-primary-600 font-medium">Saly, Sénégal</p>
              </div>

              {/* Histoire */}
              <div className="lg:col-span-3 flex flex-col gap-6">
                <div className="relative bg-white rounded-2xl shadow-md p-8 md:p-10">
                  <Quote className="absolute top-4 left-4 w-10 h-10 text-primary-200" />
                  <blockquote className="relative z-10">
                    <p className="text-gray-700 text-lg leading-relaxed italic mb-4">
                      Ma rencontre avec Nathalie m’a permis d’évoluer dans ma vie d’homme, de mari et de père de famille.
                      D’avoir un soutien moral, d’avoir des conseils pour ma vie professionnel, Nathalie m’a donné la volonté
                      de me dépasser pour réussir mes projets.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed italic mb-4">
                      J’ai trouvé une famille, une maman de coeur, deux frères qui me soutiennent au quotidien et m’apportent de la
                      force.<br />
                      Aujourd’hui le regard des gens a changé sur moi, on me respecte, j’ai le sentiment enfin d’être
                      quelqu’un ! Par leur affection, je me sens fort, j’ai appris des valeurs essentielles.
                      Être une belle personne et me battre pour ma famille.
                    </p>
                    <footer className="border-t border-cream-200 pt-4">
                      <p className="text-primary-600 font-semibold">— Arouna</p>
                    </footer>
                  </blockquote>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-700 text-base leading-relaxed">
                    Lors de notre voyage en 2012, mon fils Sébastien a fait la connaissance d'Arouna, un jeune garçon de 22 ans. Il
                    était serveur dans le bar restaurant de la résidence où nous logions. Ses parents sont décédés quand il
                    était très jeune. Originaire de Tambacounda, il a dû quitter à 14 ans son village natal pour trouver du travail.
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Arrivé sur Saly, il a eu la chance de rencontrer des personnes qui l’ont aidé pour trouver un emploi et un logement. Il était serveur dans un restaurant et logée dans une petite pièce avec un colocataire.
                    Malheureusement, le patron du restaurant est décédé quelques années plus tard et Arouna a perdu son
                    travail. Sans revenu, il devait trouver une solution pour subvenir aux besoins de sa famille et payer son logement.
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Nous étions très touchés par son histoire, sa gentillesse et son sourire qui ne le quittaient pas.
                    Nous avons donc décidé de l’aider, tout en d'abord en lui payant son loyer, mais aussi en l'aidant à trouver une chambre que nous avons
                    meublé ensemble, afin de lui permettre de pouvoir rester sur Saly, vile très touristique.
                    Il a pu retrouver un emploi quelques mois plus tard.
                    Au fils des années, mon fils et Arouna sont devenus inséparables.
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Aujourd'hui, il a construit sa vie d’homme, s’est marié avec sa femme Koumba et a fondé une famille de 3 enfants: Karim, Maman et Mamadou. Tous vivent à 400 km de Saly, dans un petit village a côté de Tambacounda. Malgré la distance qui les sépare , ils restent unis
                    et gardent l’espoir de pouvoir réaliser ensemble leur projet dans leur petit village afin d’être réunis pour
                    toujours.
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Pour nous c’était une évidence, il est rentré dans nos vies .et est devenu un membre de notre famille.
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Voilà notre histoire
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Portrait */}
      <section className="py-16 bg-cream-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Quelques souvenirs avec Arouna et sa famille</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {images.portrait && images.portrait.map((photo, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg aspect-square">
                <img
                  src={photo}
                  alt={`Souvenir avec Arouna ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
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
