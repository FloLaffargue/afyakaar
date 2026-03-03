import { Link } from 'react-router-dom'
import { Heart, Info, Mail } from 'lucide-react'
import { images } from '../data/imageData'

const Donate = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-500 to-accent-500 text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.contact.hero}
            alt="Faire un don à Af Yakaar"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/90 to-accent-500/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-12 h-12 mr-4 fill-white" />
            <h1 className="text-4xl md:text-5xl font-bold">Faire un Don</h1>
          </div>
          <p className="text-xl text-center">Chaque geste compte pour construire un avenir meilleur</p>
        </div>
      </section>

      {/* Donation Content */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="card p-8 md:p-12">
              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Info className="w-6 h-6 mr-2 text-primary-600" />
                  Avantage Fiscal
                </h3>
                <p className="text-gray-700 text-lg">
                  Vos dons à Af Yakaar ouvrent droit à une <span className="font-bold text-primary-600">réduction d'impôt de 60%</span>.
                  Par exemple, un don de 100€ ne vous coûte réellement que 40€ après déduction fiscale.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Comment faire un don ?</h3>
                  <p className="text-gray-700 mb-4">
                    Pour effectuer un don, vous pouvez nous contacter par email.
                    Nous vous fournirons toutes les informations nécessaires et vous recevrez un reçu fiscal
                    pour votre déclaration d'impôts.
                  </p>
                </div>

                <div className="bg-accent-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Impact de votre don</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-accent-600 font-bold mr-2">•</span>
                      <span>100% de votre don bénéficie directement aux communautés</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-600 font-bold mr-2">•</span>
                      <span>Soutien à l'éducation, la santé, le sport et la culture</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-600 font-bold mr-2">•</span>
                      <span>Développement économique local et autonomie</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-600 font-bold mr-2">•</span>
                      <span>Transparence totale sur l'utilisation des fonds</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center pt-6">
                  <Link
                    to="/contact"
                    className="btn-primary inline-flex items-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Nous contacter pour un don
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-accent-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-bold italic max-w-3xl mx-auto">
            « Chaque don fait la différence. Merci de votre soutien ! »
          </blockquote>
        </div>
      </section>
    </div>
  )
}

export default Donate
