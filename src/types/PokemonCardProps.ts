import { ReactNode } from "react";
import { Pokemon } from "./Pokemon";

export interface PokemonCardProps {
	children: ReactNode;
	pokemon: Pokemon;
}
