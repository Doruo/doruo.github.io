export class WebsiteLinks {
  static readonly GITHUB = 'https://github.com/'
  static readonly CODEBERG = 'https://codeberg.org/'
  static readonly LINKEDIN = 'https://www.linkedin.com/in/'
  static readonly DISCORD = 'https://discord.com/'

  static readonly IUT = 'https://iut-montpellier-sete.edu.umontpellier.fr/'
  static readonly ITESOFT = "https://www.itesoft.com/"

  static readonly ELDEN_RING = 'https://bandainamcoent.eu/elden-ring/elden-ring'
  static readonly ELDEN_RING_FAN_API = 'https://eldenring.fanapis.com'
  static readonly SCODOC = 'https://scodoc.org'
  static readonly GOL = 'https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'
  static readonly GRAVATAR = 'https://gravatar.com/'
  static readonly BITBUCKET = 'https://bitbucket.org/'

  static readonly TRAINS = 'https://boardgamegeek.com/boardgame/121408/trains'

  static readonly NDI = 'https://nuitdelinfo.com/'
  static readonly NDI_CHALLENGES = this.NDI + "inscription/defis/liste"
  static readonly NDI_2024_SUBJECT = this.NDI + "materiel_communication/2024/La%20Nuit%20de%20l’Info%202024.pdf"
  static readonly NDI_2025_SUBJECT = this.NDI + 'materiel_communication/2025/LaNuitDeLInfo2025-Sujet.pdf'

  static readonly CONWAY = 'https://fr.wikipedia.org/wiki/John_Horton_Conway'

  static readonly JELLYFIN = 'https://jellyfin.org/'
  static readonly JELLYFIN_SERVER = 'https://jellyfin.doruo.online'
  static readonly EMBY = 'https://emby.media/'
}

export class CollaboratorLinks {
  static readonly PAULO_MOREIRA = "https://moreirap-p.github.io/Portfolio"
  static readonly REMI_SOULIER = "https://remisoulier.fr"
  static readonly PACO_GILLET = WebsiteLinks.LINKEDIN + "paco-gillet"
  static readonly HICHAM_FERHANI = "https://hichamferhani.fr"
  static readonly EVAN_NUNES = "https://evannunes.fr"
  static readonly ESTEBAN_REMOND = "https://estebanremond.github.io/portfolio"
  static readonly DAMIEN_ROSTAING = "https://portfolio.rostaing.dev"
  static readonly MAEL_NICOLAS = WebsiteLinks.LINKEDIN +"maël-nicolas-95b2742ab"
  static readonly YANN_BODIGUEL = "https://greenjacketboy.github.io"
  static readonly MATTEO_BENHALIMA = "https://ng-48.github.io/portfolio/presentationDeSoi.html"
  static readonly RAPHAEL_RIVAS = WebsiteLinks.LINKEDIN +"raphaelrivas"
  static readonly KILLIAN_RAMUS = "https://killianrms.com"
  static readonly CYPRIEN_BONS = WebsiteLinks.LINKEDIN +"cyprien-bons"
  static readonly GALDRIC_DESERT = WebsiteLinks.LINKEDIN +"galdric-desert-caparros-5869ab2aa"
  static readonly NICOLAS_LYFONG = WebsiteLinks.LINKEDIN +"nicolas-lyfoung"
}

export class IUTLinks {
  static readonly IUT = 'https://iut-montpellier-sete.edu.umontpellier.fr/'

  // IUT 1st grade web dev
  static readonly LEBRETON = 'https://romainlebreton.github.io/'
  static readonly IUT_DEV_SAE_105 = this.LEBRETON + 'R1.02-DeveloppementInterfacesWeb/SAE_105.html'
  static readonly IUT_DEV_WEB_JS = this.LEBRETON + 'R.4.01-DeveloppementWeb-JavaScript/'

