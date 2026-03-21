<script setup lang="ts">
import { AlterLinks, ToolLinks } from '@/data/Links';

</script>

<template>
  <!-- VIEW DEGOOGLE -->
  <section class="intro">
    <div class="intro-content">
        <h3>🚧 PAGE EN TRAVAUX 🚧</h3>
        <div>
            <h1>C'est quoi "DeGoogle" ?</h1>
            <p>
                Selon une description faite par le courriel <a :href=AlterLinks.TUTA target="blank">Tuta</a>: 
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
        </div>

        <div>
            <h1>Qu'est-ce que le FOSS (Free and Open-Source Software) ?</h1>
            <p>
                Selon une description faite par le courriel <a :href=AlterLinks.TUTA target="blank">Tuta</a>: 
            </p>
            <p>            
                Le FOSS, acronyme de Free and Open-Source Software, 
                désigne les logiciels qui sont à la fois libres et à code source ouvert. 
                Ce type de logiciel permet aux utilisateurs d’accéder au code source, de le modifier, 
                de l’utiliser à toute fin et de le redistribuer librement, 
                sous certaines conditions définies par la licence libre. 
                Les logiciels FOSS offrent de nombreux avantages aussi bien pour les utilisateurs que pour les développeurs et les entreprises. En voici quelques-uns :

                <ul>
                    <li>
                        <b>Accès au code source</b> : La possibilité de consulter et de modifier le code est un atout majeur, 
                        surtout pour les développeurs qui souhaitent personnaliser les outils selon leurs besoins.
                    </li>
                    <br>
                    <li>
                        <b>Amélioration continue</b> : Grâce à un modèle de développement collaboratif, 
                        les logiciels open-source sont souvent plus sûrs et évoluent rapidement 
                        grâce aux contributions d’une vaste communauté.
                    </li>
                    <br>
                    <li>
                        <b>Indépendance vis-à-vis des éditeurs</b> : Utiliser un logiciel libre évite 
                        d’être dépendant des entreprises qui possèdent le code propriétaire, 
                        offrant ainsi plus de flexibilité pour les utilisateurs.
                    </li>
                    <br>
                    <li>
                        <b>Coût réduit</b> : Même si le libre ne signifie pas toujours gratuit, 
                        de nombreux logiciels FOSS sont accessibles gratuitement, 
                        réduisant ainsi les coûts pour les entreprises et les particuliers.
                    </li>
                </ul>
            </p>
        </div>

        <div>
            <h1>Mes alternatives</h1>
            <p>Voici une listes des differents alternatives que je recommande ou utilise moi-même:</p>

            <p>Référence: <a :href=AlterLinks.OPEN_ALTER target="blank">openalternative.co</a></p>

            <h2>~ Mobile ~</h2>
            <ul>
                <li><p><a :href=AlterLinks.FAIREPHONE_6 target="blank">Fairphone (Gen. 6) /e/OS</a> - Mon téléphone actuel</p></li>
            </ul>

            <h2>~ Navigateurs Web ~</h2>
            <ul>
                <li><p><a :href=AlterLinks.TOR target="blank">Tor Browser</a></p></li>
                <li><p><a :href=AlterLinks.BRAVE target="blank">Brave</a></p></li>
                <li><p><a :href=AlterLinks.LADYBIRD target="blank">Ladybird</a> (alpha en 2026)</p></li>
            </ul>

            <h2>~ Streaming / Vidéo ~</h2>
            <ul>
                <li><p>Jellyfin</p></li>
                <li><p><a :href=AlterLinks.FREETUBE target="blank">FreeTube</a></p></li>
                <li><p><a :href=AlterLinks.ODYSEE target="blank">Odysee</a> - Un Youtube décentralisée</p></li>
            </ul>

            <h2>~ Musique ~</h2>
            <ul>
                <li><p><a :href=AlterLinks.RHYTHMBOX target="blank">Rhythmbox</a> - Mon lecteur actuel</p></li>
                <li><p><a :href=AlterLinks.DOPAMINE target="blank">Dopamine</a></p></li>
                <li><p><a :href=AlterLinks.NAVIDROME target="blank">Navidrome</a></p></li>
            </ul>

            <h2>~ Communication ~</h2>
            <ul>
                <li><p><a :href=AlterLinks.STOAT target="blank">Stoat</a> (béta)</p></li>
                <li><p>Rocket.Chat</p></li>
                <li><p>Matrix Cinny</p></li>
                <li><p><a :href=AlterLinks.REDDIT target="blank">Reddit</a></p></li>
            </ul>

            <h2>~ Mails ~</h2>      
            <ul>
                <li><p><a :href=AlterLinks.PROTON_MAIL target="blank">Proton Mail</a></p></li>
                <li><p><a :href=AlterLinks.TUTA target="blank">Tuta</a></p></li>
            </ul>

            <h2>~ Informatique ~</h2>
            <ul>
                <li><p><a href="https://www.kernel.org/category/about.html" target="_blank">Systèmes d'exploitation (OS) GNU/Linux</a></p></li>
                <li><p>VS-Codium</p></li>
                <li>
                    <p>
                        <a :href=ToolLinks.CODEBERG target="_blank">Codeberg</a>
                        (<a href="https://linuxfr.org/news/codeberg-la-forge-en-devenir-pour-les-projets-libres" target="_blank">
                            Article sur le problème de GitHub
                        </a>)
                    </p>
                </li>
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
    </div>
  </section>
</template>
