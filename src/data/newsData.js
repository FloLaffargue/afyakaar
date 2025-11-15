// Fichier de données pour les actualités
// Pour ajouter une nouvelle actualité, ajoutez simplement un nouvel objet dans le tableau ci-dessous

export const newsData = [
  {
    id: 1,
    title: 'Grand Concours de Pétanque 2026',
    date: '2025-11-01',
    category: 'Événement',
    excerpt: 'Nous sommes ravis d\'annoncer notre grand concours de pétanque à La Somone les 17-18 janvier 2026.',
    content: 'Nous sommes ravis d\'annoncer notre grand concours de pétanque à La Somone les 17-18 janvier 2026, avec notre parrain Fara Ndiaye, champion du Sénégal. Cet événement promet d\'être un moment fort de partage et de solidarité.',
    image: null
  },
  {
    id: 2,
    title: 'Succès du Tournoi de Pétanque 2025',
    date: '2025-10-15',
    category: 'Réalisation',
    excerpt: '63 équipes ont participé à notre tournoi de pétanque, un franc succès !',
    content: 'Notre tournoi de pétanque 2025 a été un véritable succès avec 63 équipes participantes. Nous avons pu faire des dons de boules, accessoires et équipements complets. Un grand merci à tous les participants et bénévoles.',
    image: null
  },
  {
    id: 3,
    title: 'Aide aux Écoles de Saly',
    date: '2025-09-20',
    category: 'Éducation',
    excerpt: 'Distribution de fournitures scolaires et matériel pour les enfants de Saly.',
    content: 'Nous avons distribué des fournitures scolaires, doudous et matelas pour la sieste des enfants dans les écoles de Saly. Cette action s\'inscrit dans notre engagement pour l\'éducation et le bien-être des enfants.',
    image: null
  },
  {
    id: 4,
    title: 'Lancement de l\'École de Danse',
    date: '2025-08-10',
    category: 'Culture',
    excerpt: 'Ouverture de notre école de danse africaine à Saly pour les enfants.',
    content: 'Notre école de danse africaine a ouvert ses portes à Saly. Les enfants peuvent désormais développer leurs talents artistiques à travers des cours de danse et de chant, renforçant leur confiance et créant des perspectives d\'avenir.',
    image: null
  }
]

// Fonction pour obtenir toutes les actualités triées par date (plus récente en premier)
export const getAllNews = () => {
  return [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date))
}

// Fonction pour obtenir une actualité par son ID
export const getNewsById = (id) => {
  return newsData.find(news => news.id === id)
}

// Fonction pour obtenir les actualités par catégorie
export const getNewsByCategory = (category) => {
  return newsData.filter(news => news.category === category)
}

// Fonction pour obtenir les dernières actualités (nombre limité)
export const getLatestNews = (limit = 3) => {
  return getAllNews().slice(0, limit)
}
