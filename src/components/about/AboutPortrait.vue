<script setup lang="ts">
  import portrait_path from '@/assets/images/portrait/portrait.webp';
</script>

<template>
    <div class="conteneur-portrait">
      <img class="portrait" :src="portrait_path" alt="portrait">
    </div>
</template>