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
      <a href="">
        <img alt="MVC" :src=Pictures.MVC>
      </a>
    </template>
    <template #title>Architecture MVC</template>
    <template #description>{{ description }}</template>
  </SkillItem>
</template>
