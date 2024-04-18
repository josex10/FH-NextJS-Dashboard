import {PokemonsGridComponent} from "@/components/pokemons/PokemonsGrid";
import { getPokemons } from "@/api/pokemons/pokemons.api";


export const metadata = {
 title: 'Pokemons List',
 description: 'Pokemons List',
};

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
