
<template>
  <!-- FOOTER -->
  <footer>
    <div class="conteneur">
      <p>
        Réalisé en <a href="https://fr.vuejs.org/">Vue.js</a>
      </p>
      <p>
        <a href="https://github.com/Doruo/doruo.github.io">Code source</a>
      </p>
      <p>
        <router-link :to="{ name: 'previous' }">Anciennes versions</router-link>
      </p>
      <p>&copy; 2026 - Work In Progress</p>
    </div>
  </footer>
</template>
