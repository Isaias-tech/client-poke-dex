import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "./pages/AuthLayout";
import Pokemons from "./pages/Pokemons";
import AuthProvider from "./components/AuthProvider";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AuthLayout />}>
					<Route path="sign-in" element={<SignIn />} />
					<Route path="sign-up" element={<SignUp />} />
				</Route>
				<Route element={<AuthProvider />}>
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
