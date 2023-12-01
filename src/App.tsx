import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Pokemons from "./pages/Pokemons";
import AuthProvider from "./components/AuthProvider";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Auth />}>
					<Route path="sign-in" element={<div>Sign in</div>} />
					<Route path="sign-up" element={<div>Sign up</div>} />
				</Route>
				<Route element={<AuthProvider authenticated={true} />}>
					<Route element={<Pokemons />}>
						<Route
							path="/pokemons/favorites"
							element={<div>Favorite pokemons</div>}
						/>
						<Route
							path="/pokemons/all"
							element={<div>All pokemons</div>}
						/>
					</Route>
				</Route>
				<Route path="*" element={<Navigate to="/sign-in" />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
