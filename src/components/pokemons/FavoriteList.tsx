
import type { FavoritePokemonList } from "../../interfaces/favortie-pokemons-interfaces";
import { createSignal, For } from "solid-js";
import { FavoritePokemonsSelected } from "./FavoritePokemonsSelected";



const getLocalStoragePokemons = (): FavoritePokemonList[] => {


    const favoritePokemons = JSON.parse(
        localStorage.getItem("favorites") ?? "[]"
    );

    return favoritePokemons;

}



export const FavoritePokemons = () => {

    const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons())

    return (
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-2.5">
            <For each={pokemons()}>
                {
                    (pokemon) => <FavoritePokemonsSelected pokemon={pokemon} />
                }
            </For>
        </div>
    )


}