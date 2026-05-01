<template>
  <div class="portfolio-apprentissage">

    <!-- Hero -->
    <section class="pa-hero">
      <div class="container">
        <span class="tag">BUT Informatique · Année 3 · Parcours RACDV</span>
        <h1>Portfolio d'apprentissage</h1>
        <p class="lead">
          Ce document retrace mon parcours de montée en compétences sur les trois années du BUT Informatique.
          Plutôt qu'un simple récapitulatif de cours, j'ai cherché à relier chaque compétence à des situations
          concrètes — projets académiques, travaux en TD, et surtout mon alternance chez ITESOFT.
        </p>
        <div class="pa-meta">
          <div class="pa-meta-item">
            <span class="pa-meta-label">Étudiant</span>
            <span class="pa-meta-value">Marc Haye</span>
          </div>
          <div class="pa-meta-item">
            <span class="pa-meta-label">Entreprise</span>
            <span class="pa-meta-value">ITESOFT — alternance S5/S6</span>
          </div>
          <div class="pa-meta-item">
            <span class="pa-meta-label">Parcours</span>
            <span class="pa-meta-value">A - RACDV</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Intro contextuelle -->
    <section class="pa-intro-block">
      <div class="container--narrow">
        <p>
          J'ai choisi d'organiser cette page autour des <strong>trois compétences de niveau 3</strong> travaillées dans
          le cadre du parcours RACDV :
          <span class="accent">Réaliser</span>, <span class="accent">Collaborer</span> et <span
            class="accent">Conduire</span>.
          Pour chacune, je présente les apprentissages critiques, les composantes essentielles associées, et les traces
          concrètes
          qui attestent de mon niveau d'acquisition.
        </p>
      </div>
    </section>

    <!-- Compétence 1 : Réaliser -->
    <section class="pa-competence" id="realiser">
      <div class="container">
        <div class="competence-header realiser">
          <div class="competence-badge">C1</div>
          <div>
            <span class="tag">Réaliser · Niveau 3</span>
            <h2>Adapter des applications sur un ensemble de supports</h2>
            <p class="competence-desc">embarqué, web, système</p>
          </div>
        </div>

        <div class="ce-strip">
          <span class="ce-item">CE1.01 · Respecter les besoins client</span>
          <span class="ce-item">CE1.03 · Principes algorithmiques</span>
          <span class="ce-item">CE1.04 · Qualité du code et documentation</span>
          <span class="ce-item">CE1.06 · Ressources techniques appropriées</span>
        </div>

        <div class="ac-grid">

          <div class="ac-card">
            <div class="ac-number">AC 1</div>
            <h3>Choisir et implémenter les architectures adaptées</h3>
            <div class="ac-status acquired">Acquis</div>            
            <p>
              Durant ce semestre j'ai été 
            </p>
            <p>
              J'ai également réalisé durant toute la troisième année une alternance chez ITESOFT. 
            </p>
            <p>              
              J'ai eu la responsabilité d'implémenter dans une API en SaaS d'export de factures 
              des fonctionalités de sécurisation : protocole
              d'autorisation OAuth 2.0,
              authentification administrateur via un gestionnaire de
              sécret pour les grandes entreprises
              nommé Microsoft Azure Key Vault.
            </p>
            <p>
              J'ai réalisé ceci avec le framework NestJS: il impose une
              structure modulaire qui correspond bien aux contraintes
              d'une application métier
              devant évoluer dans le temps.
            </p>
            <p>
              Ces choix de missions sont primordiaux car une sécurisation des accès
              clients et adminisatreurs nécessitait d'être accru, nottament pour
              préparer la réforme 2026 de facturation électronique.
            </p>
            <div class="traces">
              <span class="trace-label">Traces associées</span>
              <div class="trace-list">
                <span class="trace-item">API d'export ITESOFT (NestJS)</span>
                <span class="trace-item">Documentation architecture interne</span>
                <span class="trace-item">Projet GameCritics</span>
              </div>
            </div>
          </div>

          <div class="ac-card">
            <div class="ac-number">AC 2</div>
            <h3>Faire évoluer une application existante</h3>
            <div class="ac-status acquired">Acquis</div>
            <p>
              Durant mon alternance, l'API d'export de facturation sur laquelle je travaillais
              est conséquent mais toujours développement :
              très vite, il a fallu l'intégrer dans un environnement existant chez ITESOFT,
              avec ses propres conventions, ses formats de données legacy
              et ses contraintes de compatibilité.
            </p>
            <p>
              Les difficultés rencontrés sont: naviguer dans une codebase qu'on n'a pas écrite,
              comprendre les intentions derrière des choix techniques passés,
              et ajouter des fonctionnalités sans casser l'existant.
            </p>
            <p>
              J'ai aussi eu l'occasion de reprendre certains projets personelles
              des semestres précédents pour les améliorer, notamment en refactorisant des
              parties mal structurées au départ. Ça m'a appris à lire du
              code avec un regard critique, pas seulement à en produire.
            </p>
            <p>
              Par exemple j'ai reconstruit mon projet du jeu de la vie en Go car il utilisait
              une loguique pas assez optimale et ne correspondait pas aux règles établi par le créateur du jeu John
              Conway.
            </p>
            <div class="traces">
              <span class="trace-label">Traces associées</span>
              <div class="trace-list">
                <span class="trace-item">Intégration API dans l'écosystème existant</span>
                <span class="trace-item">Refactoring projets S3/S4</span>
                <span class="trace-item">Tests Postman sur endpoints existants</span>
              </div>
            </div>
          </div>

          <div class="ac-card">
            <div class="ac-number">AC 3</div>
            <h3>Intégrer des solutions dans un environnement de production</h3>
            <div class="ac-status in-progress">En cours d'acquisition</div>
            <p>
              L'API d'export existait déjà en production quand j'ai rejoint Itesoft — mon rôle n'était pas de la déployer,
              mais d'y contribuer en tant que membre de l'équipe. J'ai développé de nouvelles fonctionnalités directement
              sur une application live, ce qui change pas mal la donne : le moindre bug a un impact réel, et on apprend
              vite à être rigoureux sur les tests avant de pousser quoi que ce soit.
            </p>
            <p>
              Cette expérience m'a surtout appris ce que ça veut dire de travailler dans un environnement de production
              qu'on n'a pas construit soi-même — comprendre les contraintes existantes, respecter les conventions de l'équipe,
              et s'intégrer dans un pipeline de déploiement sans le casser. Docker était déjà en place ; j'ai surtout appris
              à m'en servir dans ce contexte, pas à le mettre en place.
            </p>
            <p>
              Je considère cette compétence encore en cours d'acquisition parce que
              j'ai surtout touché aux aspects de conteneurisation ;
              la gestion fine des environnements (staging, prod, rollback)
              reste un domaine que je veux approfondir.
            </p>
            <div class="traces">
              <span class="trace-label">Traces associées</span>
              <div class="trace-list">
                <span class="trace-item">Dockerfile API export</span>
                <span class="trace-item">docker-compose dev/prod</span>
                <span class="trace-item">Échanges avec équipe SaaSOps ITESOFT</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Compétence 2 : Collaborer -->
    <section class="pa-competence" id="collaborer">
      <div class="container">
        <div class="competence-header collaborer">
          <div class="competence-badge">C6</div>
          <div>
            <span class="tag">Collaborer · Niveau 3</span>
            <h2>Manager une équipe informatique</h2>
            <p class="competence-desc">Inscrire sa démarche dans un contexte pluridisciplinaire</p>
          </div>
        </div>

        <div class="ce-strip">
          <span class="ce-item">CE6.01 · Équipe pluridisciplinaire</span>
          <span class="ce-item">CE6.02 · Mise en œuvre des évolutions</span>
          <span class="ce-item">CE6.03 · Contraintes juridiques</span>
          <span class="ce-item">CE6.04 · Communication efficace</span>
        </div>

        <div class="ac-grid">

          <div class="ac-card">
            <div class="ac-number">AC 1</div>
            <h3>Organiser et partager une veille numérique</h3>
            <div class="ac-status acquired">Acquis</div>
            <p>
              En alternance, rester à jour sur les évolutions de NestJS,
              des pratiques API REST et des nouveautés Docker n'est pas optionnel:
              l'équipe attend qu'on sache de quoi on parle lors des revues techniques.
              J'ai mis en place une routine de veille (newsletters techniques,
              suivi de changelogs, lectures ponctuelles de RFC) et j'ai commencé à en partager les points saillants lors
              de nos réunions d'équipe hebdomadaires.
            </p>
            <div class="traces">
              <span class="trace-label">Traces associées</span>
              <div class="trace-list">
                <span class="trace-item">Partages en réunion d'équipe</span>
                <span class="trace-item">Notes de veille personnelles</span>
              </div>
            </div>
          </div>

          <div class="ac-card">
            <div class="ac-number">AC 2</div>
            <h3>Identifier les enjeux de l'économie de l'innovation numérique</h3>
            <div class="ac-status in-progress">En cours d'acquisition</div>
            <p>
              Travailler chez ITESOFT, éditeur de logiciels spécialisé dans la dématérialisation,
              donne une perspective assez concrète sur ce que
              l'innovation numérique représente économiquement.
              La question de la facturation électronique obligatoire (réforme 2026) a été
              un sujet de discussion fréquent, directement lié à notre produit.
              J'ai commencé à comprendre comment les décisions techniques s'articulent
              avec des enjeux business et réglementaires. C'est un apprentissage que je continue à structurer.
            </p>
            <div class="traces">
              <span class="trace-label">Traces associées</span>
              <div class="trace-list">
                <span class="trace-item">Contexte réforme facturation électronique</span>
                <span class="trace-item">UE Économie numérique S5</span>
              </div>
            </div>
          </div>

          <div class="ac-card">
            <div class="ac-number">AC 3</div>
            <h3>Guider la conduite du changement informatique</h3>
            <div class="ac-status in-progress">En cours d'acquisition</div>
            <p>
              À mon niveau d'alternant, je n'ai pas piloté de conduite du changement au sens strict. En revanche, j'ai
              participé activement
              à l'introduction de Postman comme outil de test standardisé au sein de l'équipe — rédaction de collections
              partagées, documentation
              des endpoints, formation informelle d'un collègue. Ce n'est pas de la conduite du changement à grande
              échelle, mais c'est une première
              expérience concrète de ce que ça demande.
            </p>
            <div class="traces">
              <span class="trace-label">Traces associées</span>
              <div class="trace-list">
                <span class="trace-item">Collections Postman documentées</span>
                <span class="trace-item">Transmission de pratiques à l'équipe</span>
              </div>
            </div>
          </div>

          <div class="ac-card">
            <div class="ac-number">AC 4</div>
            <h3>Accompagner le management de projet informatique</h3>
            <div class="ac-status acquired">Acquis</div>
            <p>
              Dans les projets académiques comme en entreprise, j'ai eu à me positionner dans des dynamiques de groupe
              diverses.
              En SAÉ, j'ai tenu le rôle de référent technique sur plusieurs projets — organiser les sprints, faire le
              lien entre les besoins
              exprimés et ce qui est faisable techniquement, et gérer les inévitables frictions quand les deadlines
              approchent.
              L'alternance a renforcé cette dimension : les réunions de suivi, les estimations de charge et les
              arbitrages font partie du quotidien.
            </p>
            <div class="traces">
              <span class="trace-label">Traces associées</span>
              <div class="trace-list">
                <span class="trace-item">Gestion de sprint en SAÉ S5</span>
                <span class="trace-item">Suivi projet ITESOFT: AzureDevOps,</span>
                <span class="trace-item">Compte-rendus de réunions</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Compétence 3 : Conduire (IAMSI - Conduire niveau 3) -->
    <section class="pa-competence" id="conduire">
      <div class="container">
        <div class="competence-header conduire">
          <div class="competence-badge">C5</div>
          <div>
            <span class="tag">Conduire · Niveau 3</span>
            <h2>Participer à la conception et à la mise en œuvre d'un projet système d'information</h2>
            <p class="competence-desc">Mesurer les impacts, intégrer, adapter un SI</p>
          </div>
        </div>

        <div class="ce-strip">
          <span class="ce-item">CE5.01 · Communication efficace</span>
          <span class="ce-item">CE5.02 · Règles juridiques et normes</span>
          <span class="ce-item">CE5.03 · Gestion éthique et durable</span>
          <span class="ce-item">CE5.04 · Démarche proactive et critique</span>
        </div>

        <div class="ac-grid">

          <div class="ac-card">
            <div class="ac-number">AC 1</div>
            <h3>Mesurer les impacts économiques, sociétaux et technologiques d'un projet</h3>
            <div class="ac-status in-progress">En cours d'acquisition</div>
            <p>
              L'API d'export de factures que j'ai développée chez ITESOFT s'inscrit dans un projet plus large de mise en
              conformité
              avec la facturation électronique obligatoire — une réforme qui touche des milliers d'entreprises
              françaises.
              Comprendre pourquoi ce projet existait, quelles contraintes légales il devait respecter (normes Factur-X,
              Peppol…)
              et quel impact son bon fonctionnement avait sur les clients finaux, c'est quelque chose que j'ai intégré
              progressivement.
              Je ne prétends pas maîtriser l'analyse d'impact dans toute sa complexité, mais j'ai appris à ne pas coder
              dans le vide.
            </p>
            <div class="traces">
              <span class="trace-label">Traces associées</span>
              <div class="trace-list">
                <span class="trace-item">Contexte réglementaire facturation électronique</span>
                <span class="trace-item">Spécifications fonctionnelles API export</span>
              </div>
            </div>
          </div>

          <div class="ac-card">
            <div class="ac-number">AC 2</div>
            <h3>Intégrer un projet informatique dans le système d'information d'une organisation</h3>
            <div class="ac-status acquired">Acquis</div>
            <p>
              L'intégration de l'API dans le SI d'ITESOFT a été l'un des aspects les plus formateurs de mon alternance.
              Il n'y avait pas que du code à écrire : il fallait comprendre comment le SI existant fonctionnait,
              identifier les points
              d'entrée et les dépendances, et s'assurer que les nouvelles fonctionnalités ne venaient pas perturber ce
              qui tournait déjà en production.
              La phase de tests avec Postman a été cruciale pour valider que l'intégration était propre avant de pousser
              en staging.
            </p>
            <div class="traces">
              <span class="trace-label">Traces associées</span>
              <div class="trace-list">
                <span class="trace-item">Tests d'intégration Postman</span>
                <span class="trace-item">Schéma d'architecture SI ITESOFT</span>
                <span class="trace-item">API branchée sur pipeline ITESOFT</span>
              </div>
            </div>
          </div>

          <div class="ac-card">
            <div class="ac-number">AC 3</div>
            <h3>Adapter un système d'information</h3>
            <div class="ac-status in-progress">En cours d'acquisition</div>
            <p>
              Adapter un SI, c'est un exercice délicat qui dépasse largement le périmètre d'un seul développeur.
              J'ai contribué à des évolutions du système existant — ajout de nouveaux formats d'export, modification du
              schéma
              de données pour intégrer de nouveaux champs client — mais toujours dans le cadre d'un travail d'équipe.
              C'est une compétence que je considère partiellement acquise : je sais participer à l'adaptation d'un SI,
              mais la conception et le pilotage global restent encore à construire.
            </p>
            <div class="traces">
              <span class="trace-label">Traces associées</span>
              <div class="trace-list">
                <span class="trace-item">Évolutions formats export (JSON, XML, PDF)</span>
                <span class="trace-item">Modifications schéma base de données</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Bilan -->
    <section class="pa-bilan">
      <div class="container--narrow">
        <span class="tag">Bilan réflexif</span>
        <h2>Ce que j'en retiens</h2>
        <p>
          Ces trois années de BUT m'ont appris que la technique, aussi importante soit-elle, n'est jamais suffisante
          seule.
          Les compétences qui m'ont le plus fait progresser sont celles qui m'ont forcé à communiquer, à argumenter mes
          choix,
          et à comprendre le contexte dans lequel je travaillais.
        </p>
        <p>
          L'alternance chez ITESOFT a cristallisé beaucoup de choses : travailler sur un vrai produit, avec de vraies
          contraintes
          et de vraies personnes, c'est une expérience qu'aucun projet académique ne peut tout à fait reproduire.
          Le fait de devoir expliquer mes décisions techniques à des collègues plus expérimentés m'a plus appris que
          n'importe quel cours.
        </p>
        <p>
          Il reste des zones grises — des compétences que j'ai commencé à travailler sans les avoir vraiment
          solidifiées.
          C'est honnête de le reconnaître, et c'est précisément l'intérêt de cet exercice : savoir ce qu'on maîtrise,
          et savoir ce qu'on a encore à faire.
        </p>
      </div>
    </section>

  </div>
