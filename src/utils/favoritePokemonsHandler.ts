import Cookies from "js-cookie";
import { User } from "../types/User";

export const getCurrentUser = (): User | undefined => {
	const email = Cookies.get("authorized");
	if (!email) return;
	let currentUser = localStorage.getItem(email);
	if (!currentUser) return;
	return JSON.parse(currentUser);
};

export const addFavoritePokemonLS = (pokemonName: string) => {
	const user = getCurrentUser();
	if (!user) return;
	user.favorites.push(pokemonName);
	localStorage.setItem(user.email, JSON.stringify(user));
};

export const removeFavoritePokemonLS = (pokemonName: string) => {
	const user = getCurrentUser();
	if (!user) return;
	user.favorites = user.favorites.filter((p) => p != pokemonName);
	localStorage.setItem(user.email, JSON.stringify(user));
};
