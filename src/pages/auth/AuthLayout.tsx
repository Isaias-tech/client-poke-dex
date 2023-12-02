import { Outlet } from "react-router-dom";
import PokemonLogo from "../../assets/International_Pokémon_logo.svg";

const AuthLayout = () => {
	return (
		<div className="container w-[100vw] h-[100vh] flex flex-col  items-center">
			<img
				src={PokemonLogo}
				alt="Pokemon logo"
				className="relative top-4 object-fill w-[90%] md:w-[40%]"
			/>
			<div className="w-full flex justify-center relative top-12">
				<div
					className="max-w-sm w-full bg-white shadow-xl border-2 rounded-xl"
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
		</div>
	);
};

export default AuthLayout;
