import { Pokemon, PokemonFullData, PokemonsResponse } from "@/shared/interfaces";
import { notFound } from "next/navigation";

const pokemonsApiUrl = `https://pokeapi.co/api/v2/pokemon`;

export const getPokemon = async(param: string): Promise<PokemonFullData> => {
    try {
        const pokemon: PokemonFullData = await fetch(
          `${pokemonsApiUrl}/${param}`,
          { cache: "force-cache" }
        ).then((data) => data.json());
        return pokemon;
      } catch (error) {
        notFound();
    }
}

export const getPokemons = async (limit = 20, offset = 0): Promise<Pokemon[]> => {

  try {
    const data: PokemonsResponse = await fetch(
      `${pokemonsApiUrl}?limit=${limit}&offset=${offset}`
    ).then((data) => data.json());
  
    const { results } = data;
  
    const pokemons: Pokemon[] = results.map((pokemon) => {
      const id = Number(pokemon.url.split("/").at(-2));
      return { id, name: pokemon.name };
    });
    return pokemons;
  } catch (error) {
    notFound();
  }
  
};