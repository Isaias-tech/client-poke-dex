import { Outlet } from "react-router-dom";

const Pokemons = () => {
	return (
		<>
			<div className="pokemons">Pokemons</div>
			<Outlet />
		</>
	);
};

export default Pokemons;
