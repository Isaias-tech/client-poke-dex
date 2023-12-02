import { PokemonCardProps } from "../../../types/PokemonCardProps";

const PokemonCard = ({
	children,
	pokemonDesc,
	pokemonImgUrl,
	pokemonName,
}: PokemonCardProps) => {
	return (
		<div
			className="max-w-[280px] min-w-[280px] w-full max-h-[395px] min-h-[395px] h-full bg-white rounded-3xl border-2 flex flex-col justify-between items-center "
			style={{ borderColor: "#7FC9AE" }}
		>
			<div className="pt-4">
				<img
					src={pokemonImgUrl}
					alt="Pokemon"
					width="170"
					height="170"
				/>
			</div>
			<div className="flex flex-col justify-center items-center p-2 pb-4">
				<p className="text-center w-[90%] text-2xl">{pokemonName}</p>
				<div className="p-2"></div>
				<p className="text-justify w-[90%]">{pokemonDesc}</p>
				<div className="p-2"></div>
				<div className="min-w-[250px] max-w-[250px]">{children}</div>
			</div>
		</div>
	);
};

export default PokemonCard;
