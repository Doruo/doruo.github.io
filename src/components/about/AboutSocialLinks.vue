<script setup lang="ts">
import { SocialLinks } from '@/data/Links'
import LinkItem from '../links/LinkItem.vue'
import { SocialIcons } from '@/data/Icons'
</script>

<template>
  <div class="social-links">
    <LinkItem :link="SocialLinks.MAIL" :img="SocialIcons.MAIL" />
    <LinkItem :link="SocialLinks.GITHUB" :img="SocialIcons.GITHUB" />
    <LinkItem :link="SocialLinks.LINKEDIN" :img="SocialIcons.LINKEDIN" />
    <LinkItem :link="SocialLinks.GRAVATAR" :img="SocialIcons.GRAVATAR" />
    <LinkItem :link="SocialLinks.ITCHIO" :img="SocialIcons.ITCHIO" />
  </div>
</template>
