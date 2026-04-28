import type { RouteLocationAsRelativeGeneric } from 'vue-router'
import { ForgeLinks, IUTLinks, ProjectLinks } from './Links'
import {
  AventuriersDuRailPictures,
  CGJ2023Pictures,
  ChuckNorrisPictures,
  CryptoWebsitePictures,
  E3CetePictures,
  EldenBuildPictures,
  FalloutdlePictures,
  GameOfLifePictures,
  JellyBotPictures,
  LlmPictures,
  MeshPictures,
  MindSpiesPictures,
  MyAvatarPictures,
  NDI2024Pictures,
  NDI2025Pictures,
  PostApoPictures,
  PoursuiteEtudesPictures,
  SudokuPictures,
  TrainsPictures
} from './Pictures'

interface Project {
  id: string
  title: string
  show: boolean
  showMoreInfo: boolean
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

export default class Projects {
  private static readonly allProjects: Project[] = [
    // /-----/ tool /-----/
    {
      id: 'llm-from-scratch',
      title: `IA bigramme`,
      show: true,
      showMoreInfo: true,
      websiteLink: ForgeLinks.LLM_FROM_SCRATCH,
      moreInfoLink: { name: 'projects-llm-bigram' },
      background: LlmPictures.CARD,
      description: 'Modèle de langage bigramme, IA réalisé de A à Z en Python avec le framework PyTorch.',
      techs: 'IA, Python, PyTorch, Jupyter',
      tags: ['tool'],
    },
    {
      id: 'anime-sama-downloader',
      title: 'Anime-Sama Downloader',
      show: true,
      showMoreInfo: false,
      background: '',
      websiteLink: ForgeLinks.ANIME_SAMA_DOWNLOADER,
      moreInfoLink: { name: '' },
      description: `Outil de téléchargement automatique d'` +
        `épisodes d'un anime, à l'aide de robots web anonymes.`,
      techs: 'Typescript, Puppeteer',
      tags: ['tool'],
    },
    {
      id: 'stage-itesoft',
      title: 'Stage ITESOFT (confidentiel)',
      show: false,
      showMoreInfo: false,
      background: '',
      websiteLink: 'https://www.itesoft.com/fr/besoins/dematerialisation-factures/',
      moreInfoLink: { name: '' },
      description:
        'Outil de réversibilité de processus métiers réalisé pour <a href="https://www.itesoft.com">ITESOFT</a>, ' +
        ' API REST réalisée en TypeScript avec <a href=https://nestjs.com/>NestJS</a>.',
      techs: 'NestJS, JSON, SQL',
      tags: ['tool'],
    },
    {
      id: 'jellybot',
      title: 'Jellybot',
      show: true,
      showMoreInfo: true,
      moreInfoLink: { name: 'projects-jellybot' },
      websiteLink: ForgeLinks.JELLYBOT,
      background: JellyBotPictures.CARD,
      description: "Bot discord qui notifie le statut d'un serveur Jellyfin et de ses nouveaux contenus.",
      techs: 'Python, discord.py, Jellyfin API, Discord',
      tags: ['tool'],
    },
    // /-----/ competition /-----/
    {
      id: 'cgj-2023',
      title: 'Code Game Jam 2023',
      show: true,
      showMoreInfo: false,
      moreInfoLink: { name: '' },
      websiteLink: ProjectLinks.ITCHIO_TIME_MAGE_TOURNAMENT,
      background: CGJ2023Pictures.CARD,
      description:
        'Jeu de tir 2D isométrique réalisé en 24h. ' +
        "Gagnant du Prix Design de la <a href=https://codegamejam.extragames.fr/>Code Game Jam de l'IUT Montpellier-Sête</a>.",
      techs: 'LUA, PICO-8',
      tags: ['competition'],
    },
    {
      id: 'ndi-2024',
      title: "Nuit de l'Info 2024",
      show: true,
      showMoreInfo: true,
      moreInfoLink: { name: 'projects-ndi2024' },
      websiteLink: ForgeLinks.NDI2024,
      background: NDI2024Pictures.WORK_1,
      description:
        "Océan interactif fait à la main décrivant l'écosystème marin. " +
        'Réalisé en 16h lors de la <a href="https://www.nuitdelinfo.com/materiel_communication/2024/La%20Nuit%20de%20l%E2%80%99Info%202024.pdf">Nuit de l\'Info 2024</a>',
      techs: 'ExpressJS, HTML, CSS, JavaScript',
      tags: ['competition'],
    },
    {
      id: 'ndi-2025',
      title: "Nuit de l'Info 2025",
      show: true,
      showMoreInfo: true,
      moreInfoLink: { name: 'projects-ndi2025' },
      websiteLink: ForgeLinks.NDI2025,
      background: NDI2025Pictures.GROUP,
      description: `Site interactif réalisé en 16h lors de la <a href="https://www.nuitdelinfo.com/materiel_communication/2025/LaNuitDeLInfo2025-Sujet.pdf">Nuit de l\'Info 2025</a>.`,
      techs: 'TypeScript',
      tags: ['main', 'competition'],
    },
    // /-----/ community /-----/
    {
      id: 'elden-build',
      title: 'Elden Build',
      show: true,
      showMoreInfo: true,
      moreInfoLink: { name: 'projects-elden-build' },
      websiteLink: ForgeLinks.ELDEN_BUILD,
      background: EldenBuildPictures.CARD,
      description:
        'Site web communautaire de gestion de build du jeu vidéo <a href=https://bandainamcoent.eu/elden-ring/elden-ring>Elden Ring</a>.',
      techs: 'PHP, JavaScript, HTML, CSS, JSON',
      tags: ['main', 'community'],
    },
    {
      id: 'falloutdle',
      title: 'Falloutdle',
      show: true,
      showMoreInfo: false,
      moreInfoLink: { name: '' },
      websiteLink: ForgeLinks.FALLOUTDLE,
      background: FalloutdlePictures.CARD,
      description:
        "Jeu web inspiré de Wordle dans l'univers de Fallout. Devinez un nouveau personnage tous les jours !",
      techs: 'Go, Web Scraping, API, JSON',
      tags: ['community'],
    },
    {
      id: 'mesh',
      title: 'Mesh',
      show: true,
      showMoreInfo: false,
      moreInfoLink: { name: '' },
      websiteLink: ForgeLinks.MESH,
      background: MeshPictures.CARD,
      description: 'Lightweight messaging application written in Go language, with Peer to Peer networking.',
      techs: 'Go, P2P, TCP/IP',
      tags: ['community'],
    },
    // /-----/ academic /-----/
    {
      id: 'poursuite-etude',
      title: "Application de Poursuite d'Etudes",
      show: true,
      showMoreInfo: true,
      moreInfoLink: { name: 'projects-poursuite-etude' },
      websiteLink: ForgeLinks.POURSUITE_ETUDES,
      background: PoursuiteEtudesPictures.CARD,
      description:
        "Logiciel d'aide aux poursuites d'études des diplômés à l'IUT Montpellier.",
      techs: 'PHP, JavaScript, PL/SQL, LDAP',
      tags: ['main', 'academic'],
    },
    {
      id: 'my-avatar',
      title: 'My Avatar',
      show: true,
      showMoreInfo: true,
      moreInfoLink: { name: 'projects-my-avatar' },
      websiteLink: ProjectLinks.MY_AVATAR,
      background: MyAvatarPictures.CARD,
      description:
        'Application de gestion d’avatar, inspiré de Gravatar, réalisé avec le framework Symfony.',
      techs: 'Symfony, JavaScript, MySQL, Twig',
      tags: ['academic'],
    },
    {
      id: 'controverse-crypto',
      title: 'Contrôverse des Cryptomonnaies',
      show: true,
      showMoreInfo: false,
      moreInfoLink: { name: '' },
      websiteLink: IUTLinks.CONTROVERSE_CRYPTO,
      background: CryptoWebsitePictures.CARD,
      description:
        'Vitrine présentant mon travail de recherche et de rédaction ' +
        "sur la controverse: 'Les crypto-monnaies peuvent-elles être écologiques ?'",
      techs: 'HTML, CSS',
      tags: ['academic'],
    },
    {
      id: 'fan-site-chuck-norris',
      title: 'Fan Club Chuck Norris',
      show: true,
      showMoreInfo: false,
      moreInfoLink: { name: '' },
      websiteLink: IUTLinks.FAN_CLUB_CHUCK_NORRIS,
      background: ChuckNorrisPictures.CARD,
      description: 'Site web non officiel du fan-club de Chuck Norris. Mon tout premier site web.',
      techs: 'HTML, CSS',
      tags: ['academic'],
    },
    {
      id: 'metro-post-apo',
      title: 'Escape game - Métro post-apocalyptique',
      show: true,
      showMoreInfo: false,
      moreInfoLink: { name: '' },
      websiteLink: IUTLinks.ESCAPE_GAME_POST_APO,
      background: PostApoPictures.CARD,
      description: "Vitrine d'un escape game dans un métro post-apocalyptique.",
      techs: 'HTML, CSS',
      tags: ['academic'],
    },
    {
      id: 'escape-game-mind-spies',
      title: 'Escape game - The Mind Spies',
      show: true,
      showMoreInfo: false,
      moreInfoLink: { name: '' },
      websiteLink: IUTLinks.ESCAPE_GAME_MIND_SPIES,
      background: MindSpiesPictures.CARD,
      description: 'Vitrine d\'un escape game fictif de science fiction \"The Mind Spies\".',
      techs: 'HTML, CSS',
      tags: ['academic'],
    },
    // /-----/ game /-----/
    {
      id: 'game-of-life',
      title: "Conway's Game of Life",
      show: true,
      showMoreInfo: true,
      moreInfoLink: { name: 'projects-gol' },
      websiteLink: ForgeLinks.GOL,
      background: GameOfLifePictures.CARD,
      description:
        `Implémentation d'une simulation mathématique du Jeu de la Vie de 1970. Réalisé en langage Go, avec interface graphique terminal.`,
      techs: 'Go, Ebitengine',
      tags: ['game'],
    },
    {
      id: 'trains',
      title: 'Jeu de plateau Trains',
      show: true,
      showMoreInfo: true,
      moreInfoLink: { name: 'projects-trains' },
      websiteLink: ForgeLinks.TRAINS,
      background: TrainsPictures.CARD,
      description:
        'Réalisation numérique du jeu de plateau japonais ' +
        "d'Hisashi Hayashi en Java, jouable de 2 à 4 joueurs, ou seul contre un ordinateur.",
      techs: 'Java, JavaFX',
      tags: ['game'],
    },
    {
      id: 'aventuriers-du-rail',
      title: 'Les Aventuriers du Rail',
      show: true,
      showMoreInfo: false,
      moreInfoLink: { name: '' },
      websiteLink: ForgeLinks.AVENTURIERS_DU_RAIL,
      background: AventuriersDuRailPictures.CARD,
      description:
        "Réalisation numérique du jeu de plateau Les Aventuriers du Rail (Autour du Monde) " +
        "en Java, jouable de 2 à 4 joueurs, ou seul contre un ordinateur.",
      techs: 'Java, JavaFX',
      tags: ['game'],
    },
    {
      id: 'e3cete',
      title: 'E3Cète',
      show: true,
      showMoreInfo: false,
      moreInfoLink: { name: '' },
      websiteLink: ForgeLinks.E3CETE,
      background: E3CetePictures.CARD,
      description: `Réalisation numérique d'un jeu de société en Java, inspiré du jeu Set!. Jouable à deux, ou seul contre un ordinateur.`,
      techs: 'Java',
      tags: ['game'],
    },
    {
      id: 'sudoku',
      title: 'Sudoku',
      show: true,
      showMoreInfo: false,
      moreInfoLink: { name: '' },
      websiteLink: ForgeLinks.SUDOKU,
      background: SudokuPictures.CARD,
      description: 'Implémentation du sudoku en Java. Jouable à deux ou seul contre un ordinateur.',
      techs: 'Java, algorithmie',
      tags: ['game'],
    },
    {
      id: 'mastermind',
      title: 'Mastermind',
      show: true,
      showMoreInfo: false,
      moreInfoLink: { name: '' },
      websiteLink: ForgeLinks.MASTERMIND,
      background: '',
      description:
        'Implémentation du jeu mastermind en Java, jouable à deux, ou seul contre un ordinateur.',
      techs: 'Java, algorithmie',
      tags: ['game'],
    },
    {
      id: 'marin-ivre',
      title: 'Le Marin Ivre',
      show: false,
      showMoreInfo: false,
      moreInfoLink: { name: '' },
      websiteLink: ForgeLinks.MARIN_IVRE,
      background: '',
      description:
        'Mon premier jeu en Java, avec interface graphique sur terminal. Réalisé au tout début de mes études universitaires.',
      techs: 'Java',
      tags: ['game'],
    },
    {
      id: 'flipper',
      title: 'Flipper',
      show: false,
      showMoreInfo: false,
      moreInfoLink: { name: '' },
      websiteLink: ForgeLinks.FLIPPER_BALL,
      background: '',
      description: `Simulation mathématique de géométrie analytique d'une boule de flipper, réalisée en Python.`,
      techs: 'Python, numpy',
      tags: ['game'],
    },
  ]


