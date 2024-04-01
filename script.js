//Fetch code from: https://www.freecodecamp.org/news/make-api-calls-in-javascript/
//https://github.com/pweth/status.pizza - For pizza API
function pokeData(pokemon) {
    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`

        fetch(pokemonURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById(`${pokemon}Pic`).src = data.sprites.front_default;
            })
            .catch(error => {
                console.error('Error:', error);
            });
}

const pokeList = ['squirtle', 'charmander', 'bulbasaur'];

for (let poke of pokeList) {
    pokeData(poke);
}
