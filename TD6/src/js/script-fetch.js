function addPokemon(nameOrIndex) {
    fetch(`${ROOT_URL}/pokemon/${nameOrIndex}`)
        .then(response => response.json())
        .then(data => addPokemonCard(data))
        .catch(error => console.log(error));
}

function addEvolutionChain(nameOrIndex) {
    fetch(`${ROOT_URL}/pokemon/${nameOrIndex}`)
        .then(data => data.json())
        .then(data => fetch(data.species.url))
        .then(data => data.json())
        .then(data => fetch(data.evolution_chain.url))
        .then(data => data.json())
        .then(data => {
            for (let url of getSpeciesUrls(data.chain)) {
                fetch(url)
                    .then(data => data.json())
                    .then(data => {
                        for (let pkm of data.varieties) {
                            if (pkm.is_default) fetch(pkm.pokemon.url)
                                .then(data => data.json())
                                .then(data => addPokemonCard(data))
                                .catch(error => console.log(error));
                        }
                    })
            }
        });
}
