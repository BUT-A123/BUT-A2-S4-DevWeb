let xhr = new XMLHttpRequest();
let div_verbes = document.getElementById("liste_verbes");
let div_input = document.getElementById("input");

// la ligne suivante est à décommenter après écriture de creer_interface
document.addEventListener("DOMContentLoaded", creer_interface);

function creer_interface() {
  //input sequence
  const inputSequence = document.createElement("input");
  inputSequence.type = "text";
  inputSequence.placeholder = "entrez une séquence";

  div_input.appendChild(inputSequence);
  inputSequence.addEventListener('input', () => {
    charger_verbes(inputSequence.value, 'seq');
  });

  //input lettres
  const lettres = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "z", "œ"];
  for(let i=0; i<lettres.length;i++) {
    const inputLettre = document.createElement("input");
    inputLettre.type = "button";
    inputLettre.className = "letter";
    inputLettre.value = lettres[i];

    div_input.appendChild(inputLettre);
    inputLettre.addEventListener('click', () => {
      charger_verbes(inputLettre.value, 'init');
    });
  }

  //input effacer la liste
  const inputEffacerListe = document.createElement("input");
  inputEffacerListe.type = "button";
  inputEffacerListe.className = "erase";
  inputEffacerListe.value = "effacer la liste";

  div_input.appendChild(inputEffacerListe);
  inputEffacerListe.addEventListener('click', () => {
    div_verbes.innerHTML = "";
    inputSequence.value = "";
  });
}

function callback_basique() {
  let xhrJSON = JSON.parse(xhr.responseText);
  console.log(xhrJSON);
}

function callback() {
    let xhrJSON = JSON.parse(xhr.responseText);

    div_verbes.innerHTML = "";

    for(let e in xhrJSON) {
      const p = document.createElement("p");
      p.innerHTML = xhrJSON[e].libelle;

      div_verbes.appendChild(p);
    }
}

/**
 * 
 * @param {String} lettre Chaîne recherchée dans les verbes
 * @param {String} type Type de recherche ('seq' ou 'init')
 */
function charger_verbes(lettre,type) {
  let url = 'https://td3js/ex5/php/recherche.php?';
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.addEventListener("load", callback);
  xhr.send(`lettre=${encodeURIComponent(lettre)}&type=${type}`);
}