</template>

<style scoped>
/*  Variables héritées du design system global  */
/* On réutilise les tokens définis dans styles.css */

.portfolio-apprentissage {
  font-family: var(--font-body);
  color: var(--clr-text);
}

/*  HERO  */
.pa-hero {
  padding-block: var(--space-lg);
  border-bottom: 1px solid var(--clr-border);
  text-align: left;
}

.pa-hero h1 {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 4rem);
  color: var(--clr-heading);
  margin: var(--space-sm) 0 var(--space-md);
  letter-spacing: -0.03em;
}

.pa-hero .lead {
  font-size: 1.1rem;
  color: var(--clr-text-muted);
  max-width: 700px;
  line-height: 1.8;
  margin-bottom: var(--space-md);
}

.pa-meta {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
  margin-top: var(--space-md);
}

.pa-meta-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: var(--space-sm) var(--space-md);
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-sm);
}

.pa-meta-label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--clr-text-muted);
}

.pa-meta-value {
  font-weight: 500;
  color: var(--clr-heading);
  font-size: 0.95rem;
}

/*  INTRO  */
.pa-intro-block {
  padding-block: var(--space-lg);
  text-align: left;
}

.pa-intro-block p {
  color: var(--clr-text-muted);
  font-size: 1.05rem;
  line-height: 1.85;
}

