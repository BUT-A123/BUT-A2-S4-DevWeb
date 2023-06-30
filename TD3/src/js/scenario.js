/** @type {Jeu} jeu */
let jeu;  // variable globale représentant le jeu actuel
let cooldown = false;

document.addEventListener("keydown", function (event) {

    if(!jeu.estPerdu() && !jeu.estGagne()) {
        switch (event.key) {
            case 'ArrowLeft':
                // déplacement vers la gauche
                jeu.personnage.deplacer(0, -1);
                break;
            case 'ArrowUp':
                // déplacement vers le haut
                jeu.personnage.deplacer(-1, 0);
                break;
            case 'ArrowRight':
                // déplacement vers la droite
                jeu.personnage.deplacer(0, 1);
                break;
            case 'ArrowDown':
                // déplacement vers le bas
                jeu.personnage.deplacer(1, 0);
                break;
            case 'a':
                if(!cooldown) {
                    //affichage temporaire des bombes
                    if (jeu.personnage.score > 50) {
                        cooldown = true;

                        jeu.afficherMines();
                        setTimeout(() => {
                            jeu.cacherMines()
                            cooldown = false;
                        }, 1000);
                        jeu.personnage.score = jeu.personnage.score - 50;
                    } else {
                        alert('Vous n\'avez pas assez de score.');
                    }
                } else {
                    alert('La capacité est en cooldown.')
                }
                break;
            default:
        }
        miseAJour();
    }
});


/**
 * Met à jour la partie et l'affichage pour le joueur en fonction de la position du joueur
 * - indique si la partie est gagnée ou perdue
 * - indique le nombre de mines à proximité du joueur
 * - affiche le score du joueur
 * - met à jour l'image représentant le joueur
 */
function miseAJour() {
    let message = document.getElementById('message');
    let score = document.getElementById('score');
    if(jeu.estGagne()) {
        score.textContent = jeu.personnage.score;
        message.textContent = 'Gagné';
        jeu.afficherMines();
    } else if(jeu.estPerdu()) {
        score.textContent = jeu.personnage.score;
        message.textContent = 'Perdu';
        jeu.afficherMines();
    } else {
        score.textContent = jeu.personnage.score;
        message.textContent = jeu.nbMinesVoisines().toString();
        jeu.personnage.majSprite(jeu.nbMinesVoisines());
    }
}


/**
 * Démarre une nouvelle partie
 */
function nouvellePartie() {
    document.getElementById('champ').innerHTML = '';
    jeu = new Jeu(Math.random());
    miseAJour();
}


window.addEventListener("load", function () {
    nouvellePartie();
});

document.getElementById('nouvelle-partie').addEventListener("click" , function () {
    nouvellePartie();
})