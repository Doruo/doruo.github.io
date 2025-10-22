<script setup lang="ts">
import { Links } from '@/data/Links';
import SkillItem from '../abstract/SkillItem.vue';
import { Pictures } from '@/data/Pictures';
defineProps({
  description: {
    type: String,
    required: true
  },
})
</script>

<template>
  <SkillItem>
    <template #link-image>
      <a :href=Links.scenebuilder>
        <img alt="SCENE-BUILDER" :src=Pictures.SCENEBUILDER>
      </a>
    </template>
    <template #title>Scene Builder</template>
    <template #description>{{ description }}</template>
  </SkillItem>
</template>
