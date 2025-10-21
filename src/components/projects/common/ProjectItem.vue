
<template>
  <!-- PROJECT ITEM -->

  <section class="intro">
    <!-- PROJECT INTRO -->
    <div class="contenu-intro">
      <slot name="logo_projet"></slot>
      <h2><slot name="title"></slot></h2>
      <slot name="description"></slot>
    </div>
  </section>

  <section class="competences">
    <!-- PROJECT SKILLS -->
    <div class="contenu-competences">
      <h2>Compétences techniques</h2>
      <div class="competences-grid">
        <slot name="abilities"></slot>
      </div>
    </div>
  </section>

  <section class="projets">
    <!-- PROJECT ASSETS -->
    <div class="projet-contenu-images">
      <h2>Illustrations</h2>
      <slot name="assets"></slot>
    </div>
  </section>

  <section class="contact">
    <!-- PROJECT LINKS -->
    <div class="projet-liens">
      <slot name="liens"></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
