<script setup lang="ts">
import { Links } from '@/data/Links'
import LinkItem from '../links/LinkItem.vue'
import { Pictures } from '@/data/Pictures'
</script>

<template>
  <div class="social-links">
    <LinkItem :link="Links.SOCIAL_MAIL" :img="Pictures.MAIL" />
    <LinkItem :link="Links.SOCIAL_GITHUB" :img="Pictures.GITHUB" />
    <LinkItem :link="Links.SOCIAL_LINKEDIN" :img="Pictures.LINKEDIN" />
    <LinkItem :link="Links.SOCIAL_GRAVATAR" :img="Pictures.GRAVATAR" />
    <LinkItem :link="Links.SOCIAL_ITCHIO" :img="Pictures.ITCHIO" />
  </div>
</template>
