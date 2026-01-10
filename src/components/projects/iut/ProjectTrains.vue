<script setup lang="ts">
import ProjectImageItem from '../abstract/ProjectImageItem.vue'
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { ToolIcons, SocialIcons } from '@/data/Icons'
import { Pictures } from '@/data/Pictures'
import { GithubLinks, ToolLinks } from '@/data/Links'

import regles from '/IUT/A1/SAE-Trains/regles.pdf'

</script>

<template>
  <ProjectItem>
    <template #logo_projet>
      <img :src="Pictures.TRAINS_LOGO" :alt="Pictures.TRAINS_LOGO" />
    </template>

    <template #title>Jeu de plateau Trains</template>

    <template #description>
      <p>
        Trains est un jeu de deck building japonais Trains d'Hisashi Hayashi. Si le jeu vous
        intéresse, vous pouvez consulter <a :href="regles">les règles</a>. Il a eu lieu dans le
        cadre des Situations d'Apprentissage et Évaluation de l'IUT Montpellier-Sête.
      </p>
      <p>Le projet a été réalisé en binome, et de façon incrémentale en 3 phases :</p>

      <ul>
        <li>
          <p><u><b>Phase 1:</b></u> développement de la mécanique du jeu en Java.</p>
        </li>
        <li>
          <p><u><b>Phase 2:</b></u> mise en œuvre des algorithmes de graphes.</p>
        </li>
        <li>
          <p><u><b>Phase 3:</b></u> implémentation d'une interface graphique sous<a :href="ToolLinks.JAVAFX">JavaFX</a>.</p>
        </li>
      </ul>
      <p>
        Il fait intervenir plusieurs compétences acquises durant le Semestre 2: le développement
        orienté objets, les notions de qualité de développement (tests unitaires, gestion de
        version, etc.), les algorithmes de graphes et les interfaces homme-machine.
      </p>
      <p>
        Concrètement, mon rôle a été de développer l'ensemble du fonctionnement du jeu (visuel et
        technique), mais également l'élaboration d'algorithmes permettant de jouer contre
        l'ordinateur.
      </p>
      <p>
        J'ai donc dû utiliser des notions de la théorie des graphes, comme l'algorithme de Dijkstra,
        afin de déterminer en temps réel et de façon efficace le chemin le plus court pour
        l'ordinateur.
      </p>
    </template>

    <template #abilities>
      <SkillItem :img="ToolIcons.JAVA" :link="ToolLinks.JAVA" description="Implémentation de la logique du jeu" />
      <SkillItem :img="ToolIcons.JAVAFX" :link="ToolLinks.JAVAFX" description="Réalisation de l'interface graphique" />
      <SkillItem :img="ToolIcons.SCENEBUILDER" :link="ToolLinks.SCENE_BUILDER" description="Aide à la réalisation de l'interface graphique" />
    </template>

    <template #assets>
      <ProjectImageItem :link="Pictures.TRAINS_INIT" :alt="Pictures.TRAINS_INIT" />
      <ProjectImageItem :link="Pictures.TRAINS_1" :alt="Pictures.TRAINS_1" />
      <ProjectImageItem :link="Pictures.TRAINS_2" :alt="Pictures.TRAINS_2" />
      <ProjectImageItem :link="Pictures.TRAINS_3" :alt="Pictures.TRAINS_3" />
    </template>

    <template #links>
      <LinkItem :link="GithubLinks.TRAINS" :img="SocialIcons.GITHUB" />
      <LinkItem :link="regles" :img="ToolIcons.PDF" alt="REGLES" text="Règles"/>
    </template>
  </ProjectItem>
</template>
