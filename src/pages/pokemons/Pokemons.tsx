import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import PokemonSearch from "./components/PokemonSearch";

const Pokemons = () => {
	return (
		<div className="w-full h-full flex flex-col items-center">
			<NavBar />
			<div className="p-2"></div>
			<PokemonSearch />
			<div className="p-2"></div>
			<Outlet />
		</div>
	);
};

export default Pokemons;
