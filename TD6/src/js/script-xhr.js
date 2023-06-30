function addPokemon(nameOrIndex) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${ROOT_URL}/pokemon/${nameOrIndex}`, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            addPokemonCard(data);
        } else {
            console.log(Error(xhr.statusText));
        }
    }
    xhr.send();
}

function addEvolutionChain(nameOrIndex) {
    const xhr1 = new XMLHttpRequest();  // création de la première requête
    xhr1.open('GET', `${ROOT_URL}/pokemon/${nameOrIndex}/`, true);
    xhr1.onload = function () {     // callback de la première requête
        if (xhr1.status === 200) {
            const data = JSON.parse(xhr1.responseText);
            const xhr2 = new XMLHttpRequest();  // création de la 2e requête
            xhr2.open("GET", data.species.url, true);
            xhr2.onload = function () {     // callback de la 2e requête
                if (xhr2.status === 200) {
                    const data = JSON.parse(xhr2.responseText);
                    const xhr3 = new XMLHttpRequest();  // création de la 3e requête
                    xhr3.open("GET", data.evolution_chain.url, true);
                    xhr3.onload = function () {     // callback de la troisième requête
                        if (xhr3.status === 200) {
                            const data = JSON.parse(xhr3.responseText);
                            for (let url of getSpeciesUrls(data.chain)) { //liste des URL des espèces qui apparaissent dans la chaîne d'évolution
                                const xhr4 = new XMLHttpRequest(); //création de la 4e requête
                                xhr4.open("GET", url, true);
                                xhr4.onload = function () {
                                    if (xhr4.status === 200) {
                                        const data = JSON.parse(xhr4.responseText);
                                        const xhr5 = new XMLHttpRequest(); //création de la 5e requête
                                        for (let pkm of data.varieties) {
                                            if (pkm.is_default) xhr5.open("GET", pkm.pokemon.url, true);
                                        }
                                        xhr5.onload = function () {
                                            if (xhr5.status === 200) {
                                                const data = JSON.parse(xhr5.responseText);
                                                addPokemonCard(data);
                                            } else {
                                                console.log(new Error(xhr5.statusText));
                                            }
                                        }
                                        xhr5.send();
                                    } else {
                                        console.log(new Error(xhr4.statusText));
                                    }
                                }
                                xhr4.send();
                            }
                        } else {
                            console.log(new Error(xhr3.statusText));
                        }
                    }
                    xhr3.send();
                } else {
                    console.log(new Error(xhr2.statusText));
                }
            }
            xhr2.send();
        } else {
            console.log(new Error(xhr1.statusText));
        }
    }

    xhr1.send();
}

