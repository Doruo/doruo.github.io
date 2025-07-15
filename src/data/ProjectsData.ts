export interface Project {
  id: string;
  title: string;
  showMoreInfoLink:boolean;
  moreInfoLink: string;
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
      title: "Avis de poursuite d'étude",
      showMoreInfoLink: true,
      moreInfoLink: "/projets/poursuite-etude",
      websiteLink: "https://webinfo.iutmontp.univ-montp2.fr/~rostaingd/sae3a-base/web/controleurFrontal.php",
      description: "Logiciel d'aide à la décision de la poursuite d'étude des étudiants diplômés du BUT Informatique.",
      techs: "MVC, POO, PHP, JavaScript, PL/SQL, ChartJS, LDAP",
      tags: ['web', 'application', 'academic','main']
    },
    {
      id: 'jellybot',
      title: "Jellybot",
      showMoreInfoLink: false,
      moreInfoLink: "",
      websiteLink: "https://github.com/Doruo/JellyBot",
      description: 'Bot discord qui notifie le statut d\'un serveur multimédia Jellyfin et de ses nouveaux contenus. Jellyfin est un serveur multimedia open source que vous pouvez hébergez chez vous !',
      techs: "Python, discord.py",
      tags: ['community','main']
    },
    {
      id: 'trains',
      title: "Trains",
      showMoreInfoLink: true,
      moreInfoLink: "/projets/trains",
      websiteLink: "https://github.com/Doruo/Trains",
      description: 'Portage digital du jeu de plateau japonais "Trains" d\'Hisashi Hayashi, jouable à 4 joueurs.',
      techs: "POO, Java, JavaFX",
      tags: ['game', 'java','academic','main']
    },
    {
      id: 'elden-build',
      title: "Elden Build",
      showMoreInfoLink: true,
      moreInfoLink: "/projets/elden-build",
      websiteLink: "https://github.com/Doruo/EldenBuild",
      description: 'Site web de gestion de build communautaire du <a href=https://google.com>jeu Elden Ring</a>, ' +
        'avec requêtes asynchrones à <a href="https://eldenring.fanapis.com/">API Elden Ring</a>.',
      techs: "PHP, JavaScript, HTML, CSS, JSON",
      tags: ['web', 'api', 'community','main']
    },
    {
      id: 'escape-game-mind-spies',
      title: "Escape Game - The Mind Spies",
      showMoreInfoLink: false,
      moreInfoLink: "/projets/mind-spies",
      websiteLink: "",
      description: 'Site web vitrine pour un escape game de science fiction nommé The Mind Spies.',
      techs: "HTML, CSS",
      tags: ['web', 'academic']
    },    
    {
      id: 'stage-itesoft',
      title: 'Stage chez ITESOFT',
      showMoreInfoLink: false,
      moreInfoLink: "/projets/stage-itesoft",
      websiteLink: "",
      description: 'Outil de réversibilité de processus métiers réalisé pour <a href="https://www.itesoft.com/fr">ITESOFT</a>, qui effectue des exports de factures électroniques, au travers d\'une API REST réalisée en TypeScript avec NestJS.',
      techs: "PHP, JavaScript, HTML, CSS, JSON",
      tags: ['web', 'api', 'community']
    },
    {
      id: 'ndi-2024',
      title: "Nuit De l'Info 2024 - Race For Water",
      showMoreInfoLink: true,
      moreInfoLink: "/projets/nuitdelinfo",
      websiteLink: "https://github.com/Doruo/NDI-2024-RaceForWater",
      description: 'Océan interactif fait à la main décrivant l\'écosystème marin. Réalisé en 16h lors de la <a href="https://nuitdelinfo.com/">Nuit de l\'Info 2024</a>.',
      techs: "HTML, JavaScript, ExpressJS",
      tags: ['web', 'competition', 'interactive','main']
    },
    {
      id: 'cgj-2023',
      title: "CGJ 2023 - Time Mage Tournament",
      showMoreInfoLink: false,
      moreInfoLink: "",
      websiteLink: "https://doruo.itch.io/time-mage-tournament",
      description: 'Jeu de tir 2D isométrique réalisé en 24h. Gagnant du Prix Design de la Code Game Jam de l\'IUT Montpellier-Sête</a>.',
      techs: "LUA, PICO-8",
      tags: ['game', 'competition','main']
    },
    {
      id: 'mastermind',
      title: "Jeu du Mastermind",
      showMoreInfoLink: false,
      moreInfoLink: "",
      websiteLink: "https://github.com/Doruo/mastermind",
      description: '',
      techs: "Java",
      tags: ['game','academic']
    },
    {
      id: 'fan-site-chuck-norris',
      title: "Fan-Club Chuck Norris",
      showMoreInfoLink: false,
      moreInfoLink: "",
      websiteLink: "/IUT/A1/TD_Chuck_Norris/html/index.html",
      description: '',
      techs: "HTML, CSS",
      tags: ['web', 'java', 'academic']
    },
    {
      id: 'marin-ivre',
      title: "Marin Ivre",
      showMoreInfoLink: false,
      moreInfoLink: "",
      websiteLink: "https://github.com/Doruo/marinIvre",
      description: '',
      techs: "Java",
      tags: ['game','academic']
    },
  ];

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

  public static getAllProjectsCategory (): ProjectCategory {
    return {
      id: 'all',
      title: "Tous Mes Projets",
      projects: this.allProjects
    };
  }

  public static getMainProjectsCategory(): ProjectCategory {
    return {
      id: 'main',
      title: "Mes Projets Principaux",
      projects: this.getProjectsByTag('main')
    };
  }

  public static getAcademicProjectsCategory(): ProjectCategory {
    return {
      id: 'main',
      title: "Mes Projets Academiques",
      projects: this.getProjectsByTag('academic')
    };
  }

  public static getWebDevProjectsCategory(): ProjectCategory {
    return {
      id: 'web-dev',
      title: "Projets Web & Applications",
      projects: this.getProjectsByTag('web')
    };
  }

  public static getGameDevProjectsCategory(): ProjectCategory {
    return {
      id: 'game-dev',
      title: "Projets liés aux jeux Video",
      projects: this.getProjectsByTag('game')
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
