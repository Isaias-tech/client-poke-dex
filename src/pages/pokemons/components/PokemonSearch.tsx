import { Button, TextField } from "@mui/material";

const PokemonSearch = () => {
	return (
		<div className="max-w-[1300px] bg-white border-2 rounded-xl min-h-[10vh] w-[80%] flex items-center flex-col sm:flex-row">
			<div className="w-[95%] sm:w-full p-4 pb-2 sm:pb-4">
				<TextField
					variant="outlined"
					fullWidth
					label="Search pokémon..."
				/>
			</div>
			<div className="w-[95%] sm:w-full sm:max-w-[225px] p-4 pt-2 sm:pt-4">
				<Button
					sx={{ p: "15px" }}
					color="success"
					variant="contained"
					fullWidth
				>
					Search pokémon
				</Button>
			</div>
		</div>
	);
};

export default PokemonSearch;
