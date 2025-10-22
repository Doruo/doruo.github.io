<script setup lang="ts">
import { Pictures } from '@/data/Pictures';
import LinkItem from './abstract/LinkItem.vue';

defineProps({
  link: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <LinkItem>
    <template #link-img>
      <a :href="link">
          <img alt="mail" :src=Pictures.MAIL>
      </a>
    </template>
  </LinkItem>
</template>
