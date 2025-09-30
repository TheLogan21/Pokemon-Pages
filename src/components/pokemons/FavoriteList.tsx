
import type { FavoritePokemonList } from "../../interfaces/favortie-pokemons-interfaces";
import { createSignal, For } from "solid-js";



const getLocalStoragePokemons = (): FavoritePokemonList[] => {


    const favoritePokemons = JSON.parse(
        localStorage.getItem("favorites") ?? "[]"
    );

    return favoritePokemons;

}



export const FavoritePokemons = () => {

    const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons())

    return (
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 m-3">
            <For each={pokemons()}>
                {
                    (pokemon) => <h1>{pokemon.name}</h1>
                }
            </For>
        </div>
    )


}