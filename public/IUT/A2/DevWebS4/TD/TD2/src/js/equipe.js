class Equipe {


    constructor(nom) {
        // à compléter
    }

    /**
     * Compare deux équipes passées en argument selon les critères du classement.
     * Les équipes sont comparées selon leur nombre de points, puis en cas d'égalité selon leur différence de buts, puis en cas
     * d'égalité selon leur nombre de buts marqués. En cas d'égalité complète, elles sont départagées en fonction
     * de la valeur aléatoire générée à la création de chaque équipe.
     *
     * @param {Equipe} eq1 une équipe du championnat
     * @param {Equipe} eq2 une équipe du championnat
     * @return {Number} une valeur strictement négative si eq2 est devant eq1, une valeur strictement positive si
     * eq1 est devant eq2, 0 si eq1 === eq2.
     */
    static compare(eq1, eq2) {
        // à compléter
    }

    toString() {
        // à compléter
    }

    miseAJour(nbButsMarques, nbButsEncaisses) {
        // à compléter
    }

}
