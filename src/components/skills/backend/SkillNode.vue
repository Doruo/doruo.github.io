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
      <a :href=Links.NODE>
        <img alt="NODE" :src=Pictures.NODE>
      </a>
    </template>
    <template #title>NodeJS</template>
    <template #description>{{ description }}</template>
  </SkillItem>
</template>
