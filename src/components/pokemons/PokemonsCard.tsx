import { Pokemon } from "@/shared/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoHeart } from "react-icons/io5";

interface PokemonsCardProps {
  pokemon: Pokemon;
}

export const PokemonsCardComponent = ({ pokemon }: PokemonsCardProps) => {
  const pokemonUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

  const {id, name} = pokemon;
  return (
    <section className="bg-white rounded overflow-hidden shadow-lg">
      <div className="text-center p-6 bg-gray-800 border-b">
        <Image
          src={`${pokemonUrl}${ id }.svg`}
          key={pokemon.name}
          alt="Pokemon Image"
          width={100}
          height={100}
          className="h-24 w-24 text-white rounded-full mx-auto"
          priority={false}
        />
        <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
          { name }
        </p>
        <div className="mt-5">
          <Link
            href={`pokemons/${ name }`}
            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
          >
            <span>Read More...</span>
          </Link>
        </div>
      </div>

      <div className="border-b">
        <Link
          href="/dashboard/pokemons"
          className="px-4 py-2 hover:bg-gray-100 flex"
        >
          <div className="text-red-600 flex items-center">
            <IoHeart/>
          </div>
          <div className="pl-3">
            <p className="text-sm font-medium text-gray-800 leading-none">
              It is not my Favorite
            </p>
            <p className="text-xs text-gray-500">Pokemons App V1</p>
          </div>
        </Link>
      </div>
    </section>
  );
};
