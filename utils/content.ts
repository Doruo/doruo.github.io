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
  get fullname() {
    return `${this.firstname} ${this.lastname}`
  },
  role : 'étudiant en informatique',
  avatar: '/images/profile/profile.webp'
}

export const HERO = {
  badge: 'En alternance',
  headline: `Salut, je suis ${PROFILE.firstname}. Je suis ${PROFILE.role}`,
  subline : "Je suis un développeur passionné par la création d'applications simples à maintenir et à utiliser."
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
      description: "Utilisé par l'IUT MONTPELLIER-SÊTE.",
      thumbnails: 'cafestreet-landingpage.webp',
      type: 'landing page'
    },
    {
      name: "Elden Build",
      live_demo: '#',
      description: 'Make your home comfortable with best furniture.',
      thumbnails: 'furnilux-landingpage.webp',
      type: 'landing page'
    },
    {
      name: "Trains",
      live_demo: '#',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores.',
      thumbnails: 'letsfood-landingpage.webp',
      type: 'Web Design'
    },
    {
      name: "Tamagotchi",
      live_demo: '#',
      description: 'This website is to improve your business as a software house and reach more customers.',
      thumbnails: 'creativeagency-landingpage.webp',
      type: 'Web Company'
    },
    {
      name: "Conway's Game of Life",
      live_demo: 'https://github.com/doruo/GameOfLife',
      description: "Implémentation d'un jeu de simulation mathématique de 1970, avec interface graphique sur terminal.",
      thumbnails: 'loginregister-design.webp',
      type: 'UI Design'
    },
    {
      name: "E3Cète",
      live_demo: '#',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores.',
      thumbnails: 'iratoon-mobileapp.webp',
      type: 'Mobile App'
    },
  ]
}

export const ABOUT = {
  label: 'Laissez moi me présenter !',
  introduce: [
    `Je suis un ${PROFILE.role} passionné. Je suis spécialisé dans la création d'interfaces utilisateur fluides et visuellement attrayantes, alliant conception et développement afin d'améliorer l'expérience utilisateur.`,
    "J'adore transformer des idées en applications web interactives et fonctionnelles. Je suis impatient de collaborer et de créer ensemble des produits numériques exceptionnels !"
  ]
}

export const CTA = {
  label: 'Construisons ensemble quelque chose de formidable',
  description: "Vous avez besoin d'une structure logiciel claire, fonctionnelle et ouvert à l'expension ? Je suis là pour vous aider à concrétiser votre vision : simple, dynamique et centrée sur vos objectifs."
}