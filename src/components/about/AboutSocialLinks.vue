<script setup lang="ts">
import { Links } from '@/data/Links';
import LinkMail from '@/components//links/social/LinkMail.vue';
import LinkGithub from '@/components//links/social/LinkGithub.vue';
import LinkLinkedin from '@/components//links/social/LinkLinkedin.vue';
import LinkGravatar from '@/components//links/social/LinkGravatar.vue';
import LinkItchio from '@/components//links/social/LinkItchio.vue';
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
