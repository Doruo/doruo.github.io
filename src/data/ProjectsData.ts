import type { RouteLocationAsRelativeGeneric } from "vue-router";
import { Links } from "./Links";

export interface Project {
  id: string;
  title: string;
  showMoreInfoLink:boolean;
  moreInfoLink: RouteLocationAsRelativeGeneric;
  websiteLink: string;
  description: string;
  techs: string;
  tags: string[];
}

export interface ProjectCategory {
  id: string;
  title: string;
  projects: Project[];
}

export class ProjectsData {

  private static readonly allProjects: Project[] = [
    {
      id: 'poursuite-etude',
      title: "Application de Poursuite d'Etude",
      showMoreInfoLink: true,
      moreInfoLink: { name: 'projects-poursuite-etude' },
      websiteLink: "https://webinfo.iutmontp.univ-montp2.fr/~rostaingd/sae3a-base/web/controleurFrontal.php",
      description: "Logiciel d'aide à la décision de la poursuite d'étude des étudiants diplômés du BUT Informatique.",
      techs: "MVC, POO, PHP, JavaScript, PL/SQL, ChartJS, LDAP",
      tags: ['main','academic']
    },
    {
      id: 'jellybot',
      title: "Jellybot",
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: Links.GITHUB+"/JellyBot",
      description: 'Bot discord qui notifie le statut d\'un serveur Jellyfin et de ses nouveaux contenus. '+
      '<a href=https://jellyfin.org/>Jellyfin</a> est un logiciel de serveur multimédia sous licence libre que vous pouvez héberger chez vous !',
      techs: "Python, discord.py, Jellyfin API, Discord",
      tags: ['community']
    },
    {
      id: 'trains',
      title: "Jeu de plateau Trains",
      showMoreInfoLink: true,
      moreInfoLink: { name: 'projects-trains' },
      websiteLink: Links.GITHUB+"/Trains",
      description: 'Portage numérique du jeu de plateau japonais <a href=https://boardgamegeek.com/boardgame/121408/trains>'+
      'Trains d\'Hisashi Hayashi</a>, jouable jusqu\'à 4 joueurs.',
      techs: "POO, Java, JavaFX",
      tags: ['main','game','academic']
    },
    {
      id: 'stage-itesoft',
      title: 'Stage chez ITESOFT (CONFIDENTIEL)',
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: "https://www.itesoft.com/fr/besoins/dematerialisation-factures/",
      description: 'Outil de réversibilité de processus métiers réalisé pour <a href="https://www.itesoft.com">ITESOFT</a>, '+
      'qui effectue des exports de factures électroniques, au travers d\'une API REST réalisée en TypeScript avec <a href=https://nestjs.com/>NestJS</a>.',
      techs: "NestJS, JSON, SQL",
      tags: ['academic']
    },
    {
      id: 'controverse-crypto',
      title: "Contrôverse des Cryptomonnaies",
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: "/IUT/A1/SAE-106/accueil.html",
      description: 'Site web présentant le travail de recherche et de rédaction réalisée '+
      'sur la controverse suivante: Les crypto-monnaies peuvent-elles être écologiques ?',
      techs: "HTML, CSS",
      tags: ['academic']
    },
    {
      id: 'elden-build',
      title: "Elden Build",
      showMoreInfoLink: true,
      moreInfoLink: { name: 'projects-elden-build' },
      websiteLink: Links.GITHUB+"/EldenBuild",
      description: 'Site web de gestion de build à but communautaire du jeu vidéo <a href=https://bandainamcoent.eu/elden-ring/elden-ring>Elden Ring</a>, '+
        'avec requêtes asynchrones à l\'<a href="https://eldenring.fanapis.com/">API Elden Ring</a>.',
      techs: "PHP, JavaScript, HTML, CSS, JSON",
      tags: ['community']
    },
    {
      id: 'ndi-2024',
      title: "Nuit de l'Info 2024 - Race For Water",
      showMoreInfoLink: true,
      moreInfoLink: { name: 'projects-ndi2024' },
      websiteLink: Links.GITHUB+"/NDI-2024-RaceForWater",
      description: 'Océan interactif fait à la main décrivant l\'écosystème marin. '+
      'Réalisé en 16h lors de la <a href="https://nuitdelinfo.com/">Nuit de l\'Info 2024</a>.',
      techs: "HTML,CSS, JavaScript, ExpressJS",
      tags: ['competition']
    },
    {
      id: 'cgj-2023',
      title: "CGJ 2023 - Time Mage Tournament",
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: "https://doruo.itch.io/time-mage-tournament",
      description: 'Jeu de tir 2D isométrique réalisé en 24h. '+
      'Gagnant du Prix Design de la <a href=https://codegamejam.extragames.fr/>Code Game Jam de l\'IUT Montpellier-Sête</a>.',
      techs: "LUA, PICO-8",
      tags: ['competition']
    },
    {
      id: 'escape-game-mind-spies',
      title: "Escape game - The Mind Spies",
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: "/IUT/A1/SAE-EscapeGame-MindSpies/page.html",
      description: 'Escape game de science fiction nommé The Mind Spies.',
      techs: "HTML, CSS",
      tags: ['academic']
    },
    {
      id: 'metro-post-apo',
      title: "Escape game - Métro post-apocalyptique",
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: "/IUT/A1/SAE-EscapeGame-PostApo/index.html",
      description: 'Escape game dans un métro post-apocalyptique.',
      techs: "HTML, CSS",
      tags: ['academic']
    },
    {
      id: 'fan-site-chuck-norris',
      title: "Fan-club Chuck Norris",
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: "/IUT/A1/TD_Chuck_Norris/html/index.html",
      description: '',
      techs: "HTML, CSS",
      tags: ['academic']
    },
    {
      id: 'mastermind',
      title: "Jeu du Mastermind",
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: Links.GITHUB+"/mastermind",
      description: '',
      techs: "Java",
      tags: ['academic']
    },
    {
      id: 'marin-ivre',
      title: "Marin ivre",
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: Links.GITHUB+"/marinIvre",
      description: '',
      techs: "Java",
      tags: ['academic']
    },
    {
      id: 'game-of-life',
      title: "Conway's Game of Life",
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: Links.GITHUB+"/GameOfLife",
      description: 'Implémentation d\'un jeu de simulation mathématique datant de 1970, avec interface terminal.'+
      ' C\'est un automate cellulaire utilisé dans la recherche biologique.',
      techs: "Go, Ebitengine",
      tags: ['main','game']
    },
    {
      id: 'falloutdle',
      title: "Falloutdle",
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: Links.GITHUB+"/falloutdle",
      description: 'Jeu web inspiré de Wordle dans l\'univers de Fallout. Devinez un nouveau perso tous les jours.',
      techs: "Go, Web Scraping, API, JSON",
      tags: ['game']
    },
    {
      id: 'mesh',
      title: "Mesh",
      showMoreInfoLink: false,
      moreInfoLink: { name: '' },
      websiteLink: Links.GITHUB+"/Mesh",
      description: 'Lightweight messaging app written in Go, with Peer to Peer networking',
      techs: "Go, Peer2Peer, TCP/IP, DNS",
      tags: ['community']
    },
  ];

