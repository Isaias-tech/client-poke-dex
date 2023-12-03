import Cookies from "js-cookie";
import { User } from "../types/User";

// Gets the current authorized user in cookies.
export const getCurrentUser = (): User | undefined => {
	const email = Cookies.get("authorized");
	if (!email) return;
	let currentUser = localStorage.getItem(email);
	if (!currentUser) {
		Cookies.remove("authorized");
		return;
	}
	return JSON.parse(currentUser);
};

// Add pokemon name to favorite list in LocalStorage.
export const addFavoritePokemonLS = (pokemonName: string) => {
	const user = getCurrentUser();
	if (!user) return;
	user.favorites.push(pokemonName);
	localStorage.setItem(user.email, JSON.stringify(user));
};

// Removes pokemon name to favorite list in LocalStorage.
export const removeFavoritePokemonLS = (pokemonName: string) => {
	const user = getCurrentUser();
	if (!user) return;
	user.favorites = user.favorites.filter((p) => p != pokemonName);
	localStorage.setItem(user.email, JSON.stringify(user));
};
