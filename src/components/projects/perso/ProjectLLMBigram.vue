<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { ToolIcons, SocialIcons } from '@/data/Icons'
import { ToolLinks, ForgeLinks } from '@/data/Links'
</script>

<template>
  <ProjectItem>
    <template #logo_projet>
      <img alt="AI Logo" :src="ToolIcons.AI" />
    </template>

    <template #title>LLM Bigramme</template>

    <template #description>
      <h3>🚧 PAGE EN TRAVAUX 🚧</h3>
      <p>
        Modèle de langage bigramme, IA réalisé de A à Z en Python avec le framework PyTorch.
      </p>
      <p>
        C'est un exercice à titre personnel et éducation
        pour faire mes premiers pas dans le domain de l'intelligence artificielle.
        L'objectif était de créer un GPT (Generative Pre-Trained Transformer)
        très basique capable de générer du texte à partir
        de contenu sur lequel s'entraîner en amont.
      </p>
      <p>
        J'ai pus également découvrir la librarie
        <a target="_blank" :href="ToolLinks.ANACONDA">Pytorch</a>,
        un outil puissant pour automatiser les calculs,
        faciliter l'entrainement du modèle,
        et optimiser les margues d'erreurs.
      </p>
      <p>
        J'ai également durant toute le développement de ce modèle réalisé
        un cours structuré et executable avec l'outil Jupyter Notebook,
        afin de réexpliquer le procédé pas à pas et de le rendre
        le plus accessible possibles, avec
        différents morceaux de code Python.
      </p>
    </template>

    <template #abilities>
      <SkillItem :img="ToolIcons.CODEBERG" :link="ToolLinks.CODEBERG" description="Gestion des versions du projet" />
      <SkillItem :img="ToolIcons.ANACONDA" :link="ToolLinks.ANACONDA" description="Distribution Python et gestion des packages" />
      <SkillItem :img="ToolIcons.PYTORCH" :link="ToolLinks.PYTORCH" description="Développement du modèle de langage" />
    </template>

    <template #assets>
    </template>

    <template #links>
      <LinkItem :link="ForgeLinks.LLM_FROM_SCRATCH" :img="SocialIcons.CODEBERG" />
    </template>

  </ProjectItem>
</template>
