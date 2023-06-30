function adapterGalerie(nom) {
    for (let i = 1; i <= 6; i++) {
        const image = document.getElementById('fleur' + i);
        image.src = 'img/fleurs/' + nom + '/' + nom + i + '.jpg';
        // ou avec la syntaxe `` qui permet le remplacement de variables
        // image.src = `img/fleurs/${nom}/${nom}${i}.jpg`
        image.title = nom;
        image.alt = nom + i;

        adapterTitre(nom);
    }
}

function adapterTitre(nom) {
    const titre = document.getElementById('titre');
    titre.innerHTML = tabTitres[nom];
}

/**
 * @param {HTMLElement} img
 */
function cacher(img) {
    img.classList.remove('visible');
    img.classList.add('cachee');
}

/**
 * @param {HTMLElement} img
 */
function afficher(img) {
    img.classList.remove('cachee');
    img.classList.add('visible');
}

function suivant(n) {
    if (n === 6) return 1;
    return n + 1;
}

function changeBanniere() {
    const idBanniereActuelle = document.getElementsByClassName('visible')[0].id;
    const idBanniereSuivante = suivant(Number(idBanniereActuelle));
    cacher(document.getElementById(idBanniereActuelle));
    afficher(document.getElementById(idBanniereSuivante));
}

function stopperDefilement() {
    clearInterval(chb);
}

function lancerDefilement() {
    chb = setInterval(changeBanniere, 6000);
}

function construitInfobulle() {
    const info = document.createElement('div'); //Créé un élément de type div
    info.innerHTML = "<p>c'est moi la bulle !</p>"; //Change le contenu de la div
    info.id = "bulle"; //Change l'id de la div
    info.style.position = "fixed"; //Change la position de la div
    info.style.top = "100px"; //Change le decalage au top de la div
    info.style.right = "150px"; //Change le decalage a droite de la div
    info.style.backgroundColor = "darkblue"; //Change la couleur de fond de la div
    info.style.color = "white"; //Change la couleur de texte de la div
    document.body.appendChild(info); //Ajoute la div aux éléments de body
}

function detruitInfobulle() {
    const info = document.getElementById('bulle'); //Récupère l'élement d'id bulle
    document.body.removeChild(info); //Retire cet éléments des éléments de body
}

function changerParametres() {
    const idActuel = Number(document.body.dataset.id);
    let n;

    do {
        n = Math.floor(Math.random() * 4) + 1;
    }
    while (idActuel === n);
    document.body.style.backgroundImage = "url('img/background/bg-" + n + ".jpg')";
    document.body.dataset.id = n;
}

let chb = setInterval(changeBanniere, 6000);
const tabTitres = {
    'rose': 'Galerie de roses',
    'hortensia': 'Galerie d\’hortensias',
    'fruitier': 'Galerie de fruitiers',
    'autre': 'Galerie de fleurs diverses'
};
