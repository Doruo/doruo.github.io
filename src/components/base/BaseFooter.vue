<script setup lang="ts">
import { GithubLinks, SocialLinks, ToolLinks } from '@/data/Links'
import LinkItem from '../links/LinkItem.vue';
import { SocialIcons } from '@/data/Icons';
</script>

<template>
  <!--FOOTER-->
  <footer>
    <div class="footer-social">
      <link-item :link="SocialLinks.GITHUB" :img="SocialIcons.FOOTER_GITHUB" />
      <link-item :link="SocialLinks.DEVTO" :img="SocialIcons.FOOTER_DEVTO" />
      <link-item :link="SocialLinks.LINKEDIN" :img="SocialIcons.FOOTER_LINKEDIN" />
    </div>
    <div class="footer-text">
      <ul>
        <li><a :href="GithubLinks.PORTFOLIO" target="_blank">Source Code</a></li>
        <li>100% Human made 🦊 with <a :href="ToolLinks.VUEJS" target="_blank">Vue.js</a></li>
        <li>&copy; 2024 - 2026 Marc Haye | All Rights Reserved</li>
      </ul>
    </div>
  </footer>
</template>