.accent {
  color: var(--clr-accent);
  font-weight: 500;
}

/*  COMPETENCES  */
.pa-competence {
  padding-block: var(--space-lg);
  border-top: 1px solid var(--clr-border);
  text-align: left;
}

.competence-header {
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.competence-badge {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: 1.4rem;
  font-weight: 500;
  color: #fff;
}

.competence-header.realiser .competence-badge {
  background: rgba(180, 60, 60, 0.8);
}

.competence-header.collaborer .competence-badge {
  background: rgba(30, 40, 60, 0.9);
  border: 1px solid rgba(100, 220, 200, 0.2);
}

.competence-header.conduire .competence-badge {
  background: rgba(30, 50, 90, 0.9);
  border: 1px solid rgba(167, 139, 250, 0.2);
}

.competence-header h2 {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  color: var(--clr-heading);
  margin-bottom: 0.2em;
}

.competence-desc {
  font-size: 0.9rem;
  color: var(--clr-text-muted);
  font-style: italic;
  margin: 0;
}

/* CE STRIP */
.ce-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: var(--space-md);
}

.ce-item {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  color: var(--clr-text-muted);
  border: 1px solid var(--clr-border);
  border-radius: 4px;
  padding: 0.2em 0.7em;
  background: var(--clr-surface);
}

