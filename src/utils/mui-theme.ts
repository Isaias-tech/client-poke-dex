import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#2C6CB4",
			contrastText: "#fff"
		},
		warning: {
			main: "#F9D13B",
			contrastText: "#fff"
		},
		success: {
			main: "#7FC9AE",
			contrastText: "#fff"
		},
		error: {
			main: "#EF4036",
			contrastText: "#fff"
		}
	}
})

export default theme;