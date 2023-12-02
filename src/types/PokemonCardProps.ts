import { ReactNode } from "react";

export interface PokemonCardProps {
	children: ReactNode;
	pokemonImgUrl: string;
	pokemonDesc: string;
	pokemonName: string;
}