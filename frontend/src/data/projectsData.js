import { images } from './imageData'

export const categories = [
  { id: 'sport', label: 'Sport', icon: 'Trophy', color: 'bg-blue-500', text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-500' },
  { id: 'education', label: 'Éducation', icon: 'GraduationCap', color: 'bg-emerald-500', text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-500' },
  { id: 'culture', label: 'Culture', icon: 'Music', color: 'bg-purple-500', text: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-500' },
  { id: 'entrepreneuriat', label: 'Entrepreneuriat', icon: 'Briefcase', color: 'bg-amber-500', text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-500' },
  { id: 'sante', label: 'Santé', icon: 'HeartPulse', color: 'bg-rose-500', text: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-500' },
]

export const allProjects = [
  // --- 2026 ---
  {
    slug: 'grand-concours-petanque',
    title: 'Grand Concours de Pétanque à La Somone',

    description: 'Avec notre parrain Fara Ndiaye, champion du Sénégal. Un événement sportif majeur qui rassemble les communautés locales autour de la pétanque.',
    longDescription: 'Le Grand Concours de Pétanque de La Somone est l\'événement phare d\'Af Yakaar pour 2026. Parrainé par Fara Ndiaye, champion du Sénégal de pétanque, ce tournoi rassemble des dizaines d\'équipes venues de tout le pays. Au-delà de la compétition sportive, c\'est un véritable moment de partage entre les communautés locales et les bénévoles de l\'association. Les fonds récoltés permettent de financer nos actions dans les domaines de l\'éducation et de la santé. L\'édition 2025 avait réuni 63 équipes et nous espérons dépasser ce record cette année.',
    image: images.projects.petanque2026,
    gallery: [images.achievements.petanque, images.achievements.petanque2026, images.achievements.sports],
    month: 'Janvier',
    year: 2026,
    category: 'sport',
    status: 'À venir',
    featured: true,
    videos: [],
    donationUrl: 'https://example.com/cagnotte-petanque',
    donationGoal: 2000,
  },
  {
    slug: 'amenagement-scolaire',
    title: 'Aménagement Scolaire',

    description: 'Mobilier de bureau, tables, cuisine et espaces de jeux pour les écoles partenaires.',
    longDescription: 'Ce projet vise à améliorer les conditions d\'apprentissage dans les écoles partenaires de Saly et des environs. Nous prévoyons l\'achat et l\'installation de mobilier de bureau, de tables adaptées aux enfants, l\'aménagement d\'une cuisine pour les repas scolaires et la création d\'espaces de jeux sécurisés. L\'objectif est d\'offrir aux enfants un environnement propice à leur développement, tant scolaire que social. Chaque école bénéficiaire est identifiée en collaboration avec les directeurs et les communautés locales.',
    image: images.projects.school,
    gallery: [images.achievements.school, images.achievements.school3],
    month: 'Février-Mars',
    year: 2026,
    category: 'education',
    status: 'En préparation',
    videos: [],
    donationUrl: 'https://example.com/cagnotte-amenagement',
    donationGoal: 3000,
  },
  {
    slug: 'ecole-danse-africaine',
    title: 'École de Danse Africaine à Saly',

    description: 'Pour promouvoir la culture locale et offrir un espace d\'expression artistique aux jeunes.',
    longDescription: 'L\'école de danse africaine de Saly est un projet culturel au cœur de notre action. Elle offre aux enfants et adolescents un espace d\'expression artistique où ils peuvent développer leurs talents à travers la danse et le chant traditionnels. Encadrés par des artistes locaux, les élèves se produisent lors de spectacles qui renforcent leur confiance en eux et valorisent le patrimoine culturel sénégalais. Ce projet contribue aussi à créer des perspectives professionnelles pour les jeunes passionnés d\'art.',
    image: images.projects.dance,
    gallery: [images.projects.dance],
    month: 'Avril-Mai',
    year: 2026,
    category: 'culture',
    status: 'En préparation',
    videos: [],
    donationUrl: null,
  },
  {
    slug: 'aide-femmes-entrepreneurs',
    title: 'Aide aux Femmes Entrepreneurs',

    description: 'Accompagnement pour gagner en visibilité et contribuer à leur développement par l\'échange et l\'entraide.',
    longDescription: 'Ce programme accompagne les femmes entrepreneurs du Sénégal dans le développement de leurs activités. Nous les aidons à gagner en visibilité grâce à l\'organisation de stands de vente, de défilés de mode mettant en valeur leurs créations, et de formations en gestion. L\'entraide et l\'échange sont au cœur de cette initiative : chaque femme accompagnée devient à son tour un relais pour d\'autres. Notre objectif est de favoriser l\'autonomie économique et de renforcer le tissu entrepreneurial local.',
    image: images.projects.entrepreneurship,
    gallery: [images.projects.entrepreneurship],
    month: 'Mai-Juin',
    year: 2026,
    category: 'entrepreneuriat',
    status: 'En préparation',
    videos: [],
    donationUrl: null,
  },
  {
    slug: 'don-medicaments',
    title: 'Don de Médicaments',

    description: 'Don de médicaments et de matériel pour les centres de soins locaux.',
    longDescription: 'Le projet de don de médicaments consiste à collecter et acheminer des médicaments et du matériel médical vers les centres de soins locaux au Sénégal. En collaboration avec des pharmacies et des professionnels de santé en France, nous identifions les besoins prioritaires et organisons l\'envoi de lots adaptés. Cette action permet d\'améliorer l\'accès aux soins pour les populations les plus vulnérables, en particulier les enfants et les personnes âgées.',
    image: images.projects.health,
    gallery: [],
    month: 'Juin',
    year: 2026,
    category: 'sante',
    status: 'En préparation',
    videos: [],
    donationUrl: null,
  },
  // --- 2025 ---
  {
    slug: 'tournoi-petanque-2025',
    title: 'Tournoi de Pétanque 2025',

    description: '63 équipes participantes, un franc succès ! Dons de boules, accessoires et équipements complets.',
    longDescription: 'Le tournoi de pétanque 2025 a été un véritable succès avec 63 équipes participantes venues de tout le Sénégal. L\'événement a permis de distribuer des boules, des accessoires et des équipements complets aux clubs locaux. Au-delà du sport, cette édition a renforcé les liens entre les communautés et a généré des fonds essentiels pour nos projets éducatifs et sanitaires.',
    image: images.projects.petanque,
    gallery: [images.achievements.petanque, images.achievements.sports],
    month: 'Janvier',
    year: 2025,
    category: 'sport',
    status: 'Terminé',
    videos: [],
    donationUrl: null,
  },
  {
    slug: 'fournitures-scolaires-saly-2025',
    title: 'Fournitures Scolaires à Saly',

    description: 'Distribution de fournitures scolaires, doudous et matelas pour les enfants dans les écoles de Saly.',
    longDescription: 'En mars 2025, nous avons distribué des fournitures scolaires, des doudous et des matelas pour la sieste dans plusieurs écoles de Saly. Cette action a bénéficié à des centaines d\'enfants qui manquaient de matériel pour suivre leur scolarité dans de bonnes conditions. Les enseignants et les familles ont chaleureusement accueilli cette initiative qui s\'inscrit dans notre engagement durable pour l\'éducation.',
    image: images.projects.school,
    gallery: [images.achievements.school, images.achievements.school3],
    month: 'Mars',
    year: 2025,
    category: 'education',
    status: 'Terminé',
    videos: [],
    donationUrl: null,
  },
  {
    slug: 'ecole-danse-2025',
    title: 'Lancement de l\'École de Danse',

    description: 'Ouverture de l\'école de danse africaine à Saly pour les enfants, leur offrant un espace d\'expression artistique.',
    longDescription: 'En mai 2025, nous avons inauguré l\'école de danse africaine à Saly. Ce lieu offre aux enfants un cadre bienveillant pour apprendre la danse et le chant traditionnels, encadrés par des artistes locaux passionnés. Les premiers spectacles ont démontré le talent et l\'enthousiasme des élèves, confirmant l\'importance de ce projet pour le développement personnel et culturel des jeunes.',
    image: images.projects.dance,
    gallery: [images.projects.dance],
    month: 'Mai',
    year: 2025,
    category: 'culture',
    status: 'Terminé',
    videos: [],
    donationUrl: null,
  },
]

// Rétrocompatibilité : projets2026 pointe vers les projets filtrés 2026
export const projects2026 = allProjects.filter((p) => p.year === 2026)

export const getProjectYears = () => {
  return [...new Set(allProjects.map((p) => p.year))].sort((a, b) => a - b)
}

export const getCategoryById = (id) => categories.find((c) => c.id === id)
