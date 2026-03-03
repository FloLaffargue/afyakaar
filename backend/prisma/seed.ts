import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const projects = [
  {
    slug: 'grand-concours-petanque',
    title: 'Grand Concours de Pétanque à La Somone',
    description: 'Avec notre parrain Fara Ndiaye, champion du Sénégal. Un événement sportif majeur qui rassemble les communautés locales autour de la pétanque.',
    longDescription: "Le Grand Concours de Pétanque de La Somone est l'événement phare d'Af Yakaar pour 2026. Parrainé par Fara Ndiaye, champion du Sénégal de pétanque, ce tournoi rassemble des dizaines d'équipes venues de tout le pays. Au-delà de la compétition sportive, c'est un véritable moment de partage entre les communautés locales et les bénévoles de l'association. Les fonds récoltés permettent de financer nos actions dans les domaines de l'éducation et de la santé. L'édition 2025 avait réuni 63 équipes et nous espérons dépasser ce record cette année.",
    image: '/images/petanque_2026.jpg',
    gallery: ['/images/petanque.jpg', '/images/petanque_2026.jpg', '/images/sports.png'],
    month: 'Janvier',
    year: 2026,
    category: 'sport',
    status: 'À venir',
    featured: true,
    donationUrl: 'https://example.com/cagnotte-petanque',
    donationGoal: 2000,
    videos: [],
  },
  {
    slug: 'amenagement-scolaire',
    title: 'Aménagement Scolaire',
    description: 'Mobilier de bureau, tables, cuisine et espaces de jeux pour les écoles partenaires.',
    longDescription: "Ce projet vise à améliorer les conditions d'apprentissage dans les écoles partenaires de Saly et des environs. Nous prévoyons l'achat et l'installation de mobilier de bureau, de tables adaptées aux enfants, l'aménagement d'une cuisine pour les repas scolaires et la création d'espaces de jeux sécurisés. L'objectif est d'offrir aux enfants un environnement propice à leur développement, tant scolaire que social. Chaque école bénéficiaire est identifiée en collaboration avec les directeurs et les communautés locales.",
    image: '/images/school.png',
    gallery: ['/images/school.png', '/images/school_3.jpg'],
    month: 'Février-Mars',
    year: 2026,
    category: 'education',
    status: 'En préparation',
    featured: false,
    donationUrl: 'https://example.com/cagnotte-amenagement',
    donationGoal: 3000,
    videos: [],
  },
  {
    slug: 'ecole-danse-africaine',
    title: 'École de Danse Africaine à Saly',
    description: "Pour promouvoir la culture locale et offrir un espace d'expression artistique aux jeunes.",
    longDescription: "L'école de danse africaine de Saly est un projet culturel au cœur de notre action. Elle offre aux enfants et adolescents un espace d'expression artistique où ils peuvent développer leurs talents à travers la danse et le chant traditionnels. Encadrés par des artistes locaux, les élèves se produisent lors de spectacles qui renforcent leur confiance en eux et valorisent le patrimoine culturel sénégalais. Ce projet contribue aussi à créer des perspectives professionnelles pour les jeunes passionnés d'art.",
    image: '/images/dance.png',
    gallery: ['/images/dance.png'],
    month: 'Avril-Mai',
    year: 2026,
    category: 'culture',
    status: 'En préparation',
    featured: false,
    donationUrl: null,
    donationGoal: null,
    videos: [],
  },
  {
    slug: 'aide-femmes-entrepreneurs',
    title: 'Aide aux Femmes Entrepreneurs',
    description: "Accompagnement pour gagner en visibilité et contribuer à leur développement par l'échange et l'entraide.",
    longDescription: "Ce programme accompagne les femmes entrepreneurs du Sénégal dans le développement de leurs activités. Nous les aidons à gagner en visibilité grâce à l'organisation de stands de vente, de défilés de mode mettant en valeur leurs créations, et de formations en gestion. L'entraide et l'échange sont au cœur de cette initiative : chaque femme accompagnée devient à son tour un relais pour d'autres. Notre objectif est de favoriser l'autonomie économique et de renforcer le tissu entrepreneurial local.",
    image: '/images/entrepreneurship.png',
    gallery: ['/images/entrepreneurship.png'],
    month: 'Mai-Juin',
    year: 2026,
    category: 'entrepreneuriat',
    status: 'En préparation',
    featured: false,
    donationUrl: null,
    donationGoal: null,
    videos: [],
  },
  {
    slug: 'don-medicaments',
    title: 'Don de Médicaments',
    description: 'Don de médicaments et de matériel pour les centres de soins locaux.',
    longDescription: "Le projet de don de médicaments consiste à collecter et acheminer des médicaments et du matériel médical vers les centres de soins locaux au Sénégal. En collaboration avec des pharmacies et des professionnels de santé en France, nous identifions les besoins prioritaires et organisons l'envoi de lots adaptés. Cette action permet d'améliorer l'accès aux soins pour les populations les plus vulnérables, en particulier les enfants et les personnes âgées.",
    image: '/images/health.png',
    gallery: [],
    month: 'Juin',
    year: 2026,
    category: 'sante',
    status: 'En préparation',
    featured: false,
    donationUrl: null,
    donationGoal: null,
    videos: [],
  },
  {
    slug: 'tournoi-petanque-2025',
    title: 'Tournoi de Pétanque 2025',
    description: '63 équipes participantes, un franc succès ! Dons de boules, accessoires et équipements complets.',
    longDescription: "Le tournoi de pétanque 2025 a été un véritable succès avec 63 équipes participantes venues de tout le Sénégal. L'événement a permis de distribuer des boules, des accessoires et des équipements complets aux clubs locaux. Au-delà du sport, cette édition a renforcé les liens entre les communautés et a généré des fonds essentiels pour nos projets éducatifs et sanitaires.",
    image: '/images/petanque.jpg',
    gallery: ['/images/petanque.jpg', '/images/sports.png'],
    month: 'Janvier',
    year: 2025,
    category: 'sport',
    status: 'Terminé',
    featured: false,
    donationUrl: null,
    donationGoal: null,
    videos: [],
  },
  {
    slug: 'fournitures-scolaires-saly-2025',
    title: 'Fournitures Scolaires à Saly',
    description: 'Distribution de fournitures scolaires, doudous et matelas pour les enfants dans les écoles de Saly.',
    longDescription: "En mars 2025, nous avons distribué des fournitures scolaires, des doudous et des matelas pour la sieste dans plusieurs écoles de Saly. Cette action a bénéficié à des centaines d'enfants qui manquaient de matériel pour suivre leur scolarité dans de bonnes conditions. Les enseignants et les familles ont chaleureusement accueilli cette initiative qui s'inscrit dans notre engagement durable pour l'éducation.",
    image: '/images/school.png',
    gallery: ['/images/school.png', '/images/school_3.jpg'],
    month: 'Mars',
    year: 2025,
    category: 'education',
    status: 'Terminé',
    featured: false,
    donationUrl: null,
    donationGoal: null,
    videos: [],
  },
  {
    slug: 'ecole-danse-2025',
    title: "Lancement de l'École de Danse",
    description: "Ouverture de l'école de danse africaine à Saly pour les enfants, leur offrant un espace d'expression artistique.",
    longDescription: "En mai 2025, nous avons inauguré l'école de danse africaine à Saly. Ce lieu offre aux enfants un cadre bienveillant pour apprendre la danse et le chant traditionnels, encadrés par des artistes locaux passionnés. Les premiers spectacles ont démontré le talent et l'enthousiasme des élèves, confirmant l'importance de ce projet pour le développement personnel et culturel des jeunes.",
    image: '/images/dance.png',
    gallery: ['/images/dance.png'],
    month: 'Mai',
    year: 2025,
    category: 'culture',
    status: 'Terminé',
    featured: false,
    donationUrl: null,
    donationGoal: null,
    videos: [],
  },
]

