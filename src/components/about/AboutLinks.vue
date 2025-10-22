<script setup lang="ts">
import { Links } from '@/data/Links';
import LinkMail from '../links/LinkMail.vue';
import LinkGithub from '../links/LinkGithub.vue';
import LinkLinkedin from '../links/LinkLinkedin.vue';
import LinkGravatar from '../links/LinkGravatar.vue';
import LinkItchio from '../links/LinkItchio.vue';
</script>

<template>
  <div class="social-links">
    <LinkMail :link=Links.mail />
    <LinkGithub :link=Links.github />
    <LinkLinkedin :link=Links.linkedin />
    <LinkGravatar :link=Links.gravatar />
    <LinkItchio :link=Links.itchio />
  </div>
</template>
