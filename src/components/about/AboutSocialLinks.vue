<script setup lang="ts">
import { Links } from '@/data/Links'
import LinkItem from '../links/LinkItem.vue'
import { Pictures } from '@/data/Pictures'
</script>

<template>
  <div class="social-links">
    <LinkItem :link="Links.mail" :img="Pictures.MAIL" />
    <LinkItem :link="Links.github" :img="Pictures.GITHUB" />
    <LinkItem :link="Links.linkedin" :img="Pictures.LINKEDIN" />
    <LinkItem :link="Links.gravatar" :img="Pictures.GRAVATAR" />
    <LinkItem :link="Links.itchio" :img="Pictures.ITCHIO" />
  </div>
</template>
