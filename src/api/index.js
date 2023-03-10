import axios from 'axios'

export const getPokemon = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then( response => {
            console.log(response.data.results);
            return response.data.results
        })
        .catch( error => console.log(error)) 
}

export const getPokemonDetails = (pokemon) =>{
    return axios.get(pokemon.url)
        .then( res => res.data)
        .catch( error => console.log(error))
}