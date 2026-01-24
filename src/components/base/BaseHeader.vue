<template>
  <!--HEADER-->
  <header class="header">
    <nav class="nav">
      <div class="branding">
        <h1><router-link :to="{ name: 'home' }">Marc Haye</router-link></h1>
        <h4>> Étudiant en Informatique</h4>
      </div>

      <ul class="nav-links">
        <li><router-link :to="{ name: 'about' }">À Propos</router-link></li>
        <li>|</li>
        <li><router-link :to="{ name: 'projects' }">Projets</router-link></li>
        <li>|</li>
        <li><router-link :to="{ name: 'archives' }">Archives</router-link></li>
        <li>|</li>
        <li><router-link to="/#contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

