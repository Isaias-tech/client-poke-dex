import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { ThemeProvider } from "@emotion/react";
import theme from "./utils/mui-theme.ts";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<SnackbarProvider maxSnack={3}>
					<App />
				</SnackbarProvider>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);
