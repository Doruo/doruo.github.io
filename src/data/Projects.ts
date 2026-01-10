import type { RouteLocationAsRelativeGeneric } from 'vue-router'
import { Links } from './Links'
import { Pictures } from './Pictures'

export interface Project {
  id: string
  title: string
  showMoreInfoLink: boolean
  websiteLink: string
  moreInfoLink: RouteLocationAsRelativeGeneric
  background: string
  description?: string
  techs?: string
  tags: string[]
}

export interface ProjectCategory {
  id: string
  title: string
  projects: Project[]
}

export class Projects {
  private static readonly allProjects: Project[] = [
    {
      id: 'poursuite-etude',
      title: "Application de Poursuite d'Etudes",
      showMoreInfoLink: true,
      moreInfoLink: { name: 'projects-poursuite-etude' },
      websiteLink: Links.GITHUB_POURSUITE_ETUDES,
      background: '',
      description:
        "Logiciel d'aide à la décision de la poursuite d'étude des étudiants diplômés du BUT Informatique.",
      techs: 'PHP, JavaScript, PL/SQL, LDAP',
      tags: ['main'],
    },
    {
      id: 'my-avatar',
      title: 'My Avatar',
      showMoreInfoLink: false,
      moreInfoLink: { name: 'projects-my-avatar' },
      websiteLink: Links.MY_AVATAR,
      background: '',
      description:
        'Application de gestion d’avatar, inspiré de Gravatar, réalisé avec le framework Symfony.',
      techs: 'Symfony, JavaScript, MySQL, Twig',
      tags: ['academic'],
    },
    {
      id: 'controverse-crypto',
      title: 'Contrôverse des Cryptomonnaies',
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: Links.CONTROVERSE_CRYPTO,
      background: '',
      description:
        'Vitrine présentant mon travail de recherche et de rédaction ' +
        "sur la controverse: 'Les crypto-monnaies peuvent-elles être écologiques ?'",
      techs: 'HTML, CSS',
      tags: ['academic'],
    },
    {
      id: 'trains',
      title: 'Jeu de plateau Trains',
      showMoreInfoLink: true,
      moreInfoLink: { name: 'projects-trains' },
      websiteLink: Links.GITHUB_TRAINS,
      background: Pictures.TRAINS_CARD,
      description:
        'Portage numérique du jeu de plateau japonais <a href=https://boardgamegeek.com/boardgame/121408/trains>' +
        "Trains d'Hisashi Hayashi</a>, jouable jusqu'à 4 joueurs.",
      techs: 'Java, JavaFX',
      tags: ['academic'],
    },
    {
      id: 'cgj-2023',
      title: 'Code Game Jam 2023: Time Mage Tournament',
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: Links.ITCHIO_TIME_MAGE_TOURNAMENT,
      background: '',
      description:
        'Jeu de tir 2D isométrique réalisé en 24h. ' +
        "Gagnant du Prix Design de la <a href=https://codegamejam.extragames.fr/>Code Game Jam de l'IUT Montpellier-Sête</a>.",
      techs: 'LUA, PICO-8',
      tags: ['competition'],
    },
    {
      id: 'ndi-2024',
      title: "Nuit de l'Info 2024",
      showMoreInfoLink: true,
      moreInfoLink: { name: 'projects-ndi2024' },
      websiteLink: Links.GITHUB_NDI2024,
      background: Pictures.NDI2024_OCEAN,
      description:
        "Océan interactif fait à la main décrivant l'écosystème marin. " +
        'Réalisé en 16h lors de la <a href="https://www.nuitdelinfo.com/materiel_communication/2024/La%20Nuit%20de%20l%E2%80%99Info%202024.pdf">Nuit de l\'Info 2024</a>.',
      techs: 'ExpressJS, HTML, CSS, JavaScript',
      tags: ['main', 'competition'],
    },
    {
      id: 'ndi-2025',
      title: "Nuit de l'Info 2025",
      showMoreInfoLink: true,
      moreInfoLink: { name: 'projects-ndi2025' },
      websiteLink: Links.NDI2025,
      background: Pictures.NDI2024_WORK_1,
      description: `Site interactif réalisé en 16h lors de la <a href="https://www.nuitdelinfo.com/materiel_communication/2025/LaNuitDeLInfo2025-Sujet.pdf">Nuit de l\'Info 2025</a>.`,
      techs: 'TypeScript',
      tags: ['competition'],
    },
    {
      id: 'fan-site-chuck-norris',
      title: 'Fan Club Chuck Norris',
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: Links.FAN_CLUB_CHUCK_NORRIS,
      background: Pictures.CHUCK_NORRIS_CARD,
      description: 'Site web non officiel du fan-club de Chuck Norris. Mon tout premier site web.',
      techs: 'HTML, CSS',
      tags: ['academic'],
    },
    {
      id: 'metro-post-apo',
      title: 'Escape game - Métro post-apocalyptique',
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: Links.ESCAPE_GAME_POST_APO,
      background: '',
      description: "Vitrine d'un escape game dans un métro post-apocalyptique.",
      techs: 'HTML, CSS',
      tags: ['academic'],
    },
    {
      id: 'escape-game-mind-spies',
      title: 'Escape game - The Mind Spies',
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: Links.ESCAPE_GAME_MIND_SPIES,
      background: Pictures.MIND_SPIES_CARD,
      description: 'Vitrine d\'un escape game fictif de science fiction \"The Mind Spies\".',
      techs: 'HTML, CSS',
      tags: ['academic'],
    },
    {
      id: 'game-of-life',
      title: "Conway's Game of Life",
      showMoreInfoLink: true,
      moreInfoLink: { name: 'projects-gol' },
      websiteLink: Links.GITHUB_GOL,
      background: Pictures.GOL_CARD,
      description:
        'Simulation mathématique de 1970, réalisé en langage Go, avec interface graphique terminal.',
      techs: 'Go, Ebitengine',
      tags: ['main', 'game'],
    },
    {
      id: 'mastermind',
      title: 'Mastermind',
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: Links.GITHUB_MASTERMIND,
      background: '',
      description:
        'Implémentation du jeu mastermind en Java, jouable à deux ou seul contre un ordinateur.',
      techs: 'Java, algorithmie',
      tags: ['game'],
    },
    {
      id: 'sudoku',
      title: 'Sudoku',
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: Links.GITHUB_SUDOKU,
      background: '',
      description: 'Implémentation du sudoku en Java, jouable à deux ou seul contre un ordinateur.',
      techs: 'Java, algorithmie',
      tags: ['game'],
    },
    {
      id: 'marin-ivre',
      title: 'Le Marin Ivre',
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: Links.GITHUB_MARIN_IVRE,
      background: '',
      description:
        'Mon premier jeu en Java, avec interface graphique sur terminal. Réalisé au tout début de mes études universitaires.',
      techs: 'Java',
      tags: ['game'],
    },
    {
      id: 'e3cete',
      title: 'E3Cète',
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: Links.GITHUB_E3CETE,
      background: Pictures.E3CETE_CARD,
      description: 'Jeu de société en Java, inspiré du jeu Set! .',
      techs: 'Java',
      tags: ['game'],
    },
    {
      id: 'flipper',
      title: 'Flipper',
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: Links.GITHUB_FLIPPER_BALL,
      background: '',
      description: `Simulation mathématique de géométrie analytique d'une boule de flipper, réalisée en Python.`,
      techs: 'Python, numpy',
      tags: ['game'],
    },
    {
      id: 'elden-build',
      title: 'Elden Build',
      showMoreInfoLink: true,
      moreInfoLink: { name: 'projects-elden-build' },
      websiteLink: Links.GITHUB_ELDEN_BUILD,
      background: Pictures.ELDENBUILD_CARD,
      description:
        'Site web communautaire de gestion de build du jeu vidéo <a href=https://bandainamcoent.eu/elden-ring/elden-ring>Elden Ring</a>.',
      techs: 'PHP, JavaScript, HTML, CSS, JSON',
      tags: ['community'],
    },
    {
      id: 'falloutdle',
      title: 'Falloutdle',
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: Links.GITHUB_FALLOUTDLE,
      background: Pictures.FALLOUTDLE_CARD,
      description:
        "Jeu web inspiré de Wordle dans l'univers de Fallout. Devinez un nouveau personnage tous les jours.",
      techs: 'Go, Web Scraping, API, JSON',
      tags: ['community'],
    },
    {
      id: 'mesh',
      title: 'Mesh',
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: Links.GITHUB_MESH,
      background: Pictures.MESH_CARD,
      description: 'Lightweight messaging application written in Go language, with Peer to Peer networking.',
      techs: 'Go, P2P, TCP/IP',
      tags: ['community'],
    },
    {
      id: 'jellybot',
      title: 'Jellybot',
      showMoreInfoLink: false,
      moreInfoLink: { name: 'projects-jellybot' },
      websiteLink: Links.GITHUB_JELLYBOT,
      background: '',
      description:
        "Bot discord qui notifie le statut d'un serveur Jellyfin et de ses nouveaux contenus. " +
        '<a href=https://jellyfin.org/>Jellyfin</a> est un logiciel de serveur multimédia sous licence libre que vous pouvez héberger chez vous !',
      techs: 'Python, discord.py, Jellyfin API, Discord',
      tags: ['tool'],
    },
    {
      id: 'llm-from-scratch',
      title: `Modèle bigramme d'IA`,
      showMoreInfoLink: false,
      websiteLink: Links.GITHUB_LLM_FROM_SCRATCH,
      moreInfoLink: { name: '' },
      background: Pictures.LLM_CARD,
      description:
        'Modèle de langage bigramme, réalisé de A à Z en Python avec le framework PyTorch.',
      techs: 'IA, Python, PyTorch, Jupyter',
      tags: ['tool'],
    },
    {
      id: 'stage-itesoft',
      title: 'Stage - ITESOFT (CONFIDENTIEL)',
      showMoreInfoLink: false,
      background: '',
      websiteLink: 'https://www.itesoft.com/fr/besoins/dematerialisation-factures/',
      moreInfoLink: { name: '' },
      description:
        'Outil de réversibilité de processus métiers réalisé pour <a href="https://www.itesoft.com">ITESOFT</a>, ' +
        ' API REST réalisée en TypeScript avec <a href=https://nestjs.com/>NestJS</a>.',
      techs: 'NestJS, JSON, SQL',
      tags: ['tool'],
    },
  ]

