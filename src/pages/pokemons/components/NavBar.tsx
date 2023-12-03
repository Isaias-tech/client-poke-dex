import { AppBar } from "@mui/material";
import PokemonLogo from "../../../assets/International_Pokémon_logo.svg";
import HamMenu from "./HamMenu";
import { NavBarActions } from "./NavBarActions";

const NavBar = () => {
	return (
		<AppBar position="static" color="warning">
			<div className="w-full flex flex-row justify-center">
				<div className="flex flex-row justify-between items-center max-w-[1440px] w-full">
					<img
						src={PokemonLogo}
						alt="Pokemon logo"
						className="w-full max-w-[200px] p-2"
					/>
					<div className="sm:hidden p-2">
						<HamMenu>
							<NavBarActions />
						</HamMenu>
					</div>
					<div className="hidden m-1 sm:flex">
						<NavBarActions />
					</div>
				</div>
			</div>
		</AppBar>
	);
};

export default NavBar;
