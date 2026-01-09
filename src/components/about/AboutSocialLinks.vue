<script setup lang="ts">
import { Links } from '@/data/Links'
import LinkItem from '../links/LinkItem.vue'
import { Icons } from '@/data/Icons'
</script>

<template>
  <div class="social-links">
    <LinkItem :link="Links.SOCIAL_MAIL" :img="Icons.MAIL" />
    <LinkItem :link="Links.SOCIAL_GITHUB" :img="Icons.GITHUB" />
    <LinkItem :link="Links.SOCIAL_LINKEDIN" :img="Icons.LINKEDIN" />
    <LinkItem :link="Links.SOCIAL_GRAVATAR" :img="Icons.GRAVATAR" />
    <LinkItem :link="Links.SOCIAL_ITCHIO" :img="Icons.ITCHIO" />
  </div>
</template>
