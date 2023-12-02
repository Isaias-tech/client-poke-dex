import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "./pages/auth/AuthLayout";
import PokemonsLayout from "./pages/pokemons/PokemonsLayout";
import AuthProvider from "./components/AuthProvider";
import SignIn from "./pages/auth/components/SignIn";
import SignUp from "./pages/auth/components/SignUp";
import FavoritePokemons from "./pages/pokemons/components/FavoritePokemons";
import AllPokemons from "./pages/pokemons/components/AllPokemons";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AuthLayout />}>
					<Route path="sign-in" element={<SignIn />} />
					<Route path="sign-up" element={<SignUp />} />
				</Route>
				<Route element={<AuthProvider />}>
					<Route element={<PokemonsLayout />}>
						<Route
							path="/pokemons/favorites"
							element={<FavoritePokemons />}
						/>
						<Route
							path="/pokemons/all"
							element={<AllPokemons />}
						/>
					</Route>
				</Route>
				<Route path="*" element={<Navigate to="/sign-in" />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
