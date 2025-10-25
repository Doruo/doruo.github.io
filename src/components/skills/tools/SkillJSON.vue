<script setup lang="ts">
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
      <img alt="JSON" :src=Pictures.JSON>
    </template>
    <template #title>JSON</template>
    <template #description>{{ description }}</template>
  </SkillItem>
</template>