  // Filters

  public static getProjectsByTag(tag: string): Project[] {
    return this.allProjects.filter((project) => project.tags.includes(tag))
  }

  // Main getters

  public static getMainProjectsCategory(): ProjectCategory {
    return {
      id: 'main',
      title: 'Principaux projets',
      projects: this.getProjectsByTag('main'),
    }
  }

  public static getAcademicProjectsCategory(): ProjectCategory {
    return {
      id: 'academic',
      title: 'Académiques',
      projects: this.getProjectsByTag('academic'),
    }
  }

  public static getGameProjectsCategory(): ProjectCategory {
    return {
      id: 'game',
      title: 'Jeux',
      projects: this.getProjectsByTag('game'),
    }
  }

  public static getCommunityProjectsCategory(): ProjectCategory {
    return {
      id: 'community',
      title: 'Communautaires',
      projects: this.getProjectsByTag('community'),
    }
  }

  public static getCompetitionProjectsCategory(): ProjectCategory {
    return {
      id: 'competition',
      title: 'Compétitions',
      projects: this.getProjectsByTag('competition'),
    }
  }

  public static getToolProjectsCategory(): ProjectCategory {
    return {
      id: 'tools',
      title: 'Outils',
      projects: this.getProjectsByTag('tool'),
    }
  }
}
