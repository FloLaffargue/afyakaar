// Fichier de données pour les actualités
// Pour ajouter une nouvelle actualité, ajoutez simplement un nouvel objet dans le tableau ci-dessous

export const newsData = [
  {
    id: 1,
    title: 'Grand Concours de Pétanque 2026',
    date: '2025-11-01',
    category: 'Événement',
    excerpt: 'Nous sommes ravis d\'annoncer notre grand concours de pétanque à La Somone les 17-18 janvier 2026.',
    content: [
      'Nous sommes ravis d\'annoncer notre grand concours de pétanque à La Somone les 17-18 janvier 2026, avec notre parrain Fara Ndiaye, champion du Sénégal. Cet événement promet d\'être un moment fort de partage et de solidarité.',
      'Après le succès retentissant de l\'édition 2025 qui avait rassemblé 63 équipes, nous visons cette année un nouveau record de participation. Le tournoi se déroulera sur deux jours avec des phases de poules le samedi et les finales le dimanche. Des lots seront remis aux équipes gagnantes, et chaque participant repartira avec un souvenir de l\'événement.',
      'Au-delà de la compétition sportive, ce concours est un véritable catalyseur de liens sociaux. Les familles, les amis et les curieux se retrouvent autour des terrains dans une ambiance festive. Des stands de restauration proposeront des spécialités locales, et une animation musicale accompagnera les matchs tout au long du week-end.',
      'Les fonds récoltés lors de cet événement seront intégralement reversés à nos projets éducatifs et sanitaires au Sénégal. Chaque inscription, chaque don contribue directement à l\'amélioration des conditions de vie des communautés que nous soutenons.',
    ],
    image: null
  },
  {
    id: 2,
    title: 'Succès du Tournoi de Pétanque 2025',
    date: '2025-10-15',
    category: 'Réalisation',
    excerpt: '63 équipes ont participé à notre tournoi de pétanque, un franc succès !',
    content: [
      'Notre tournoi de pétanque 2025 a été un véritable succès avec 63 équipes participantes. Nous avons pu faire des dons de boules, accessoires et équipements complets. Un grand merci à tous les participants et bénévoles.',
      'L\'événement s\'est déroulé dans une ambiance chaleureuse et conviviale, réunissant des joueurs de tous niveaux. Les terrains de La Somone ont vibré au rythme des lancers et des encouragements pendant deux jours intenses de compétition.',
      'Grâce à la générosité des sponsors et des participants, nous avons pu redistribuer du matériel de pétanque aux clubs locaux qui en avaient le plus besoin. Des équipements complets — boules, cochonnets, sacs de transport — ont été remis aux associations sportives de la région.',
      'Ce succès nous motive à voir encore plus grand pour l\'édition 2026. Nous travaillons déjà sur l\'organisation du prochain tournoi avec l\'ambition de dépasser les 80 équipes et d\'élargir l\'impact de cet événement solidaire.',
    ],
    image: null
  },
  {
    id: 3,
    title: 'Aide aux Écoles de Saly',
    date: '2025-09-20',
    category: 'Éducation',
    excerpt: 'Distribution de fournitures scolaires et matériel pour les enfants de Saly.',
    content: [
      'Nous avons distribué des fournitures scolaires, doudous et matelas pour la sieste des enfants dans les écoles de Saly. Cette action s\'inscrit dans notre engagement pour l\'éducation et le bien-être des enfants.',
      'La rentrée scolaire est un moment clé pour les familles sénégalaises, et le coût des fournitures représente souvent un obstacle majeur. En fournissant cahiers, stylos, cartables et matériel pédagogique, nous permettons à des centaines d\'enfants de démarrer l\'année dans les meilleures conditions.',
      'Pour les plus petits, nous avons également apporté des doudous et des matelas de sieste. Ces éléments, qui peuvent sembler anodins, sont essentiels au confort et à l\'épanouissement des tout-petits qui passent de longues journées à l\'école. Les enseignants nous ont témoigné leur gratitude en constatant l\'impact positif sur le bien-être des enfants.',
      'Cette opération a été rendue possible grâce aux dons collectés en France et à la mobilisation de nos bénévoles sur place. Nous prévoyons de renouveler et d\'élargir cette action pour la prochaine rentrée, en ciblant de nouvelles écoles dans les villages environnants.',
    ],
    image: null
  },
  {
    id: 4,
    title: 'Lancement de l\'École de Danse',
    date: '2025-08-10',
    category: 'Culture',
    excerpt: 'Ouverture de notre école de danse africaine à Saly pour les enfants.',
    content: [
      'Notre école de danse africaine a ouvert ses portes à Saly. Les enfants peuvent désormais développer leurs talents artistiques à travers des cours de danse et de chant, renforçant leur confiance et créant des perspectives d\'avenir.',
      'L\'école accueille des enfants de 6 à 16 ans, trois fois par semaine, dans un espace aménagé spécialement pour la pratique artistique. Les cours sont dispensés par des danseurs et musiciens professionnels de la région, qui transmettent avec passion les danses traditionnelles sénégalaises.',
      'Au-delà de l\'apprentissage technique, cette école est un lieu de socialisation et d\'épanouissement personnel. Les enfants y apprennent la discipline, le travail en groupe et le dépassement de soi. Plusieurs d\'entre eux se sont déjà produits lors d\'événements locaux, suscitant la fierté de leurs familles et de toute la communauté.',
      'Nous souhaitons pérenniser ce projet en formant de jeunes instructeurs locaux qui pourront à terme prendre le relais. L\'objectif est de créer un cercle vertueux où la culture devient un vecteur d\'insertion et de développement pour les générations futures.',
    ],
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
