class Jeu {
    constructor(probaMine) {
        this.tresor = new Tresor(Math.floor(Math.random() * 20));
        this.personnage = new Personnage(Math.floor(Math.random() * 20));
        this.carte = [];

        for(let i=0; i<20; i++){
            let caseIJ = [];
            for(let j=0; j<20; j++){
                caseIJ.push(Math.random() < probaMine);
            }
            this.carte.push(caseIJ);
        }

        this.carte[this.personnage.ligne][this.personnage.colonne] = false;
        this.carte[this.tresor.ligne][this.tresor.colonne] = false;

        this.personnage.afficher();
        this.tresor.afficher();
    }

    /**
     * Affiche toutes les mines
     */
    afficherMines() {
        for(let i=0; i<20; i++){
            for(let j=0; j<20; j++){
                if(this.carte[i][j]){
                    new Mine(i, j).afficher();
                }
            }
        }
    }

    /**
     * Cache toutes les mines
     */
    cacherMines() {
        document.getElementById("champ").innerHTML = '';

        this.personnage.afficher();
        this.tresor.afficher();
    }

    /**
     * Renvoie le nombre de mines voisines de la position courante du joueur
     * @returns {number} nombre de mines adjacentes à la position du joueur
     */
    nbMinesVoisines() {
        let i = 0;
        const colonnePers = this.personnage.colonne;
        const lignePers = this.personnage.ligne;
        //personnage en 1.1

        if(lignePers > 0 && colonnePers > 0 && this.carte[lignePers-1][colonnePers-1]) i++; //0.0
        if(lignePers > 0 && this.carte[lignePers-1][colonnePers]) i++; //0.1
        if(lignePers > 0 && colonnePers < 19 && this.carte[lignePers-1][colonnePers+1]) i++; //0.2
        if(colonnePers > 0 && this.carte[lignePers][colonnePers-1]) i++; //1.0
        if(colonnePers < 19 && this.carte[lignePers][colonnePers+1]) i++; //1.2
        if(lignePers < 19 && colonnePers > 0 && this.carte[lignePers+1][colonnePers-1]) i++; //2.0
        if(lignePers < 19 && this.carte[lignePers+1][colonnePers]) i++; //2.1
        if(lignePers < 19 && colonnePers < 19 && this.carte[lignePers+1][colonnePers+1]) i++; //2.2

        return i;
    }

    /**
     * Indique si le joueur a gagné la partie
     * @returns {boolean} true si le joueur a gagné (position sur le trésor)
     */
    estGagne() {
        return this.personnage.ligne === this.tresor.ligne && this.personnage.colonne === this.tresor.colonne && this.personnage.score > 0;
    }

    /**
     * Indique si le joueur a perdu la partie
     * @returns {boolean} true si le joueur est positionné sur une mine ou son score est <= 0
     */
    estPerdu() {
        return this.personnage.score <= 0 || this.carte[this.personnage.ligne][this.personnage.colonne];
    }
}