  // Filters

  public static getProjectById(id: string): Project | undefined {
    return this.allProjects.find(project => project.id === id);
  }

  public static getProjectsByIds(ids: string[]): Project[] {
    return this.allProjects.filter(project => ids.includes(project.id));
  }

  public static getProjectsByTag(tag: string): Project[] {
    return this.allProjects.filter(project => project.tags.includes(tag));
  }

  public static getProjectsByTags(tags: string[]): Project[] {
    return this.allProjects.filter(project =>
      tags.some(tag => project.tags.includes(tag))
    );
  }

  // Main getters

  public static getMainProjectsCategory(): ProjectCategory {
    return {
      id: 'main',
      title: "Principaux projets",
      projects: this.getProjectsByTag('main')
    };
  }

  public static getAcademicProjectsCategory(): ProjectCategory {
    return {
      id: 'main',
      title: "Académiques",
      projects: this.getProjectsByTag('academic')
    };
  }

  public static getWebDevProjectsCategory(): ProjectCategory {
    return {
      id: 'web-dev',
      title: "Web & Applications",
      projects: this.getProjectsByTag('web')
    };
  }

  public static getGameDevProjectsCategory(): ProjectCategory {
    return {
      id: 'game-dev',
      title: "Jeux",
      projects: this.getProjectsByTag('game')
    };
  }

  public static getCommunityProjectsCategory(): ProjectCategory {
    return {
      id: 'community',
      title: "Communautaires",
      projects: this.getProjectsByTag('community')
    };
  }

  public static getCompetitionProjectsCategory(): ProjectCategory {
    return {
      id: 'competitions',
      title: "Compétitions",
      projects: this.getProjectsByTag('competition')
    };
  }
}
