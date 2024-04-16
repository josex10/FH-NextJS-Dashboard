import { Pokemon } from "@/shared/interfaces";
import { PokemonsCardComponent } from "./PokemonsCard";

interface PokemonsGridProps {
  pokemon: Pokemon;
}

export const PokemonsGridComponent = ({ pokemon }: PokemonsGridProps) => {
  
  return (
    <section>
      <div className="mx-auto right-0 mt-2 w-60">
        <PokemonsCardComponent pokemon={pokemon}/>
      </div>
    </section>
  );
};
