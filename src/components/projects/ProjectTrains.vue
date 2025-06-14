<script setup lang="ts">

import ProjectItem from '@/components/projects/common/ProjectItem.vue'


import logoTrains from '@/assets/images/projets/trains/logoTrains.webp'
import regles from '@/assets/portfolio/trains/regles.pdf'

import oop from '@/assets/images/projets/outils/oop.webp'
import java from '@/assets/images/projets/outils/java.webp'
import javafx from '@/assets/images/projets/outils/javafx.webp'
import sceneBuilder from '@/assets/images/projets/outils/scenebuilder.webp'

import init from '@/assets/images/projets/trains/trains_initialisation.webp'
import partie1 from '@/assets/images/projets/trains/trains_partie1.webp'
import partie2 from '@/assets/images/projets/trains/trains_partie2.webp'
import partie3 from '@/assets/images/projets/trains/trains_partie2.webp'
</script>

<template>

  <ProjectItem>
    <template #logo_projet>
      <img alt="logoTrains" :src=logoTrains>
    </template>

    <template #title>Jeu de plateau Trains</template>

    <template #description>
      <p>
        Trains est un jeu de deck building japonais Trains d'Hisashi Hayashi.
        Si le jeu vous intéresse, vous pouvez consulter <a :href=regles>les règles</a>.
        Il a eu lieu dans le cadre des Situations d'Apprentissage et Évaluation de l'IUT Montpellier-Sête.
      </p>


      <p>
        Le projet a été réalisé en binome, et de façon incrémentale en 3 phases :
      </p>

      <ul>
        <li>
          <p>
            <u><b>Phase 1:</b></u> développement de la mécanique du jeu en Java.
          </p>
        </li>
        <li>
          <p>
            <u><b>Phase 2:</b></u> mise en œuvre des algorithmes de graphes.
          </p>
        </li>
        <li>
          <p>
            <u><b>Phase 3:</b></u> implémentation d'une interface graphique sous <a
            href="https://openjfx.io/">JavaFX</a>.
          </p>
        </li>
      </ul>

      <p>
        Il fait intervenir plusieurs compétences acquises durant le Semestre 2:
        le développement orienté objets, les notions de qualité de développement
        (tests unitaires, gestion de version, etc.),
        les algorithmes de graphes et les interfaces homme-machine.
      </p>

      <p>
        Concrètement, mon rôle a été de développer l'ensemble du fonctionnement du jeu (visuel et technique),
        mais également l'élaboration
        d'algorithmes permettant de jouer contre l'ordinateur.
      </p>

      <p>
        J'ai donc dû utiliser des notions de la théorie des graphes, comme l'algorithme de Dijkstra,
        afin de déterminer en temps réel et de façon efficace le chemin le plus court
        pour l'ordinateur.
      </p>
    </template>

    <template #abilities>
      <div class="projet-card">
        <a>
          <img alt="Programmation orientée objet" :src=oop>
        </a>

        <h1>Programmation Orientée Objet</h1>
        <p>Pattern de développement du jeu.</p>
      </div>

      <div class="projet-card">
        <a href="https://www.java.com/">
          <img alt="Java" :src=java>
        </a>
        <h1>Java</h1>
        <p>Implémentation du fonctionnement du jeu.</p>
      </div>

      <div class="projet-card">
        <a href="https://openjfx.io/">
          <img alt="JavaFX" :src=javafx>
        </a>
        <h1>JavaFX</h1>
        <p>Réalisation de l'interface graphique.</p>
      </div>

      <div class="projet-card">
        <a href="https://gluonhq.com/products/scene-builder/">
          <img alt="Scene Builder" :src=sceneBuilder>
        </a>
        <h1>Scene Builder</h1>
        <p>Outil d'aide à la réalisation de l'interface graphique.</p>
      </div>

    </template>

    <template #assets>
        <div class="projet-images">
          <a :href=init>
            <img alt="trains_initialisation" :src=init>
          </a>
        </div>

        <div class="projet-images">
          <a :href=partie1>
            <img alt="trains_partie1" :src=partie1>
          </a>
        </div>

        <div class="projet-images">
          <a :href=partie2>
            <img alt="trains_partie2" :src=partie2>
          </a>
        </div>

        <div class="projet-images">
          <a :href=partie3>
            <img alt="trains_partie3" :src=partie3>
          </a>
        </div>
    </template>

    <template #liens>
      <a :href=regles>Règles du jeu</a>
      <a href="https://github.com/Doruo/Trains">Page Github</a>
    </template>
  </ProjectItem>
</template>
