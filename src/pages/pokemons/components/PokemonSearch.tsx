import { Button, Fade, Modal, TextField } from "@mui/material";
import { useState } from "react";
import { getPokemon } from "../../../services/pokemon.services";
import { Pokemon } from "../../../types/Pokemon";
import PokemonCard from "./PokemonCard";
import PokemonLogo from "../../../assets/International_Pokémon_logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { addFavoritePokemon } from "../../../store/pokemonSlice";
import { useSnackbar } from "notistack";
import { snackBarOpts } from "../../../utils/constants";
import { addFavoritePokemonLS } from "../../../utils/favoritePokemonsHandler";

const PokemonSearch = () => {
	const pokemons = useSelector((state: RootState) => state.pokemonReducer);
	const { enqueueSnackbar } = useSnackbar();
	const [pokemonName, setPokemonName] = useState("");
	const [pokemon, setPokemon] = useState<Pokemon>();
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleAddToFavorites = (pokemon: Pokemon) => {
		if (pokemons.favoritePokemons.find((p) => p.name == pokemon.name)) {
			handleClose();
			enqueueSnackbar("Favorite already exists.", {
				...snackBarOpts.error,
			});
			return;
		}
		dispatch(addFavoritePokemon(pokemon));
		addFavoritePokemonLS(pokemon.name);
		enqueueSnackbar("The favorite was added.", { ...snackBarOpts.success });
		handleClose();
	};

	const handleSearch = async () => {
		if (pokemonName.length == 0) {
			return;
		}
		const pokemon = await getPokemon(pokemonName.toLowerCase());
		if (
			pokemon.description ||
			(pokemon.image && pokemon.image != PokemonLogo)
		) {
			setPokemon(pokemon);
			handleOpen();
		} else {
			enqueueSnackbar("No pokémon was found.", {
				...snackBarOpts.error,
			});
		}
	};

	return (
		<div className="max-w-[1300px] w-full bg-white border-2 rounded-xl min-h-[10vh] flex items-center flex-col sm:flex-row">
			<div className="w-[95%] sm:w-full p-4 pb-2 sm:pb-4">
				<TextField
					variant="outlined"
					fullWidth
					label="Search pokémon"
					onChange={(e) => setPokemonName(e.target.value)}
					value={pokemonName}
				/>
			</div>
			<div className="w-[95%] sm:w-full sm:max-w-[225px] min-w-[215px] p-4 pt-2 sm:pt-4">
				<Button
					sx={{ p: "15px" }}
					color="success"
					variant="contained"
					fullWidth
					onClick={handleSearch}
				>
					Search pokémon
				</Button>
				{pokemon && (
					<Modal
						aria-labelledby="transition-modal-title"
						aria-describedby="transition-modal-description"
						open={open}
						onClose={handleClose}
						closeAfterTransition
						slotProps={{
							backdrop: {
								timeout: 500,
							},
						}}
					>
						<Fade in={open}>
							<div
								className="absolute top-[50%] left-[50%]	"
								style={{
									transform: "translate(-50%, -50%)",
									borderColor: "#EF4036",
								}}
							>
								<PokemonCard pokemon={pokemon}>
									<div className="w-full flex flex-row justify-evenly">
										<Button
											variant="outlined"
											color="success"
											onClick={() =>
												handleAddToFavorites(pokemon)
											}
											sx={{ p: "10px" }}
										>
											Add to favorites
										</Button>
										<Button
											variant="contained"
											color="success"
											onClick={handleClose}
											sx={{ p: "10px" }}
										>
											Close
										</Button>
									</div>
								</PokemonCard>
							</div>
						</Fade>
					</Modal>
				)}
			</div>
		</div>
	);
};

export default PokemonSearch;
