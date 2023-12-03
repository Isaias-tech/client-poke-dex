import { useEffect, useRef, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setLoading } from "../../../store/loadingSlice";
import {
	addFavoritePokemons,
	addPokemons,
	setNextOfsetLimit,
} from "../../../store/pokemonSlice";
import { getPokemons } from "../../../services/pokemon.services";
import { addFavoritePokemonLS } from "../../../utils/favoritePokemonsHandler";
import { snackBarOpts } from "../../../utils/constants";
import { Pokemon } from "../../../types/Pokemon";
import PokemonCard from "./PokemonCard";
import { isAuthenticated } from "../../../services/authentication.services";
import { useNavigate } from "react-router-dom";

const AllPokemons = () => {
	const pokemons = useSelector((state: RootState) => state.pokemonReducer);
	const loadingState = useSelector(
		(state: RootState) => state.loadingReducer
	);
	const [allPokemonsLoaded, setAllPokemonsLoaded] = useState(false);
	const { enqueueSnackbar } = useSnackbar();
	const firstDataLoaded = useRef(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleAddToFavorites = (pokemon: Pokemon) => {
		if (pokemons.favoritePokemons.find((p) => p.name == pokemon.name)) {
			enqueueSnackbar("The favorite already exists.", {
				...snackBarOpts.error,
			});
			return;
		}
		dispatch(addFavoritePokemons([pokemon]));
		addFavoritePokemonLS(pokemon.name);
		enqueueSnackbar("The favorite was added.", { ...snackBarOpts.success });
	};

	const handleDataLoad = async () => {
		dispatch(setLoading({ isLoading: true }));
		const data = await getPokemons(pokemons.nextOfsetLimit);
		if (Number.parseInt(data.next.split("=").reverse()[0]) < 20) {
			setAllPokemonsLoaded(true);
		}
		dispatch(setNextOfsetLimit(data.next));
		dispatch(addPokemons(data.pokemons));
		dispatch(setLoading({ isLoading: false }));
	};

	useEffect(() => {
		if (!isAuthenticated().valid) navigate("/sign-in");
		if (firstDataLoaded.current || pokemons.pokemons.length > 0) return;
		firstDataLoaded.current = true;
		handleDataLoad();
	}, []);

	const CircleLoading = () => (
		<div className="w-full h-full grid place-items-center">
			<CircularProgress
				variant="indeterminate"
				disableShrink
				size={30}
				thickness={4}
				sx={{ animationDuration: "550ms" }}
			/>
		</div>
	);

	return (
		<>
			<div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-40 gap-y-5 place-items-center">
				{pokemons.pokemons.map((pokemon) => (
					<PokemonCard key={pokemon.name} pokemon={pokemon}>
						<Button
							sx={{ p: "15px" }}
							fullWidth
							variant="contained"
							color="success"
							onClick={() => handleAddToFavorites(pokemon)}
						>
							Add to favorites
						</Button>
					</PokemonCard>
				))}
			</div>
			<div className="w-full flex flex-row justify-center items-center pt-5">
				<div className="w-[190px]">
					{allPokemonsLoaded ? (
						<p className="text-2xl">All pokémons were loaded.</p>
					) : (
						<Button
							color="success"
							variant="contained"
							sx={{ p: "15px" }}
							fullWidth
							disabled={loadingState.isLoading}
							onClick={handleDataLoad}
						>
							{loadingState.isLoading &&
							pokemons.pokemons.length == 0 ? (
								<CircleLoading />
							) : loadingState.isLoading ? (
								<>
									<CircleLoading />
									Loading...
								</>
							) : (
								"Load more"
							)}
						</Button>
					)}
				</div>
			</div>
		</>
	);
};

export default AllPokemons;
