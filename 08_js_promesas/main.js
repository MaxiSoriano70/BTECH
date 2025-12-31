fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data));

let URL = "https://pokeapi.co/api/v2/pokemon?limit=3";

const containerPokemnon = document.getElementById('pokemon-container');

fetch(URL)
    .then(response => response.json())
    .then(data => {
        const pokemons = data.results;
        pokemons.forEach((pokemon) =>{
            fetch(pokemon.url)
                .then(response => response.json())
                .then(pokemonData => {
                    const pokemonElement = document.createElement('div');
                    pokemonElement.innerHTML = `
                        <h2>${pokemonData.name}</h2>
                        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
                    `;
                    containerPokemnon.appendChild(pokemonElement);
                });
        })
    })
    .catch(error => console.log('Error al obtener los datos: ', error));