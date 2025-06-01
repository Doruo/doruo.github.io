
<template>
  <section id="eldenbuild-intro" class="intro">

    <div class="contenu-intro">

      <slot name="logo_projet"></slot>

      <h2><slot name="title"></slot></h2>

      <slot name="description"></slot>
    </div>

  </section>

  <section class="competences">
    <section class="competences">
      <div class="contenu-competences">

        <h2>- Compétences techniques -</h2>

        <div class="competences-grid">
          <slot name="abilities"></slot>
        </div>
      </div>

    </section>
  </section>

  <section class="projets">
    <div class="projet-contenu-images">

      <h2>- Illustrations -</h2>

      <slot name="assets">

      </slot>
    </div>
  </section>

  <section class="contact">
    <div class="projet-liens">
      <slot name="liens"></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
