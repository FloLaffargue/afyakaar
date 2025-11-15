import school from '../../src/assets/school.png'
import school2 from '../../src/assets/school_2.jpg'
import school3 from '../../src/assets/school_3.jpg'
import petanque from '../../src/assets/petanque.jpg'
import sports from '../../src/assets/sports.png'
import dance from '../../src/assets/dance.png'
import petanque2026 from '../../src/assets/petanque_2026.jpg'
import health from '../../src/assets/health.png'
import entrepreneurship from '../assets/entrepreneurship.png'

export const images = {
  hero: {
    main: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80',
    alt: 'Enfants africains souriants - Association humanitaire'
  },

  missions: {
    education: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80',
    entrepreneuriat: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80',
    sante: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80',
    loisirs: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80'
  },

  achievements: {
    school,
    school3,
    petanque,
    petanque2026,
    sports,
    dance
  },

  // Images pour la page À propos
  about: {
    hero: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&q=80',
    team: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
    senegal: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80'
  },

  // Images pour la page Projets
  projects: {
    petanque,
    petanque2026,
    dance,
    school,
    health,
    entrepreneurship,
    hero: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80',
  },

  // Images pour la page Contact
  contact: {
    hero: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80',
    senegal: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80'
  },

  // Images génériques
  generic: {
    africa: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80',
    children: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
    community: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
    hands: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80'
  }
}

// Fonction utilitaire pour obtenir une image avec fallback
export const getImage = (category, name, fallback = images.generic.africa) => {
  try {
    return images[category]?.[name] || fallback
  } catch (error) {
    return fallback
  }
}
