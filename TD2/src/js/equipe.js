class Equipe {

    constructor(nom) {
        this.nom = nom;
        this.classement = 1;
        this.nbMatchsGagnes = 0;
        this.nbMatchsNuls = 0
        this.nbMatchsPerdus = 0;
        this.nbButsPour = 0;
        this.nbButsContre = 0;
        this.nbAlea = Math.random();
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
        if(eq1.nbPoints() === eq2.nbPoints()){
            if(eq1.differenceButs() === eq2.differenceButs()){
                if(eq1.nbButsPour === eq2.nbButsPour){
                    if(eq1.nbAlea > eq2.nbAlea) return 1;
                    else if(eq1.nbAlea < eq2.nbAlea) return -1;
                    else return 0;
                }
                else if(eq1.nbButsPour > eq2.nbButsPour) return 1;
                else return -1;
            }
            else if(eq1.differenceButs() > eq2.differenceButs()) return 1;
            else return -1;
        }
        else if(eq1.nbPoints() > eq2.nbPoints()) return 1;
        else return -1;
    }

    toString() {
        return "<td>" + this.classement + "</td>" +
               "<td>" + this.nom + "</td>" +
               "<td>" + this.nbPoints() + "</td>" +
               "<td>" + this.nbMatchsGagnes + "</td>" +
               "<td>" + this.nbMatchsNuls + "</td>" +
               "<td>" + this.nbMatchsPerdus + "</td>" +
               "<td>" + this.nbButsPour + "</td>" +
               "<td>" + this.nbButsContre + "</td>" +
               "<td>" + this.differenceButs() + "</td>";
    }

    miseAJour(nbButsMarques, nbButsEncaisses) {
        this.nbButsPour += nbButsMarques;
        this.nbButsContre += nbButsEncaisses;
        if(nbButsMarques > nbButsEncaisses) this.nbMatchsGagnes += 1;
        else if(nbButsMarques === nbButsEncaisses) this.nbMatchsNuls += 1;
        else this.nbMatchsPerdus += 1;
    }

    nbPoints(){ return this.nbMatchsGagnes*3 + this.nbMatchsNuls;}

    differenceButs(){ return this.nbButsPour - this.nbButsContre; }

}