  // IUT 1st grade websites
  static readonly FAN_CLUB_CHUCK_NORRIS = '/fan-club-chuck-norris'
  static readonly ESCAPE_GAME_MIND_SPIES = '/escape-game-mindspies'
  static readonly ESCAPE_GAME_POST_APO = '/escape-game-postapo'
  static readonly CONTROVERSE_CRYPTO = '/controverse-crypto'

  // IUT 3rd grade advanced web dev
  static readonly GASQUET = 'https://mgasquet.github.io/'
  static readonly IUT_DEV_QUALITY = this.GASQUET + 'R304-QualiteDeveloppement/'
  static readonly IUT_ADV_DEV_QUALITY = this.GASQUET + 'R5.A.05-ProgrammationAvancee-Web/'
  static readonly IUT_MY_AVATAR = this.IUT_ADV_DEV_QUALITY + 'tutorials/projet1'
}

export class SocialLinks {
  private static readonly mail = "marc.haye.pro@protonmail.com"
  static readonly MAIL = 'mailto:' + this.mail;

  static readonly CV = "/CV.pdf";

  static readonly GITHUB = WebsiteLinks.GITHUB + 'doruo/'
  static readonly CODEBERG = WebsiteLinks.CODEBERG + 'doruo/'
  static readonly LINKEDIN = WebsiteLinks.LINKEDIN + 'marc-haye'
  static readonly GRAVATAR = WebsiteLinks.GRAVATAR + 'marchayepro'
  static readonly ITCHIO = 'https://doruo.itch.io/'
  static readonly DEVTO = 'https://dev.to/doruo'
}

export class ForgeLinks {
  // iut ---------------------------------------------------------------------------------------
  static readonly PORTFOLIO = SocialLinks.GITHUB + 'doruo.github.io'
  static readonly MY_AVATAR = SocialLinks.GITHUB + 'my-avatar'
  static readonly POURSUITE_ETUDES = SocialLinks.CODEBERG + 'poursuite-etudes'
  static readonly TRAINS = SocialLinks.GITHUB + 'trains'
  static readonly AVENTURIERS_DU_RAIL = SocialLinks.CODEBERG + 'aventuriers-du-rail'
  static readonly MARIN_IVRE = SocialLinks.GITHUB + 'marinIvre'
  static readonly SUDOKU = SocialLinks.GITHUB + 'sudoku'
  static readonly MASTERMIND = SocialLinks.GITHUB + 'mastermind'
  static readonly E3CETE = SocialLinks.GITHUB + 'e3cete/blob/master/SAE_1_02_E3Cète.pdf'
  static readonly NDI2024 = SocialLinks.GITHUB + 'NDI-2024-RaceForWater'
  static readonly NDI2025 = WebsiteLinks.GITHUB + "killianrms/NDI2025"

  // perso ---------------------------------------------------------------------------------------
  static readonly ELDEN_BUILD = SocialLinks.CODEBERG + 'elden-build'
  static readonly MESH = SocialLinks.CODEBERG + 'mesh'
  static readonly FALLOUTDLE = SocialLinks.CODEBERG + 'falloutdle'
  static readonly GOL = SocialLinks.CODEBERG + 'go-of-life'
  static readonly JELLYBOT = SocialLinks.CODEBERG + 'jellybot'
  static readonly FLIPPER_BALL = SocialLinks.GITHUB + 'flipper-ball'
  static readonly LLM_FROM_SCRATCH = SocialLinks.CODEBERG + 'llm-from-scratch'
  static readonly ANIME_SAMA_DOWNLOADER = WebsiteLinks.GITHUB + "Fire0902/anime-sama-downloader"
}

export class ProjectLinks {
  static readonly ITCHIO_TIME_MAGE_TOURNAMENT = SocialLinks.ITCHIO + 'time-mage-tournament'
  static readonly FALLOUTDLE = 'https://falloutdle.net'
  static readonly MY_AVATAR = 'https://webinfo.iutmontp.univ-montp2.fr/~bodiguely/my-avatar/public'
  static readonly NDI2025 = "https://killianrms.github.io/NDI2025"
}