/* AC GRID */
.ac-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.6rem;
}

.ac-card {
  position: relative;
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  box-shadow: var(--shadow-card);
  transition: transform var(--duration) var(--ease-out),
    border-color var(--duration) var(--ease-out),
    box-shadow var(--duration) var(--ease-out);
  animation: fade-up 0.5s var(--ease-out) both;
}

.ac-card:hover {
  transform: translateY(-3px);
  border-color: rgba(100, 220, 200, 0.18);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(100, 220, 200, 0.08);
}

.ac-number {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--clr-accent);
  margin-bottom: 0.4rem;
}

.ac-card h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--clr-heading);
  margin-bottom: var(--space-sm);
  line-height: 1.35;
}

.ac-card p {
  font-size: 0.9rem;
  color: var(--clr-text-muted);
  line-height: 1.75;
  margin-bottom: var(--space-sm);
}

/* STATUS BADGE */
.ac-status {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.2em 0.7em;
  border-radius: 4px;
  margin-bottom: var(--space-sm);
}

.ac-status.acquired {
  color: var(--clr-accent);
  background: rgba(100, 220, 200, 0.08);
  border: 1px solid rgba(100, 220, 200, 0.22);
}

.ac-status.in-progress {
  color: var(--clr-accent-2);
  background: rgba(167, 139, 250, 0.08);
  border: 1px solid rgba(167, 139, 250, 0.22);
}

