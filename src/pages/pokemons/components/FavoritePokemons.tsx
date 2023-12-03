import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import PokemonCard from "./PokemonCard";
import { Button, CircularProgress, Fade, Modal } from "@mui/material";
import { Pokemon } from "../../../types/Pokemon";
import { useEffect, useRef, useState } from "react";
import {
	addFavoritePokemons,
	removeFavoritePokemon,
} from "../../../store/pokemonSlice";
import { useSnackbar } from "notistack";
import { snackBarOpts } from "../../../utils/constants";
import { removeFavoritePokemonLS } from "../../../utils/favoritePokemonsHandler";
import { getFavoritePokemons } from "../../../services/pokemon.services";
import { setLoading } from "../../../store/loadingSlice";

const FavoritePokemons = () => {
	const pokemons = useSelector((state: RootState) => state.pokemonReducer);
	const loadingState = useSelector(
		(state: RootState) => state.loadingReducer
	);
	const { enqueueSnackbar } = useSnackbar();
	const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();
	const [openModal, setOpenModal] = useState(false);
	const dispatch = useDispatch();
	const firstDataLoaded = useRef(false);

	const handleOpenModal = (pokemon: Pokemon) => {
		setOpenModal(true);
		setSelectedPokemon(pokemon);
	};
	const handleCloseModal = () => setOpenModal(false);

	const handleRemoveToFavorites = () => {
		if (selectedPokemon) {
			dispatch(removeFavoritePokemon(selectedPokemon));
			removeFavoritePokemonLS(selectedPokemon.name);
			enqueueSnackbar("The favorite was deleted.", {
				...snackBarOpts.success,
			});
		}
		handleCloseModal();
	};

	useEffect(() => {
		if (firstDataLoaded.current || pokemons.favoritePokemons.length > 0)
			return;
		firstDataLoaded.current = true;
		dispatch(setLoading({ isLoading: true }));
		const getData = async () => {
			const favPokemons = await getFavoritePokemons();
			if (favPokemons) {
				dispatch(addFavoritePokemons(favPokemons));
			}
		};
		getData();
		dispatch(setLoading({ isLoading: false }));
	});

	return (
		<div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-40 gap-y-5 place-items-center">
			{loadingState.isLoading ? (
				<div className="w-full h-full grid place-items-center">
					<CircularProgress
						variant="indeterminate"
						disableShrink
						size={30}
						thickness={4}
						sx={{ animationDuration: "550ms" }}
					/>
				</div>
			) : (
				pokemons.favoritePokemons.map((pokemon) => (
					<PokemonCard key={pokemon.image} pokemon={pokemon}>
						<Button
							sx={{ p: "15px" }}
							fullWidth
							variant="outlined"
							color="warning"
							onClick={() => handleOpenModal(pokemon)}
						>
							Remove from favorites
						</Button>
					</PokemonCard>
				))
			)}
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={openModal}
				onClose={handleCloseModal}
				closeAfterTransition
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
			>
				<Fade in={openModal}>
					<div
						className="absolute w-[80vw] h-[210px] sm:w-[385px] bg-white top-[50%] left-[50%] rounded-xl border-2"
						style={{
							transform: "translate(-50%, -50%)",
							borderColor: "#EF4036",
						}}
					>
						<p
							className="text-center p-5 text-2xl font-semibold"
							style={{ color: "#EF4036" }}
						>
							Are you sure you want to delete{" "}
							<span className="capitalize">
								{selectedPokemon?.name}
							</span>{" "}
							from your favorite list?
						</p>
						<div className="flex flex-row justify-evenly items-center">
							<div className="w-[45%]">
								<Button
									variant="outlined"
									color="success"
									onClick={handleCloseModal}
									sx={{ p: "15px" }}
									fullWidth
								>
									Cancel
								</Button>
							</div>
							<div className="w-[45%]">
								<Button
									variant="contained"
									color="error"
									onClick={() => handleRemoveToFavorites()}
									sx={{ p: "15px" }}
									fullWidth
								>
									Proceed
								</Button>
							</div>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};

export default FavoritePokemons;
