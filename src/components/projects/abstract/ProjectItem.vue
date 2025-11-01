<template>
  <!-- PROJECT ITEM -->
  <section class="intro">
    <!-- PROJECT INTRO -->
    <div class="intro-content">
      <slot name="logo_projet"></slot>
      <h2>
        <slot name="title"></slot>
      </h2>
      <slot name="description"></slot>
    </div>
  </section>

  <section class="skills">
    <!-- PROJECT SKILLS -->
    <div class="skills-content">
      <h2>Compétences techniques</h2>
      <div class="skill-grid">
        <slot name="abilities"></slot>
      </div>
    </div>
  </section>

  <section class="projects">
    <!-- PROJECT ASSETS -->
    <div class="project-content-images">
      <h2>Illustrations</h2>
      <slot name="assets"></slot>
    </div>
  </section>

  <section class="contact">
    <!-- PROJECT LINKS -->
    <div class="project-lins">
      <h2>Liens</h2>
      <slot name="liens"></slot>
    </div>
  </section>
</template>
