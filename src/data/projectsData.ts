export interface Project {
  id: string;
  title: string;
  moreInfoLink: string;
  websiteLink: string;
  description: string;
  techs: string;
}

export interface ProjectCategory {
  title: string;
  projects: Project[];
}

export class ProjectsData {

  public static readonly mainProjects: ProjectCategory = {
    title: "Mes Projets",
    projects: [
      {
        id: 'poursuite-etude',
        title: "Application d'avis de poursuite d'étude",
        moreInfoLink: "https://webinfo.iutmontp.univ-montp2.fr/~rostaingd/sae3a-base/web/controleurFrontal.php",
        websiteLink: "./projets/poursuiteEtude.html",
        description: "Logiciel d'aide à la décision de la poursuite d'étude des étudiants diplômés du BUT Informatique.",
        techs: "MVC, POO, PHP, JavaScript, PL/SQL, ChartJS, LDAP"
      },
      {
        id: 'trains',
        title: "Jeu de plateau Trains",
        moreInfoLink: "./projets/trains.html",
        websiteLink: "https://github.com/Doruo/Trains",
        description: 'Portage digital du jeu de deck building japonais "Trains" d\'Hisashi Hayashi, jouable à 4 joueurs. Fonctionnement du jeu fait en java, et interface du plateau en JavaFX.',
        techs: "POO, Java, JavaFX"
      },
      {
        id: 'elden-build',
        title: "Elden Build",
        moreInfoLink: "./projets/eldenbuild.html",
        websiteLink: "https://github.com/Doruo/EldenBuild",
        description: 'Exercice ludique pour comprendre PHP, JS, et l\'architecture MVC. Site web de gestion de build à but communautaire du jeu <a href="https://fr.bandainamcoent.eu/elden-ring/elden-ring">Elden Ring</a>, avec requêtes asynchrones à l\'<a href="https://eldenring.fanapis.com/">API Elden Ring</a>.',
        techs: "PHP, JavaScript, HTML, CSS, JSON"
      },
      {
        id: 'ndi-2024',
        title: "Nuit de L'Info 2024 - Race For Water",
        moreInfoLink: "./projets/ndi2024.html",
        websiteLink: "https://github.com/Doruo/NDI-2024-RaceForWater",
        description: 'Océan interactif, avec dessins en pixel art décrivant l\'écosystème marin et leur équivalent du corps humain. Application ludique réalisée en 16h lors de l\'évenement nationale de la <a href="https://nuitdelinfo.com/">Nuit de l\'Info 2024</a>.',
        techs: "HTML, JavaScript, ExpressJS"
      },
      {
        id: 'cgj-2023',
        title: "CGJ 2023 - Time Mage Tournament",
        moreInfoLink: " ",
        websiteLink: "https://doruo.itch.io/time-mage-tournament",
        description: 'Jeu vidéo de tir en 2D isométrique réalisé en 24h à l\'occasion de la 7ème édition de la <a href="https://codegamejam.extragames.fr/">Code Game Jam de l\'IUT Montpellier-Sète</a>. Gagnant du Prix Design.',
        techs: "LUA, PICO-8"
      }
    ]
  };

  public static readonly webDev: ProjectCategory = {
    title: "Projets Web & Applications",
    projects: [
      {
        id: 'poursuite-etude-web',
        title: "Application d'avis de poursuite d'étude",
        moreInfoLink: "https://webinfo.iutmontp.univ-montp2.fr/~rostaingd/sae3a-base/web/controleurFrontal.php",
        websiteLink: "./projets/poursuiteEtude.html",
        description: "Logiciel d'aide à la décision de la poursuite d'étude des étudiants diplômés du BUT Informatique.",
        techs: "MVC, POO, PHP, JavaScript, PL/SQL, ChartJS, LDAP"
      },
      {
        id: 'elden-build-web',
        title: "Elden Build",
        moreInfoLink: "./projets/eldenbuild.html",
        websiteLink: "https://github.com/Doruo/EldenBuild",
        description: 'Exercice ludique pour comprendre PHP, JS, et l\'architecture MVC. Site web de gestion de build à but communautaire du jeu <a href="https://fr.bandainamcoent.eu/elden-ring/elden-ring">Elden Ring</a>, avec requêtes asynchrones à l\'<a href="https://eldenring.fanapis.com/">API Elden Ring</a>.',
        techs: "PHP, JavaScript, HTML, CSS, JSON"
      },
      {
        id: 'ndi-2024-web',
        title: "Nuit de L'Info 2024 - Race For Water",
        moreInfoLink: "./projets/ndi2024.html",
        websiteLink: "https://github.com/Doruo/NDI-2024-RaceForWater",
        description: 'Océan interactif, avec dessins en pixel art décrivant l\'écosystème marin et leur équivalent du corps humain. Application ludique réalisée en 16h lors de l\'évenement nationale de la <a href="https://nuitdelinfo.com/">Nuit de l\'Info 2024</a>.',
        techs: "HTML, JavaScript, ExpressJS"
      }
    ]
  };

  public static readonly gamesDev: ProjectCategory = {
    title: "Développement de Jeux",
    projects: [
      {
        id: 'trains-game',
        title: "Jeu de plateau Trains",
        moreInfoLink: "./projets/trains.html",
        websiteLink: "https://github.com/Doruo/Trains",
        description: 'Portage digital du jeu de deck building japonais "Trains" d\'Hisashi Hayashi, jouable à 4 joueurs. Fonctionnement du jeu fait en java, et interface du plateau en JavaFX.',
        techs: "POO, Java, JavaFX"
      },
      {
        id: 'cgj-2023-game',
        title: "CGJ 2023 - Time Mage Tournament",
        moreInfoLink: " ",
        websiteLink: "https://doruo.itch.io/time-mage-tournament",
        description: 'Jeu vidéo de tir en 2D isométrique réalisé en 24h à l\'occasion de la 7ème édition de la <a href="https://codegamejam.extragames.fr/">Code Game Jam de l\'IUT Montpellier-Sète</a>. Gagnant du Prix Design.',
        techs: "LUA, PICO-8"
      }
    ]
  };

  public static readonly competitions: ProjectCategory = {
    title: "Compétitions",
    projects: [
      {
        id: 'ndi-2024',
        title: "Nuit de L'Info 2024 - Race For Water",
        moreInfoLink: "./projets/ndi2024.html",
        websiteLink: "https://github.com/Doruo/NDI-2024-RaceForWater",
        description: 'Océan interactif, avec dessins en pixel art décrivant l\'écosystème marin et leur équivalent du corps humain. Application ludique réalisée en 16h lors de l\'évenement nationale de la <a href="https://nuitdelinfo.com/">Nuit de l\'Info 2024</a>.',
        techs: "HTML, JavaScript, ExpressJS"
      },
      {
        id: 'cgj-2023',
        title: "CGJ 2023 - Time Mage Tournament",
        moreInfoLink: " ",
        websiteLink: "https://doruo.itch.io/time-mage-tournament",
        description: 'Jeu vidéo de tir en 2D isométrique réalisé en 24h à l\'occasion de la 7ème édition de la <a href="https://codegamejam.extragames.fr/">Code Game Jam de l\'IUT Montpellier-Sète</a>. Gagnant du Prix Design.',
        techs: "LUA, PICO-8"
      }
    ]
  };
}
