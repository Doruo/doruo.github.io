<script setup lang="ts">
import ProjectImageItem from '../abstract/ProjectImageItem.vue'
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { ToolIcons, SocialIcons, LanguageIcons } from '@/data/Icons'
import { CollaboratorsImg, TrainsImg } from '@/data/Pictures'
import { CollaboratorLinks, ForgeLinks, LanguageLinks, ToolLinks, WebsiteLinks } from '@/data/Links'
import PortraitItem from '@/components/portraits/PortraitItem.vue'

</script>

<template>
  <ProjectItem>
    <template #logo_projet>
      <img :src="TrainsImg.LOGO" :alt="TrainsImg.LOGO" />
    </template>

    <template #title>Jeu de plateau Trains</template>

    <template #description>
      <p>
        <a :href=WebsiteLinks.TRAINS target="blank">Trains</a> est un jeu de deck building japonais d'Hisashi Hayashi. Il a eu lieu dans le
        cadre des Situations d'Apprentissage et Évaluation de l'IUT Montpellier-Sête.
      </p>
      <p>Le projet a été réalisé en binome, et de façon incrémentale en 3 phases :</p>

      <ul>
        <li>
          <p><u><b>Phase 1:</b></u> développement de la mécanique du jeu en language <a :href="LanguageLinks.JAVA">Java</a>.</p>
        </li>
        <li>
          <p><u><b>Phase 2:</b></u> mise en œuvre des algorithmes de graphes.</p>
        </li>
        <li>
          <p><u><b>Phase 3:</b></u> implémentation d'une interface graphique sous <a :href="LanguageLinks.JAVAFX">JavaFX</a>.</p>
        </li>
      </ul>
      <p>
        Si le jeu vous intéresse, vous pouvez consulter <a :href="TrainsImg.RULES">les règles</a>.
        Il fait intervenir plusieurs compétences acquises durant le Semestre 2: le développement
        orienté-objet, les notions de qualité de développement (tests unitaires, gestion de
        version, travail en équipe), les algorithmes de graphes et les interfaces homme-machine.
      </p>
      <p>
        Concrètement, mon rôle fut de développer l'ensemble du fonctionnement du jeu (visuel et
        technique), mais également l'élaboration d'algorithmes complèxe permettant de jouer contre
        l'ordinateur.
      </p>
      <p>
        J'ai été amené durant ce projet à utiliser des notions de la théorie des graphes, comme l'algorithme de Dijkstra,
        afin de déterminer en temps réel et de façon efficace le chemin le plus court et le plus optimale pour
        l'ordinateur.
      </p>
    </template>

    <template #collaborators>
      <PortraitItem name="Damien Rostaing" :link="CollaboratorLinks.DAMIEN_ROSTAING" :img="CollaboratorsImg.DAMIEN_ROSTAING" alt="DAMIEN_ROSTAING"/>
    </template>

    <template #abilities>
      <SkillItem :img="ToolIcons.GITLAB" :link="ToolLinks.GITLAB" description="Gestion des versions, et collaboration en équipe." />
      <SkillItem :img="LanguageIcons.JAVA" :link="LanguageLinks.JAVA" description="Implémentation de la logique du jeu" />
      <SkillItem :img="ToolIcons.SCENEBUILDER" :link="ToolLinks.SCENE_BUILDER" description="Aide à la réalisation de l'interface graphique" />
    </template>

    <template #assets>
      <ProjectImageItem :link="TrainsImg.GAME_1" :alt="TrainsImg.GAME_1" />
      <ProjectImageItem :link="TrainsImg.GAME_2" :alt="TrainsImg.GAME_2" />
      <ProjectImageItem :link="TrainsImg.INIT" :alt="TrainsImg.INIT" />
    </template>

    <template #links>
      <LinkItem :link="ForgeLinks.TRAINS" :img="SocialIcons.GITHUB" />
      <LinkItem :link="TrainsImg.RULES" :img="ToolIcons.PDF" alt="Rules" text="Règles"/>
    </template>
  </ProjectItem>
</template>
