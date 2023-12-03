import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../types/Pokemon";
import { PokemonState } from "../types/PokemonState";

const initialState: PokemonState = {
	pokemons: [],
	favoritePokemons: [],
	nextOfsetLimit: "",
};

export const pokemonsSlice = createSlice({
	name: "Pokemons",
	initialState,
	reducers: {
		addPokemons: (state, action: PayloadAction<Pokemon[]>) => {
			state.pokemons = [...state.pokemons, ...action.payload];
		},
		setPokemon: (state, action: PayloadAction<Pokemon>) => {
			state.pokemons = [action.payload];
		},
		resetPokemons: (state) => {
			state.pokemons = [];
		},
		addFavoritePokemon: (state, action: PayloadAction<Pokemon>) => {
			state.favoritePokemons.push(action.payload);
		},
		addFavoritePokemons: (state, action: PayloadAction<Pokemon[]>) => {
			state.favoritePokemons = [...state.pokemons, ...action.payload];
		},
		removeFavoritePokemon: (state, action: PayloadAction<Pokemon>) => {
			state.favoritePokemons = state.favoritePokemons.filter(
				(pokemon) => pokemon.image != action.payload.image
			);
		},
		setNextOfsetLimit: (state, action: PayloadAction<string>) => {
			state.nextOfsetLimit = action.payload;
		},
	},
});

export const {
	addPokemons,
	setPokemon,
	resetPokemons,
	addFavoritePokemon,
	addFavoritePokemons,
	setNextOfsetLimit,
	removeFavoritePokemon,
} = pokemonsSlice.actions;
const pokemonReducer = pokemonsSlice.reducer;
export default pokemonReducer;
