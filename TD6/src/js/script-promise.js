function getData(url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                // la requête est terminée avec succès
                const data = JSON.parse(xhr.responseText);
                resolve(data);  // la promesse est résolue
            } else {
                // erreur pendant la requête
                reject(`${xhr.status}: ${xhr.responseText}`);   // promesse rejetée
            }
        }
        xhr.send();
    });
}


function addPokemon(nameOrIndex) {
    getData(`${ROOT_URL}/pokemon/${nameOrIndex}/`)
        .then(data => addPokemonCard(data))
        .catch(error => console.log(error));
}

function addEvolutionChain(nameOrIndex) {
    getData(`${ROOT_URL}/pokemon/${nameOrIndex}/`)
        .then(data => getData(data.species.url))
        .then(data => getData(data.evolution_chain.url))
        .then(data => {
            for (let url of getSpeciesUrls(data.chain)) {
                getData(url)
                    .then(data => {
                        for (let pkm of data.varieties) {
                            if (pkm.is_default) getData(pkm.pokemon.url)
                                .then(data => addPokemonCard(data))
                                .catch(error => console.log(error));
                        }
                    })
            }
        });
}

