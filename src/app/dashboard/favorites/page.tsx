import { PokemonsGridComponent } from '@/components/pokemons/PokemonsGrid';
import { Pokemon } from '@/shared/interfaces';
import React from 'react'


export const metadata = {
 title: 'Favorite Pokemons',
 description: 'Favorite Pokemons',
};

const FavoritesPage = () => {

  const pokemons: Pokemon[] = [];
  return (
    <div>

      <h1>Favorites Pokemons</h1>
      <section className="flex gap-10 flex-wrap">
        {pokemons.map((pokemon: Pokemon) => (
          <PokemonsGridComponent key={pokemon.id} pokemon={pokemon}/>
        ))}
      </section>
    </div>
  );
}

export default FavoritesPage