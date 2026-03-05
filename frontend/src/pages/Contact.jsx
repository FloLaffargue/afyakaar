import { useState } from 'react'
import { Mail, Facebook, Instagram, Send } from 'lucide-react'
import { images } from '../data/imageData'
import { sendContactMessage } from '../api'

const Contact = () => {
  const [formData, setFormData] = useState({ objet: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError(null)
    try {
      await sendContactMessage({
        subject: formData.objet,
        email: formData.email,
        message: formData.message,
      })
      setSubmitted(true)
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer.")
    } finally {
      setSending(false)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-500 to-accent-500 text-white py-16 overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <img
            src={images.contact.hero}
            alt="Contact Af Yakaar"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/90 to-accent-500/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-Nous</h1>
          <p className="text-xl">Ensemble, construisons un avenir meilleur pour l'Afrique</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          {/* Formulaire de contact */}
          <div className="max-w-5xl mx-auto">
            <div className="card p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Envoyez-nous un message</h2>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="bg-green-50 text-green-700 p-6 rounded-xl">
                    <p className="text-lg font-semibold mb-2">Merci pour votre message !</p>
                    <p>Nous avons bien reçu votre message et vous répondrons dans les meilleurs délais.</p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ objet: '', email: '', message: '' }) }}
                      className="mt-4 text-primary-600 font-medium hover:underline"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="objet" className="block text-sm font-semibold text-gray-700 mb-2">Objet</label>
                    <input
                      type="text"
                      id="objet"
                      required
                      value={formData.objet}
                      onChange={(e) => setFormData({ ...formData, objet: e.target.value })}
                      placeholder="L'objet de votre message"
                      className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Votre message..."
                      className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition resize-vertical"
                    />
                  </div>
                  {error && (
                    <div className="bg-red-50 text-red-700 p-4 rounded-xl text-center">
                      {error}
                    </div>
                  )}
                  <div className="text-center pt-2">
                    <button type="submit" disabled={sending} className="btn-primary inline-flex items-center gap-2 py-3 px-8 disabled:opacity-50">
                      <Send className="w-5 h-5" />
                      {sending ? 'Envoi en cours...' : 'Envoyer'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-cream-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Suivez-nous sur les réseaux sociaux</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Restez informés de nos actions, événements et de l'impact de vos dons en nous suivant sur Facebook et Instagram.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1877F2] hover:bg-[#0c63d4] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-8 h-8" fill="currentColor" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F56040] hover:from-[#6b2d94] hover:via-[#c4275a] hover:to-[#d94f2f] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact
