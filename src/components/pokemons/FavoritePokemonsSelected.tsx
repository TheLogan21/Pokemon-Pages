import { createSignal, Show, type Component } from "solid-js"
import type { FavoritePokemonList } from "../../interfaces/favortie-pokemons-interfaces"

interface Props {
    pokemon: FavoritePokemonList,

}





export const FavoritePokemonsSelected: Component<Props> = ({ pokemon }) => {
    const [isVisible, setIsVisible] = createSignal(true);

    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

    const deleteFavorite = () => {
        const favorites = JSON.parse(
            localStorage.getItem("favorites") ?? "[]"
        ) as FavoritePokemonList[];
        const newFavorites = favorites.filter(p => p.id != pokemon.id);

        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        setIsVisible(false);
    }


    return (

        <Show when={isVisible()}>




            <div class="border rounded-md  flex flex-col justify-center items-center p-2">

                <a href={`/pokemons/${pokemon.name}`}>

                    <img style={`${pokemon.name}-image`}

                        src={imageSrc}
                        alt={pokemon.name}
                        width="96px"
                        height="96px"

                    />
                    <p class="capitalize flex">#{pokemon.id} {pokemon.name}</p>

                </a>
                <div class="mt-2">
                    <button class="text-1xl font-bold bg-blue-700 p-1.5 rounded-md hover:cursor-pointer" onClick={deleteFavorite}>
                        Borrar
                    </button>
                </div>

            </div>
        </Show>
    );

}