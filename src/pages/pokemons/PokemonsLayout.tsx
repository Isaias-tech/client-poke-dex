import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import PokemonSearch from "./components/PokemonSearch";

const PokemonsLayout = () => {
	return (
		<div className="w-full h-full flex flex-col items-center">
			<div className="fixed w-[100vw] z-50">
				<NavBar />
				<div className="p-2"></div>
				<div className="w-full flex flex-col items-center ">
					<PokemonSearch />
				</div>
			</div>
			<div className="max-w-[1300px] w-[80%] relative top-64 sm:top-48">
				<div className="p-2"></div>
				<Outlet />
				<div className="p-2"></div>
			</div>
		</div>
	);
};

export default PokemonsLayout;
