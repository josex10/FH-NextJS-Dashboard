import Image from "next/image";
import { Pokemon, PokemonsResponse } from "@/shared/interfaces";
import {PokemonsGridComponent} from "@/components/pokemons/PokemonsGrid";
import { getPokemons } from "@/api/pokemons/pokemons.api";

const PokemonsPage = async () => {
  
  const pokemons = await getPokemons(150);
  return (
    <div>
      <section className="flex gap-10 flex-wrap">
        {pokemons.map((pokemon) => (
          <PokemonsGridComponent key={pokemon.id} pokemon={pokemon}/>
        ))}
      </section>
    </div>
  );
};

export default PokemonsPage;
