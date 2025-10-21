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
      <a :href=Links.JAVA>
        <img alt="JAVA" :src=Pictures.JAVA>
      </a>
    </template>
    <template #title>Java</template>
    <template #description>{{ description }}</template>
  </SkillItem>
</template>
