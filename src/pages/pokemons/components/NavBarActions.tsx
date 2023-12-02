import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const NavBarActions = () => {
	const [currentPokemonDisplay, setCurrentPokemonDisplay] =
		useState("Favorites");
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (location.pathname == "/pokemons/favorites") {
			setCurrentPokemonDisplay("All Pokémons");
		}
	});

	const handleLogOut = () => {
		Cookies.remove("authorized");
		navigate("/sign-in");
	};

	const handlePokemonUrl = () => {
		if (currentPokemonDisplay == "All Pokémons") {
			setCurrentPokemonDisplay("Favorites");
			navigate("/pokemons/all");
		} else {
			setCurrentPokemonDisplay("All Pokémons");
			navigate("/pokemons/favorites");
		}
	};
	
	return (
		<div className="min-w-[70vw] sm:min-w-[30vw] flex flex-col sm:flex-row sm:justify-evenly">
			<div className="p-2 sm:w-full sm:min-w-[175px] sm:max-w-[210px]">
				<Button
					sx={{ p: "15px" }}
					variant="contained"
					fullWidth
					onClick={handlePokemonUrl}
				>
					{currentPokemonDisplay}
				</Button>
			</div>

			<div className="p-2 sm:w-full sm:min-w-[175px] sm:max-w-[210px]">
				<Button
					sx={{ p: "15px" }}
					color="error"
					variant="outlined"
					fullWidth
					onClick={handleLogOut}
				>
					Logout
				</Button>
			</div>
		</div>
	);
};
