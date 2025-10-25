<script setup lang="ts">
defineProps({
  img: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <!--LINK-->
  <div class="social-link-img">
    <a :href="link">
      <img alt="mail" :src="img">
    </a>
  </div>
</template>