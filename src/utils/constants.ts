import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2";

export const pokemonsUrl = axios.create({
	baseURL: `${baseURL}/pokemon`,
	validateStatus(status) {
		return status < 500;
	},
});

export const pokemonSpeciesUrl = axios.create({
	baseURL: `${baseURL}/pokemon-species`,
	validateStatus(status) {
		return status < 500;
	},
});

export const snackBarOpts: {
	[key: string]: {
		variant:
			| "default"
			| "error"
			| "success"
			| "warning"
			| "info"
			| undefined;
		style: { backgroundColor: string };
	};
} = {
	error: { variant: "error", style: { backgroundColor: "#EF4036" } },
	success: { variant: "success", style: { backgroundColor: "#7FC9AE" } },
	warning: { variant: "warning", style: { backgroundColor: "#F9D13B" } },
	default: { variant: "default", style: { backgroundColor: "#2C6CB4" } },
};