  // Filters

  public static getProjectsByTag(tag: string): Project[] {
    return this.allProjects.filter((project) => project.tags.includes(tag));
  }

  // Main getters

  public static getAllProjects(): Project[] { return this.allProjects; }

  public static getMainProjectsCategory(): ProjectCategory {
    return {
      id: 'main',
      title: 'Projets mis en avant',
      projects: this.getProjectsByTag('main'),
    };
  }

  public static getAcademicProjectsCategory(): ProjectCategory {
    return {
      id: 'academic',
      title: 'Académiques',
      projects: this.getProjectsByTag('academic'),
    };
  }

  public static getGameProjectsCategory(): ProjectCategory {
    return {
      id: 'game',
      title: 'Jeux',
      projects: this.getProjectsByTag('game'),
    };
  }

  public static getCommunityProjectsCategory(): ProjectCategory {
    return {
      id: 'community',
      title: 'Communautaires',
      projects: this.getProjectsByTag('community'),
    };
  }

  public static getCompetitionProjectsCategory(): ProjectCategory {
    return {
      id: 'competition',
      title: 'Compétitions',
      projects: this.getProjectsByTag('competition'),
    };
  }

  public static getToolProjectsCategory(): ProjectCategory {
    return {
      id: 'tools',
      title: 'Outils',
      projects: this.getProjectsByTag('tool'),
    };
  }
}
