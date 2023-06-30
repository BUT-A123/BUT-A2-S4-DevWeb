class Championnat {
    
    /**
     * 
     * @param {Equipe[]} tabEquipes 
     */
    constructor(tabEquipes) {
        this.tabEquipes = tabEquipes;
        this.numJournee = 1;
        const e = tabEquipes; // Pour raccourcir le nom de variable dans la suite
        this.journees = [
            new Journee([new Match(e[0], e[1]), new Match(e[2], e[3]), new Match(e[4], e[5]), new Match(e[6], e[7])]), // journée 00
            new Journee([new Match(e[0], e[2]), new Match(e[1], e[3]), new Match(e[4], e[6]), new Match(e[5], e[7])]), // journée 01
            new Journee([new Match(e[3], e[0]), new Match(e[2], e[1]), new Match(e[7], e[4]), new Match(e[6], e[5])]), // journée 02
            new Journee([new Match(e[0], e[4]), new Match(e[1], e[5]), new Match(e[2], e[6]), new Match(e[3], e[7])]), // journée 03
            new Journee([new Match(e[7], e[0]), new Match(e[1], e[6]), new Match(e[5], e[2]), new Match(e[3], e[4])]), // journée 04
            new Journee([new Match(e[5], e[0]), new Match(e[4], e[1]), new Match(e[7], e[2]), new Match(e[6], e[3])]), // journée 05
            new Journee([new Match(e[0], e[6]), new Match(e[1], e[7]), new Match(e[2], e[4]), new Match(e[3], e[5])]), // journée 06
            new Journee([new Match(e[2], e[0]), new Match(e[3], e[1]), new Match(e[6], e[4]), new Match(e[7], e[5])]), // journée 07
            new Journee([new Match(e[0], e[3]), new Match(e[1], e[2]), new Match(e[4], e[7]), new Match(e[5], e[6])]), // journée 09
            new Journee([new Match(e[4], e[0]), new Match(e[5], e[1]), new Match(e[6], e[2]), new Match(e[7], e[3])]), // journée 00
            new Journee([new Match(e[1], e[0]), new Match(e[3], e[2]), new Match(e[5], e[4]), new Match(e[7], e[6])]), // journée 00
            new Journee([new Match(e[0], e[7]), new Match(e[6], e[1]), new Match(e[2], e[5]), new Match(e[4], e[3])]), // journée 01
            new Journee([new Match(e[0], e[5]), new Match(e[1], e[4]), new Match(e[2], e[7]), new Match(e[3], e[6])]), // journée 02
            new Journee([new Match(e[6], e[0]), new Match(e[7], e[1]), new Match(e[4], e[2]), new Match(e[5], e[3])]), // journée 03
        ]
    }

    jouerJournee() {
        this.journees[this.numJournee-1].jouer();
    }

    afficherJournee() {
        this.journees[this.numJournee-1].afficher();
    }

    afficherClassement() {
        let tabTR = document.querySelectorAll("#bloc-classement tbody tr");
        for(let i=0; i < tabTR.length; i++){
            tabTR[i].innerHTML = this.tabEquipes[i];
        }
    }

    classerEquipes() {
        this.tabEquipes.sort((a, b) => {
            return Equipe.compare(a, b);
        });
        this.tabEquipes.reverse();
    }

}
