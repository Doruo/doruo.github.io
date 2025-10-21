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
      <a :href=Links.POSTGRE>
        <img alt="POSTGRE" :src=Pictures.POSTGRE>
      </a>
    </template>
    <template #title>PostgreSQL</template>
    <template #description>{{ description }}</template>
  </SkillItem>
</template>
