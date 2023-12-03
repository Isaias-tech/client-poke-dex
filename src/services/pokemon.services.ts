import { Pokemon } from "../types/Pokemon";
import { axiosErrorHandler } from "../utils/axiosErrorHandler";
import { pokemonSpeciesUrl, pokemonsUrl } from "../utils/constants";
import PokemonLogo from "../assets/International_Pokémon_logo.svg";
import { getCurrentUser } from "../utils/favoritePokemonsHandler";

const getPokemonImage = (pName: string) => {
	return pokemonsUrl
		.get(`/${pName}`)
		.then((response) => response.data)
		.then(
			(data) =>
				data.sprites?.other.dream_world.front_default ||
				data.sprites?.other["official-artwork"].front_default ||
				PokemonLogo
		)
		.catch(axiosErrorHandler);
};

const getPokemonDescription = (pName: string): Promise<string> => {
	return pokemonSpeciesUrl
		.get(`/${pName}`)
		.then((response) => {
			return response.data.flavor_text_entries;
		})
		.then((data) =>
			data
				?.find((entry: any) => entry.language.name === "en")
				.flavor_text.replace(/[\n\f\r\t\v]/g, " ")
		)
		.catch(axiosErrorHandler);
};

const getPokemonList = (next: string) => {
	return pokemonsUrl
		.get(`/?${next}`)
		.then((response) => response.data)
		.catch(axiosErrorHandler);
};

export const getPokemon = async (pName: string): Promise<Pokemon> => {
	const pokemonImage = await getPokemonImage(pName);
	const specieDescription = await getPokemonDescription(pName);
	return {
		name: pName,
		image: pokemonImage,
		description: specieDescription,
	};
};

export const getPokemons = async (next = "") => {
	const pokemonList = await getPokemonList(next);
	const pokemons: Pokemon[] = await Promise.all(
		pokemonList.results.map(
			async (pokemon: any) => await getPokemon(pokemon.name)
		)
	);
	const nextOfsetLimit = pokemonList.next.split("?");
	return {
		next: nextOfsetLimit[nextOfsetLimit.length - 1],
		pokemons,
	};
};

// Gets all the pokemons saved on the LocalStorage
export const getFavoritePokemons = async () => {
	const user = getCurrentUser();
	if (!user) return;
	const pokemons: Pokemon[] = await Promise.all(
		user.favorites.map(
			async (pokemon: any) => await getPokemon(pokemon)
		)
	);
	return pokemons;
};
