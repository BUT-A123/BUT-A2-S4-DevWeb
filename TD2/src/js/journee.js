class Journee {

    /**
     * 
     * @param {Match[]} matchs 
     */
    constructor(matchs) {
        this.matchs = matchs;
        this.estJouee = false;
    }

    afficher() {
        for(let i=0; i < this.matchs.length; i++){
            document.getElementById("match" + (i + 1)).innerHTML = this.matchs[i];
        }
    }

    jouer() {
        if(!this.estJouee) {
            this.estJouee = true;
            for (let i = 0; i < this.matchs.length; i++) {
                this.matchs[i].jouer();
            }
        }
    }

}
