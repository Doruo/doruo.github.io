<script lang="ts" setup>
import PortfolioIntro from '@/components/portfolio/PortfolioIntro.vue'
import ProjectsCard from '@/components/portfolio/ProjectsCard.vue'
import PortfolioBio from '@/components/portfolio/PortfolioBio.vue'
import PortfolioFuture from '@/components/portfolio/PortfolioFuture.vue'
import PortfolioContact from '@/components/portfolio/PortfolioContact.vue'
import BaseFooter from '@/components/BaseFooter.vue'
</script>

<template>
  <PortfolioIntro />

  <ProjectsCard />

  <PortfolioBio />

  <PortfolioFuture />

  <PortfolioContact />

  <BaseFooter />
</template>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
}

/* TEXTES */

* a {
  color: rgb(39, 183, 199);
}

* a:hover {
  color: rgb(6, 136, 175);
  text-decoration: underline;
}

p:not(base-footer .conteneur p):not(.entete p) {
  color: #666;
  margin-bottom: 1rem;
}

h2 {
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

/* SECTIONS */
section {
  text-align: center;
  margin: 0 auto;
}

section:nth-child(even) {
  background-color: #f9f9f9;
}

section:nth-child(odd) {
  background-color: white;
}

.entete {
  max-width: 20%;
  padding: 0 2rem;
}

.entete p {
  color: white;
}

.contenu-intro,
.conteneur,
.contenu-projets,
.projet-contenu-images,
.contenu-competences {
  margin: 0 auto;
  padding: 0 2rem;
}

.conteneur,
.contenu-projets,
.projet-contenu-images,
.contenu-competences {
  max-width: 65%;
}

/* LIENS */

.social-links a,
.competences .conteneur p a,
.entete h1 a,
.projet-liens a {
  text-decoration: none;
}

/* LIENS RESEAUX*/

.social-links {
  margin-top: 2rem;
}

.social-links a {
  margin: 0 1rem;
}

/* IMAGES */

.projet-card a img {
  width: 90px;
}

/* MEDIA QUERIES */

@media (max-width: 1820px) {
  #accueil,
  .projets-grid {
    flex-direction: column;
    grid-template-columns: 1fr;
  }

  .portrait {
    display: none;
    width: 5%;
    max-height: 2%;
  }

  .intro {
    height: 100%;
  }

  .conteneur {
    flex-direction: column !important;
    padding: 20px;
  }

  .contenu-intro {
    max-width: 98%;
    max-height: 100%;
  }

  .contenu-intro p {
    font-size: 1.2rem;
  }

  .contenu-intro h1,
  .contenu-intro h2 {
    font-size: 2.2rem;
  }

  header {
    display: flex;
  }

  .entete {
    max-width: 100%;
  }

  .entete h1 {
    font-size: 3rem;
  }

  .entete p {
    font-size: 2.2rem;
  }

  .biographie .conteneur h2,
  .futur .conteneur h2,
  .projet-card h3,
  .contenu-projets h2 {
    font-size: 2.2rem;
  }

  .biographie .conteneur p,
  .futur .conteneur p,
  base-footer .conteneur p,
  .projet-card p,
  .projet-card a {
    font-size: 1.6rem;
  }

  .contact .conteneur h2 {
    font-size: 2.6rem;
  }

  .contact .conteneur p {
    font-size: 1.6rem;
  }

  .social-links a {
    font-size: 1.6rem;
  }
}
</style>
