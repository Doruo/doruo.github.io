<script setup lang="ts">
import { Links } from '@/data/Links'
import LinkItem from '../links/LinkItem.vue'
import { Pictures } from '@/data/Pictures'
</script>

<template>
  <div class="social-links">
    <LinkItem :link="Links.MAIL" :img="Pictures.MAIL" />
    <LinkItem :link="Links.GITHUB" :img="Pictures.GITHUB" />
    <LinkItem :link="Links.LINKEDIN" :img="Pictures.LINKEDIN" />
    <LinkItem :link="Links.GRAVATAR" :img="Pictures.GRAVATAR" />
    <LinkItem :link="Links.ITCHIO" :img="Pictures.ITCHIO" />
  </div>
</template>
