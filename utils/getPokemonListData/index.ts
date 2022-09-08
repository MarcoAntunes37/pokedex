import axios from "axios";
import getPokemonById from "../getPokemonById";

export default async function getPokemonListData(limit: number, offset: number){    
    const req = await axios(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
    
    var pokemonsUrl: any = []

    req.data.results.map((pokemon: any) => {
        pokemonsUrl.push(pokemon.url)
    })

    const pokemons = await axios.all(pokemonsUrl.map((endpoint: any) => getPokemonById(endpoint)))
    
    const result = {pokemons}

    return result
}