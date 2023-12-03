import { Pokemon } from "./Pokemon";

export interface PokemonState {
	pokemons: Pokemon[];
	nextOfsetLimit: string;
	favoritePokemons: Pokemon[];
}