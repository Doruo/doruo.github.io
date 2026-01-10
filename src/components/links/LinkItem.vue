<script setup lang="ts">
defineProps({
  img: { type: String, required: false, },
  link: { type: String, required: true, },
  alt: { type: String, required: false, },
  text: { type: String, required: false, },
})
</script>

<template>
  <!--LINK-->
  <div class="link-img">
    <a :href="link" target="_blank">
      <img :alt="alt" :src="img"/>
      {{text}}
    </a>
  </div>
</template>
