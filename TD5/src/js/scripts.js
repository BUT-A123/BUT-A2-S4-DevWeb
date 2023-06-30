let divAutocompletion = document.getElementById("autocompletion");
let inputVille = document.getElementById("ville");
let loadingImg = document.getElementById("loading");
let spanMeteo = document.getElementById("meteo");

let cooldown;
let requeteVille;
let requeteAPI;
let i = 0;

inputVille.addEventListener('input', () => {
    if (inputVille.value.length >= 2) {
        clearTimeout(cooldown);
        cooldown = setTimeout(maRequeteAJAX, 200, inputVille.value.charAt(0).toUpperCase() + inputVille.value.slice(1));
    }
});


divAutocompletion.addEventListener('click', () => maRequeteAPI(event.target.innerHTML), false)
inputVille.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        e.preventDefault();
        maRequeteAPI(document.querySelector('.selected').innerHTML);
    } else if(e.key === 'ArrowUp'){
        if(i>0) {
            e.preventDefault();
            if(divAutocompletion.children[i] && divAutocompletion.children[i].classList.contains('selected')) divAutocompletion.children[i].removeAttribute('class');
            i--;
            divAutocompletion.children[i].className = 'selected';
        }
    } else if(e.key === 'ArrowDown'){
        if(i<divAutocompletion.childElementCount){
        e.preventDefault();

        divAutocompletion.children[i].className = 'selected';
        if(divAutocompletion.children[i-1] && divAutocompletion.children[i-1].classList.contains('selected')) divAutocompletion.children[i-1].removeAttribute('class');
        i++;
        }
    }
}, false)


if (divAutocompletion.childElementCount === 0) divAutocompletion.style.borderWidth = 0; i=0;

function afficheVilles(tableau) {
    videVille();

    divAutocompletion.style.borderWidth = "thin";
    for (let e in tableau) {
        let ville = document.createElement("p");
        ville.innerHTML = tableau[e];
        divAutocompletion.appendChild(ville);
    }
}

function afficherMeteo(villeMeteo){
    inputVille.value = villeMeteo.name;
    if(villeMeteo.cod === 200){
        spanMeteo.innerHTML = villeMeteo.weather[0].description;
        let imgMeteo = document.createElement("img");
        imgMeteo.src = `https://openweathermap.org/img/wn/${villeMeteo.weather[0].icon}@2x.png`
        imgMeteo.alt = 'iconMeteo'
        spanMeteo.appendChild(imgMeteo);
    }
    else spanMeteo.innerHTML = "Les données météo n'existent pas.";

    videVille();
}

function videVille() {
    divAutocompletion.innerHTML = ""; //voir plus tard comment faire avec removeChild
    divAutocompletion.style.borderWidth = 0;
}

function callback_1(req) {
    console.log(req);
}

function callback_2(req) {
    console.log(JSON.parse(req.responseText));
}

function callback_3(req) {
    let tab = JSON.parse(req.responseText).map(elem => elem.name);
    /*let tab = [];
    let reqRes = JSON.parse(req.responseText);
    for (let e in reqRes) {
        tab[e] = reqRes[e].name;
    }*/
    console.log(tab);
}

function callback_4(req) {
    let tab = JSON.parse(req.responseText).map(elem => elem.name);
    /* let tab = [];
    let reqRes = JSON.parse(req.responseText);
    for (let e in reqRes) {
        tab[e] = reqRes[e].name;
    }*/
    afficheVilles(tab);
}

function callback_API(req){
    let villeMeteo = JSON.parse(req.responseText);

    afficherMeteo(villeMeteo);
}

function requeteAJAX(stringVille, callback, startLoadingAction, endLoadingAction) {
    startLoadingAction();
    let urlVille = "php/requeteVille.php?ville=" + encodeURIComponent(stringVille);

    if (requeteVille && requeteVille.readyState !== 4) {
        requeteVille.abort();
    }
    requeteVille = new XMLHttpRequest();

    requeteVille.open("GET", urlVille, true);

    requeteVille.addEventListener("load", function () {
        callback(requeteVille);
        endLoadingAction();
    });

    requeteVille.send(null);
}

function requeteAPIFunc(stringVille, callback){
    let urlAPI = `https://api.openweathermap.org/data/2.5/weather?appid=ee0eeee8e8b2c07429e0204ddabc8eca&lang=fr&q=${encodeURIComponent(stringVille)}`

    if(requeteAPI && requeteAPI.readyState !== 4 ){
        requeteAPI.abort();
    }
    requeteAPI = new XMLHttpRequest();

    requeteAPI.open("GET", urlAPI, true);

    requeteAPI.addEventListener("load", function () {
        callback(requeteAPI);
    })

    requeteAPI.send(null);
}

function maRequeteAJAX(stringVille) {
    requeteAJAX(
        stringVille,
        callback_4,
        () => {
            loadingImg.style.visibility = "visible";
        },
        () => {
            loadingImg.style.visibility = "hidden";
        });
}

function maRequeteAPI(stringVille){
    requeteAPIFunc(
        stringVille,
        callback_API
    )
}




