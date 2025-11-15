import { Heart, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logo}
                alt="Logo Af Yakaar"
                className="h-12 w-12 object-contain"
              />
              <h3 className="text-xl font-bold">Af Yakaar</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Association humanitaire loi 1901 basée à Mandelieu, intervenant principalement au Sénégal.
            </p>
            <p className="text-primary-400 font-semibold mt-4">
              Réduction d'impôt de 66% sur vos dons
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Qui sommes-nous ?
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Nos Projets
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Actualités
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  151 impasse de la Sumerie<br />
                  Résidence les Terrasses Bat F<br />
                  06210 Mandelieu
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-primary-400" />
                <a href="tel:+33617808205" className="text-gray-400 hover:text-primary-400 transition-colors">
                  06 17 80 82 05
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-primary-400" />
                <a href="mailto:af.yakaar@outlook.fr" className="text-gray-400 hover:text-primary-400 transition-colors">
                  af.yakaar@outlook.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-primary-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-primary-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              WhatsApp: +33 6 75 18 61 57
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Af Yakaar. Tous droits réservés.</p>
          <p className="mt-2 italic">« Ensemble, construisons un avenir meilleur pour l'Afrique »</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
