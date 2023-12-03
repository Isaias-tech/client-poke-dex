import { Drawer } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { useLocation } from "react-router-dom";

const HamMenu = ({ children }: { children: ReactNode }) => {
	const [openDrawer, setOpenDrawer] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setOpenDrawer(false);
	}, [location]);

	const handleDrawer = () => setOpenDrawer((prev) => !prev);

	return (
		<>
			<Hamburger
				toggled={openDrawer}
				onToggle={handleDrawer}
				size={40}
				color="#2C6CB4"
				rounded
			/>
			<Drawer
				anchor="left"
				open={openDrawer}
				onClose={handleDrawer}
				PaperProps={{
					sx: {
						backgroundColor: "#F9D13B",
					},
				}}
			>
				{children}
			</Drawer>
		</>
	);
};

export default HamMenu;
