import { Outlet } from "react-router-dom";
import PokemonLogo from "../assets/International_Pokémon_logo.svg";

const AuthLayout = () => {
	return (
		<div className="container w-full h-full grid place-items-center">
			<img
				src={PokemonLogo}
				alt="Pokemon logo"
				className="absolute top-1 w-full max-w-lg"
			/>
			<div
				className="max-w-sm w-[80%] bg-white shadow-xl border-2 rounded-xl"
				style={{ borderColor: "#2C6CB4" }}
			>
				<p
					className="text-center font-semibold text-2xl md:text-3xl p-6"
					style={{ color: "#2C6CB4" }}
				>
					Are you ready for a new adventure?
				</p>
				<Outlet />
			</div>
		</div>
	);
};

export default AuthLayout;
