<script setup lang="ts">
import SkillItem from '../abstract/SkillItem.vue';
import { Pictures } from '@/data/Pictures';
defineProps({ description: {type: String, required: true}})
</script>

<template>
  <SkillItem>
    <template #link-image>
      <img alt="OOP" :src=Pictures.OOP>
    </template>
    <template #title>Programmation orientée objet</template>
    <template #description>{{ description }}</template>
  </SkillItem>
</template>
