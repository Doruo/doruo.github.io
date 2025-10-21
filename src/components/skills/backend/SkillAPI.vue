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
      <a>
        <img alt="API" :src=Pictures.REST>
      </a>
    </template>
    <template #title>API RESTfull</template>
    <template #description>{{ description }}</template>
  </SkillItem>
</template>
