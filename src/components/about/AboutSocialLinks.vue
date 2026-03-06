<script setup lang="ts">
import { SocialLinks } from '@/data/Links'
import LinkItem from '../links/LinkItem.vue'
import { SocialIcons } from '@/data/Icons'
</script>

<template>
  <div class="social-links">
    <LinkItem :link="SocialLinks.MAIL" :img="SocialIcons.MAIL" />
    <LinkItem :link="SocialLinks.LINKEDIN" :img="SocialIcons.LINKEDIN" />
    <LinkItem :link="SocialLinks.ITCHIO" :img="SocialIcons.ITCHIO" />
    <LinkItem :link="SocialLinks.CODEBERG" :img="SocialIcons.CODEBERG" />
  </div>
</template>