export class LanguageLinks {
  static readonly JS = 'https://web.dev/javascript'
  static readonly TS = 'https://www.typescriptlang.org'
  static readonly PYTHON = 'https://www.python.org'
  static readonly PHP = 'https://www.php.net/releases/8.5/en.php'
  static readonly JAVA = 'https://www.java.com/'
  static readonly JAVAFX = 'https://openjfx.io'
  static readonly GO = 'https://go.dev'
}

export class ToolLinks {
  static readonly GIT =      'https://git-scm.com'
  static readonly GITLAB =   'https://gitlab.com'
  static readonly GITHUB =   'https://github.com'
  static readonly CODEBERG = 'https://codeberg.org'

  static readonly BOOTSTRAP = 'https://getbootstrap.com'
  static readonly NODE = 'https://nodejs.org'
  static readonly TWIG = 'https://twig.symfony.com/'

  static readonly POSTGRE = 'https://www.postgresql.org'
  static readonly PLSQL = 'https://www.oracle.com/fr/database/technologies/appdev/plsql.html'
  static readonly MYSQL = 'https://www.mysql.com'

  static readonly SCENE_BUILDER = 'https://gluonhq.com/products/scene-builder'
  static readonly DOCKER = 'https://docker.com'
  static readonly EBITENGINE = 'https://ebitengine.org'
  static readonly CHARTJS = 'https://www.chartjs.org'
  static readonly DISCORD_PY = 'https://discordpy.readthedocs.io'
  static readonly DISCORD_BOTS = 'https://discord.com/developers'

  static readonly LDAP = 'https://wikipedia.org/wiki/Lightweight_Directory_Access_Protocol'
  static readonly SCRUM = 'https://chef-de-projet.fr/methodologie-scrum'

  static readonly JUPYTER = 'https://jupyter.org/'
}

export class FrameworkLinks {
  static readonly ANACONDA = 'https://www.anaconda.com'
  static readonly PYTORCH = 'https://pytorch.org/'
  static readonly SYMFONY = 'https://symfony.com'

  static readonly TAILWIND = 'https://tailwindcss.com'
  static readonly EXPRESS = 'https://expressjs.com'
  static readonly NEXT = 'https://nextjs.org'
  static readonly VUE = 'https://vuejs.org'
}

// Alternatives
export class AlterLinks {
  static readonly OPEN_ALTER = 'https://openalternative.co/alternatives'
  static readonly FAIREPHONE_6 = 'https://shop.fairphone.com/fr/the-fairphone-gen-6'

  static readonly TOR = 'https://www.torproject.org/'
  static readonly BRAVE = 'https://brave.com/fr/'
  static readonly LADYBIRD = 'https://ladybird.org/'

  static readonly FREETUBE = 'https://freetubeapp.io/'
  static readonly ODYSEE = 'https://odysee.com/'

  static readonly RHYTHMBOX = 'https://doc.ubuntu-fr.org/rhythmbox'
  static readonly DOPAMINE = 'https://digimezzo.github.io/site/'
  static readonly NAVIDROME = 'https://www.navidrome.org/'

  static readonly STOAT = 'https://stoat.chat/'
  static readonly REDDIT = 'https://www.reddit.com/'
  
  static readonly PROTON_MAIL = 'https://proton.me/mail'
  static readonly TUTA = 'https://tuta.com/'
}

export class MusicLinks {
  // Hard Rock
  static readonly QUEEN = 'https://www.queenvault.com/Queen'
  static readonly KISS = 'https://www.kissonline.com'
  static readonly ACE_FREHLEY = 'https://www.acefrehley.com'

  // Blues
  static readonly RORY_GALLAGHER = 'https://rorygallagher.com'
  static readonly JIMI_HENDRIX = 'https://www.jimihendrix.com'
  static readonly SRV = 'https://www.levoyageur.ch/blog-posts/stevie-ray-vaughan'
}