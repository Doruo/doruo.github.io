<script setup lang="ts">
import { ForgeLinks, FrameworkLinks, SocialLinks, ToolLinks } from '@/data/Links'
import LinkItem from '../links/LinkItem.vue';
import { SocialIcons } from '@/data/Icons';
</script>

<template>
  <!--FOOTER-->
  <footer>
    <div class="footer-social">
      <LinkItem :link="SocialLinks.GITHUB" :img="SocialIcons.FOOTER_GITHUB" />
      <LinkItem :link="SocialLinks.LINKEDIN" :img="SocialIcons.FOOTER_LINKEDIN" />
      <LinkItem :link="SocialLinks.DEVTO"    :img="SocialIcons.FOOTER_DEVTO" />
    </div>
    <div class="footer-text">
      <ul>
        <li>&copy; 2024-2026 | All Rights Reserved</li>
        <li>🦊 Made with <a :href="FrameworkLinks.VUE" target="_blank">Vue.js</a></li>
      </ul>
    </div>
  </footer>
</template>
