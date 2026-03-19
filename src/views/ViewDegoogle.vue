<script setup lang="ts">
import { AlterLinks } from '@/data/Links';

</script>

<template>
  <!-- VIEW DEGOOGLE -->
  <section class="intro">
    <div class="intro-content">
        <h1>C'est quoi "DeGoogle" ?</h1>
        <p>
            Selon une description faite par le courriel <a href="https://tuta.com/" target="blank">Tuta</a>: 
        </p>
        <p>            
            "À mesure que les gens prennent conscience de la manière dont Google
            réalise d’énormes profits grâce à des tactiques qui portent atteinte à la vie privée, 
            un nouveau mouvement a vu le jour : le “de-Googling” (dégooglisation). 
        </p>
        <p>
            Mais que signifie “dégoogliser” ? 
        </p>
        <p>
            Le <a href="https://degooglisons-internet.org/" target="blank">“dégooglisme”</a> consiste à remplacer les applications et les services de Google 
            par de meilleures solutions, généralement plus confidentielles et plus sûres. 
        </p>
        <p>
            Dans le monde entier, les gens choisissent de quitter Google en raison des préoccupations 
            croissantes en matière de protection de la vie privée, des risques associés au géant de la technologie 
            et de l’enfermement dans son écosystème."
        </p>
        <p>
            Plus largement, ce mouvement peut également englober tout effort de remplacer les GAFAM.
        </p>
        <p>            
            Je m'efforce à trouver et comparer différentes alternatives libres et open source (FOSS),
            qui pourrait remplacer tous nos outils du quotidien et se libérer des chaines de la Silicon Valley.
        </p>    

        <h1>Mes alternatives</h1>

        <p>
            Voici une listes des differents alternatives que je recommande ou utilise moi-même:
        </p>

        <p>Référence: <a :href=AlterLinks.OPEN_ALTER target="blank">openalternative.co</a></p>

        <h2>~ Mobile ~</h2>
        <ul>
            <li><p><a :href=AlterLinks.FAIREPHONE_6 target="blank">Fairphone (Gen. 6) /e/OS</a> - Mon téléphone actuel</p></li>
        </ul>

        <h2>~ Navigateurs Web ~</h2>
        <ul>
            <li><p><a href="https://www.torproject.org/" target="blank">Tor Browser</a></p></li>
            <li><p><a href="https://brave.com/fr/" target="blank">Brave</a></p></li>
            <li><p><a href="https://ladybird.org/" target="blank">Ladybird</a> (alpha en 2026)</p></li>
        </ul>

        <h2>~ Streaming / Vidéo ~</h2>
        <ul>
            <li><p>Jellyfin</p></li>
            <li><p><a href="https://freetubeapp.io/" target="blank">FreeTube</a></p></li>
            <li><p><a href="https://odysee.com/" target="blank">Odysee</a> - Un Youtube décentralisée</p></li>
        </ul>

        <h2>~ Musique ~</h2>
        <ul>
            <li><p><a href="https://doc.ubuntu-fr.org/rhythmbox" target="blank">Rhythmbox</a> - Mon lecteur actuel</p></li>
            <li><p><a href="https://digimezzo.github.io/site/" target="blank">Dopamine</a></p></li>
            <li><p><a href="https://www.navidrome.org/" target="blank">Navidrome</a></p></li>
        </ul>

        <h2>~ Communication ~</h2>
        <ul>
            <li><p><a href="https://stoat.chat/" target="blank">Stoat</a> (béta)</p></li>
            <li><p>Rocket.Chat</p></li>
            <li><p>Matrix Cinny</p></li>
            <li><p><a href="https://www.reddit.com/" target="blank">Reddit</a></p></li>
        </ul>

        <h2>~ Mails ~</h2>      
        <ul>
            <li><p>Proton Mail</p></li>
            <li><p><a href="https://tuta.com/" target="blank">Tuta</a></p></li>
        </ul>

        <h2>~ Informatique ~</h2>
        <ul>
            <li><p>Systèmes d'exploitation Linux</p></li>
            <li><p>VS-Codium</p></li>
            <li><p>Codeberg</p></li>
            <li><p><a href="https://forgejo.org/" target="blank">Forgejo</a></p></li>
            <li><p>Bruno API Client</p></li>
        </ul>

        <h2>~ Maps ~</h2>
        <ul>
            <li><p>Organic Maps</p></li>
        </ul>

        <h2>~ IA ~</h2>
        <ul>
            <li><p><a href="https://hermes4.nousresearch.com/" target="blank">Hermes 4, by Nous Research</a></p></li>
            <li><p>Open WebUI</p></li>
            <li><p>LibreChat</p></li>
        </ul>

        <h2>~ Jeux Vidéos ~</h2>       
        <ul>
            <li><p>Lutris</p></li>
            <li><p>GOG</p></li>
        </ul>
    </div>
  </section>
</template>
