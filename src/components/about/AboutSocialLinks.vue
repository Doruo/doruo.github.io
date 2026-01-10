<script setup lang="ts">
import { Links } from '@/data/Links'
import LinkItem from '../links/LinkItem.vue'
import { SocialIcons } from '@/data/Icons'
</script>

<template>
  <div class="social-links">
    <LinkItem :link="Links.SOCIAL_MAIL" :img="SocialIcons.MAIL" />
    <LinkItem :link="Links.SOCIAL_GITHUB" :img="SocialIcons.GITHUB" />
    <LinkItem :link="Links.SOCIAL_LINKEDIN" :img="SocialIcons.LINKEDIN" />
    <LinkItem :link="Links.SOCIAL_GRAVATAR" :img="SocialIcons.GRAVATAR" />
    <LinkItem :link="Links.SOCIAL_ITCHIO" :img="SocialIcons.ITCHIO" />
  </div>
</template>
