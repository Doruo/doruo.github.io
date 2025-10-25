<script setup lang="ts">
import { Pictures } from '@/data/Pictures';
import LinkItem from '@/components/links/abstract/LinkItem.vue';

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
          <img alt="mail" :src=Pictures.ITCHIO>
      </a>
    </template>
  </LinkItem>
</template>
