import { PokemonCardProps } from "../../../types/PokemonCardProps";

const PokemonCard = ({ children, pokemon }: PokemonCardProps) => {
	return (
		<div
			className="max-w-[280px] min-w-[280px] w-full max-h-[395px] min-h-[395px] h-full bg-white rounded-3xl border-2 flex flex-col justify-between items-center "
			style={{ borderColor: "#7FC9AE" }}
		>
			<div className="pt-4 max-w-[150px] max-h-[150px]">
				<img
					className="object-contain w-full h-full"
					src={pokemon.image}
					alt="Pokemon"
				/>
			</div>
			<div className="flex flex-col justify-center items-center p-2 pb-4">
				<p className="text-center w-[90%] text-2xl capitalize">
					{pokemon.name}
				</p>
				<div className="p-2"></div>
				<p className="text-justify w-[90%] line-clamp-4 max-w-[270px] min-h-[93px] max-h-[93px]">
					{pokemon.description?.length > 127 ? pokemon.description.split(".")[0] + "." : pokemon.description}
				</p>
				<div className="p-2"></div>
				<div className="min-w-[250px] max-w-[250px]">{children}</div>
			</div>
		</div>
	);
};

export default PokemonCard;
