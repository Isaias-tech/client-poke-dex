import { Drawer } from "@mui/material";
import { ReactNode, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

const HamMenu = ({ children }: { children: ReactNode }) => {
	const [openDrawer, setOpenDrawer] = useState(false);

	const handleDrawer = () => setOpenDrawer((prev) => !prev);

	return (
		<>
			<Hamburger toggled={openDrawer} onToggle={handleDrawer} size={40} color="#2C6CB4" rounded  />
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
