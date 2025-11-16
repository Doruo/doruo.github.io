export const NAVLINKS= [
  {
    label: 'Accueil',
    url: '#hero'
  },
  {
    label : 'À propos',
    url: '#about'
  },
  {
    label : 'Réalisations',
    url: '#work'
  },
  {
    label : 'Compétences',
    url: '/#service'
  },
  
]

export const PROFILE = {
  firstname : 'Marc',
  lastname: 'Haye',
  pseudonym: 'Doruo',
  get fullname() {
    return `${this.firstname} ${this.lastname}`
  },
  role : 'étudiant en informatique',
  avatar: '/images/profile/profile.webp'
}

export const HERO = {
  badge: 'En alternance',
  headline: `Salut, je suis ${PROFILE.firstname}. Je suis ${PROFILE.role}`,
  subline : "Un développeur passionné par la création d'applications simples à maintenir et utiliser."
}

export const SERVICE = {
  label: 'service',
  headline: "Je suis un couteau suisse, prêt à s'adapter à vos besoins.",
  subline: 'Je me spécialise dans la conception de solutions pour les entreprises et particuliers.',
  services: [
    {
      name: "Développement web",
      icon: 'Scroll',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores!',
      thumbnails: ''
    },
    {
      name: "Interface UI/UX",
      icon: 'MobileProgramming',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores!',
      thumbnails: ''
    },
    {
      name: "Infrastructures réseaux",
      icon: 'PenTool2',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores!',
      thumbnails: ''
    },
   
  ]
}

export const WORK = {
  label: 'projets',
  headline: 'Des solutions personnalisées adaptées à vos besoins.',
  subline: 'Je me spécialise dans la conception de solutions pour les entreprises et particuliers.',
  works: [
    {
      name: "Logiciel d'aide de poursuite d'étude",
      live_demo: 'https://github.com/doruo/PoursuiteEtudes',
      description: "Logiciel d'aide à la décision de la poursuite d'étude des étudiants diplômés du BUT Informatique.",
      thumbnails: 'poursuiteEtudes/poursuite_etude_accueil_responsable.webp',
      type: 'PHP'
    },    
    {
      name: "Elden Build",
      live_demo: '#',
      description: 'Site web de gestion de build à but communautaire du jeu vidéo Elden Ring.',
      thumbnails: 'eldenbuild/eldenbuild_accueil.webp',
      type: 'PHP'
    }, 
    {
      name: "Conway's Game of Life",
      live_demo: 'https://github.com/doruo/GameOfLife',
      description: "Implémentation en Go d'un jeu de simulation mathématique de 1970, avec interface graphique sur terminal.",
      thumbnails: 'gol/gol2.webp',
      type: 'Automate cellulaire'
    },
    {
      name: "Tamagotchi",
      live_demo: '#',
      description: 'This website is to improve your business as a software house and reach more customers.',
      thumbnails: 'tamagotchis/tamagotchi-logo.webp',
      type: 'Web Company'
    },
    {
      name: "Trains",
      live_demo: 'https://github.com/doruo/Trains',
      description: "Portage numérique du jeu de plateau japonais d'Hisashi Hayashi. jouable jusqu'à 4 personnes.",
      thumbnails: 'trains/trains_partie1.webp',
      type: 'Développement orientée objet, Java'
    },
    {
      name: "MyAvatar",
      live_demo: 'https://github.com/doruo/MyAvatar',
      description: 'Gestion d’avatar numérique, inspiré de Gravatar, réalisé avec le framework Symfony.',
      thumbnails: '',
      type: 'API Symfony'
    },
  ]
}

export const ABOUT = {
  label: 'Laissez moi me présenter !',
  introduce: [
    `Je m'appelle ${PROFILE.fullname}, je suis un ${PROFILE.role} passionné et avide d'innovation technologique. Je suis spécialisé dans la création d'interfaces utilisateur fluides et visuellement attrayantes, alliant conception et développement afin d'améliorer l'expérience utilisateur.`,
    "J'adore transformer des idées en applications web interactives et fonctionnelles. Je suis impatient de collaborer et de créer ensemble des produits numériques exceptionnels !"
  ]
}

export const CTA = {
  label: 'Construisons ensemble quelque chose de formidable',
  description: "Vous avez besoin d'une structure logiciel claire, fonctionnelle et ouvert à l'expension ? Je suis là pour vous aider à concrétiser votre vision : simple, dynamique et centrée sur vos objectifs."
}