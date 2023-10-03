import React, { useState } from 'react';

interface PokedexProps {
    
}

const pokemonsArray: string[] = ["Pikachu", "Ditto", "Metapod", "Magikarp"]

export const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons, setPokemon] = useState<string[]>(pokemonsArray);
    const [selectedPokemon, setSelectedPokemon] = useState<string | undefined>('Pikachu');

    return (
        <div>
            <h1>Pokedex</h1>

           Pokemons:
           {pokemons.map((pokemon) => <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon}</button>)}

            <h2>Pokemon selecionado: {selectedPokemon}</h2>
        </div>
    );
};

export default Pokedex;