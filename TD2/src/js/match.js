class Match {

    /**
     * 
     * @param {Equipe} equipe1 
     * @param {Equipe} equipe2 
     */
    constructor(equipe1, equipe2) {
        this.equipe1 = equipe1;
        this.equipe2 = equipe2;
        this.nbButs1 = equipe1.nbButsPour;
        this.nbButs2 = equipe2.nbButsPour;
        this.estJoue = false;
    }

    jouer() {
        if(!this.estJoue) {
            this.estJoue = true;
            this.nbButs1 = Math.floor(Math.random() * 5 + 1);
            this.nbButs2 = Math.floor(Math.random() * 5);
            this.equipe1.miseAJour(this.nbButs1, this.nbButs2);
            this.equipe2.miseAJour(this.nbButs2, this.nbButs1);
        }
    }

    toString() {
        return [this.equipe1.nom, this.nbButs1, '-', this.nbButs2, this.equipe2.nom].join(' ');
    }

}