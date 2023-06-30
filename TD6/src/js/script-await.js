async function addPokemon(nameOrIndex) {
    try {
        let req = await fetch(`${ROOT_URL}/pokemon/${nameOrIndex}/`);
        let data = await req.json();
        addPokemonCard(data);
    } catch (error) {
        console.log(error);
    }
}

async function addEvolutionChain(nameOrIndex) {
    try {
        let req = await fetch(`${ROOT_URL}/pokemon/${nameOrIndex}/`);
        let data = await req.json();

        req = await fetch(data.species.url);
        data = await req.json();

        req = await fetch(data.evolution_chain.url);
        data = await req.json();

        let promises = [];
        for (let url of getSpeciesUrls(data.chain)) {
            promises.push(await fetch(url)
                .then(data => data.json())
                .then(data => {
                    for (let pkm of data.varieties) {
                        if (pkm.is_default) fetch(pkm.pokemon.url)
                            .then(data => data.json())
                            .then(data => addPokemonCard(data))
                    }
                }));
        }
        await Promise.all(promises);
    } catch (e) {
        console.log(e);
    }
}
