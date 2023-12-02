import { Button } from "@mui/material";

const AllPokemons = () => {
	return (
		<>
			<div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-40 gap-y-5 place-items-center">
				Pokemons
			</div>
			<div className="w-full flex flex-row justify-center items-center pt-5">
				<div className="w-[190px]">
					<Button
						color="success"
						variant="contained"
						sx={{ p: "15px" }}
						fullWidth
					>
						Load more...
					</Button>
				</div>
			</div>
		</>
	);
};

export default AllPokemons;