const news = [
  {
    id: 1,
    title: 'Grand Concours de Pétanque 2026',
    date: '2025-11-01',
    category: 'Événement',
    excerpt: "Nous sommes ravis d'annoncer notre grand concours de pétanque à La Somone les 17-18 janvier 2026.",
    content: [
      "Nous sommes ravis d'annoncer notre grand concours de pétanque à La Somone les 17-18 janvier 2026, avec notre parrain Fara Ndiaye, champion du Sénégal. Cet événement promet d'être un moment fort de partage et de solidarité.",
      "Après le succès retentissant de l'édition 2025 qui avait rassemblé 63 équipes, nous visons cette année un nouveau record de participation. Le tournoi se déroulera sur deux jours avec des phases de poules le samedi et les finales le dimanche. Des lots seront remis aux équipes gagnantes, et chaque participant repartira avec un souvenir de l'événement.",
      "Au-delà de la compétition sportive, ce concours est un véritable catalyseur de liens sociaux. Les familles, les amis et les curieux se retrouvent autour des terrains dans une ambiance festive. Des stands de restauration proposeront des spécialités locales, et une animation musicale accompagnera les matchs tout au long du week-end.",
      "Les fonds récoltés lors de cet événement seront intégralement reversés à nos projets éducatifs et sanitaires au Sénégal. Chaque inscription, chaque don contribue directement à l'amélioration des conditions de vie des communautés que nous soutenons.",
    ],
    image: null,
  },
  {
    id: 2,
    title: 'Succès du Tournoi de Pétanque 2025',
    date: '2025-10-15',
    category: 'Réalisation',
    excerpt: '63 équipes ont participé à notre tournoi de pétanque, un franc succès !',
    content: [
      "Notre tournoi de pétanque 2025 a été un véritable succès avec 63 équipes participantes. Nous avons pu faire des dons de boules, accessoires et équipements complets. Un grand merci à tous les participants et bénévoles.",
      "L'événement s'est déroulé dans une ambiance chaleureuse et conviviale, réunissant des joueurs de tous niveaux. Les terrains de La Somone ont vibré au rythme des lancers et des encouragements pendant deux jours intenses de compétition.",
      "Grâce à la générosité des sponsors et des participants, nous avons pu redistribuer du matériel de pétanque aux clubs locaux qui en avaient le plus besoin. Des équipements complets — boules, cochonnets, sacs de transport — ont été remis aux associations sportives de la région.",
      "Ce succès nous motive à voir encore plus grand pour l'édition 2026. Nous travaillons déjà sur l'organisation du prochain tournoi avec l'ambition de dépasser les 80 équipes et d'élargir l'impact de cet événement solidaire.",
    ],
    image: null,
  },
  {
    id: 3,
    title: 'Aide aux Écoles de Saly',
    date: '2025-09-20',
    category: 'Éducation',
    excerpt: 'Distribution de fournitures scolaires et matériel pour les enfants de Saly.',
    content: [
      "Nous avons distribué des fournitures scolaires, doudous et matelas pour la sieste des enfants dans les écoles de Saly. Cette action s'inscrit dans notre engagement pour l'éducation et le bien-être des enfants.",
      "La rentrée scolaire est un moment clé pour les familles sénégalaises, et le coût des fournitures représente souvent un obstacle majeur. En fournissant cahiers, stylos, cartables et matériel pédagogique, nous permettons à des centaines d'enfants de démarrer l'année dans les meilleures conditions.",
      "Pour les plus petits, nous avons également apporté des doudous et des matelas de sieste. Ces éléments, qui peuvent sembler anodins, sont essentiels au confort et à l'épanouissement des tout-petits qui passent de longues journées à l'école. Les enseignants nous ont témoigné leur gratitude en constatant l'impact positif sur le bien-être des enfants.",
      "Cette opération a été rendue possible grâce aux dons collectés en France et à la mobilisation de nos bénévoles sur place. Nous prévoyons de renouveler et d'élargir cette action pour la prochaine rentrée, en ciblant de nouvelles écoles dans les villages environnants.",
    ],
    image: null,
  },
  {
    id: 4,
    title: "Lancement de l'École de Danse",
    date: '2025-08-10',
    category: 'Culture',
    excerpt: "Ouverture de notre école de danse africaine à Saly pour les enfants.",
    content: [
      "Notre école de danse africaine a ouvert ses portes à Saly. Les enfants peuvent désormais développer leurs talents artistiques à travers des cours de danse et de chant, renforçant leur confiance et créant des perspectives d'avenir.",
      "L'école accueille des enfants de 6 à 16 ans, trois fois par semaine, dans un espace aménagé spécialement pour la pratique artistique. Les cours sont dispensés par des danseurs et musiciens professionnels de la région, qui transmettent avec passion les danses traditionnelles sénégalaises.",
      "Au-delà de l'apprentissage technique, cette école est un lieu de socialisation et d'épanouissement personnel. Les enfants y apprennent la discipline, le travail en groupe et le dépassement de soi. Plusieurs d'entre eux se sont déjà produits lors d'événements locaux, suscitant la fierté de leurs familles et de toute la communauté.",
      "Nous souhaitons pérenniser ce projet en formant de jeunes instructeurs locaux qui pourront à terme prendre le relais. L'objectif est de créer un cercle vertueux où la culture devient un vecteur d'insertion et de développement pour les générations futures.",
    ],
    image: null,
  },
]

async function main() {
  console.log('Seeding database...')

  // Clear existing data
  await prisma.mail.deleteMany()
  await prisma.news.deleteMany()
  await prisma.project.deleteMany()

  // Seed projects
  for (const project of projects) {
    await prisma.project.create({ data: project })
  }
  console.log(`Seeded ${projects.length} projects`)

  // Seed news
  for (const item of news) {
    const { id, ...data } = item
    await prisma.news.create({ data })
  }
  console.log(`Seeded ${news.length} news articles`)

  console.log('Seeding complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
