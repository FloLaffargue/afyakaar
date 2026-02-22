import hero from '../../public/images/hero.jpeg'
import home2 from '../../public/images/home2.jpg'
import school3 from '../../public/images/school_3.jpg'
import school4 from '../../public/images/school_4.jpg'
import femmes_auto from '../../public/images/femmes_auto.jpg'
import nathalie2 from '../../public/images/nathalie2.jpg'
import school from '../../src/assets/school.png'
import nathalie from '../../public/images/team/nathalie.png'
import sebastien from '../../public/images/team/sebastien.png'
import andy from '../../public/images/team/andy.png'
import about1 from '../../public/images/about1.jpg'
import about2 from '../../public/images/about2.jpg'
import about3 from '../../public/images/about3.jpg'
import arouna6 from '../../public/images/arouna_family/arouna6.png'
import arouna2 from '../../public/images/arouna_family/arouna2.jpg'
import arouna3 from '../../public/images/arouna_family/arouna3.jpg'
import arouna4 from '../../public/images/arouna_family/arouna4.jpg'
import arouna5 from '../../public/images/arouna_family/arouna5.jpg'
import petanque from '../../src/assets/petanque.jpg'
import sports from '../../src/assets/sports.png'
import dance from '../../src/assets/dance.png'
import petanque2026 from '../../src/assets/petanque_2026.jpg'
import health from '../../src/assets/health.png'
import entrepreneurship from '../assets/entrepreneurship.png'

export const images = {
  team: {
    nathalie,
    sebastien,
    andy
  },
  home: {
    hero,
    home2,
    school4,
    femmes_auto,
    nathalie2
  },
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
    about1,
    about2,
    about3,
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

  // Photos galerie portrait (Arouna)
  // Pour ajouter des photos : importer en haut du fichier puis ajouter au tableau
  // Ex: import portrait1 from '../../public/images/portrait/portrait1.jpg'
  portrait: [arouna6, arouna2, arouna3, arouna4, arouna5],

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