/*  TRACES  */
.traces {
  margin-top: var(--space-sm);
  padding-top: var(--space-sm);
  border-top: 1px solid var(--clr-border);
}

.trace-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--clr-text-muted);
  margin-bottom: 0.5rem;
}

.trace-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.trace-item {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--clr-text-muted);
  background: var(--clr-surface-2);
  border: 1px solid var(--clr-border);
  border-radius: 4px;
  padding: 0.15em 0.6em;
}

/*  BILAN  */
.pa-bilan {
  padding-block: var(--space-lg);
  border-top: 1px solid var(--clr-border);
  text-align: left;
}

.pa-bilan h2 {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  color: var(--clr-heading);
  margin-bottom: var(--space-md);
}

.pa-bilan p {
  color: var(--clr-text-muted);
  font-size: 1rem;
  line-height: 1.85;
  max-width: 680px;
}

.bilan-grid {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
  margin-top: var(--space-lg);
}

.bilan-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--space-md);
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-md);
  min-width: 160px;
}

.bilan-number {
  font-family: var(--font-display);
  font-size: 3rem;
  color: var(--clr-accent);
  line-height: 1;
  margin-bottom: 0.3rem;
}

.bilan-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--clr-text-muted);
}

/*  RESPONSIVE  */
@media screen and (max-width: 768px) {
  .pa-meta {
    flex-direction: column;
  }

  .competence-header {
    flex-direction: column;
  }

  .ac-grid {
    grid-template-columns: 1fr;
  }

  .bilan-grid {
    flex-direction: column;
  }

  .pa-hero {
    text-align: center;
  }

  .pa-intro-block,
  .pa-competence,
  .pa-bilan {
    text-align: left;
  }
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>