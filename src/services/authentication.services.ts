import { User } from "../types/User";
import Cookies from "js-cookie";

// Saves a new user to the LocalStorage
export const signUpService = (user: User) => {
	const email = localStorage.getItem(user.email);
	if (email) {
		return false;
	}
	localStorage.setItem(user.email, JSON.stringify(user));
	return true;
};

// Signs in and create the authorized cookie with a expiration time of one day
export const signInService = (email: string, password: string) => {
	const credentials = localStorage.getItem(email);
	if (!credentials) {
		return false;
	}
	const user: User = JSON.parse(credentials);
	const isUserValid = user.email == email && user.password == password;
	if (isUserValid) {
		Cookies.set("authorized", email, { expires: 1 });
	}
	return isUserValid;
};

// Verifies if there is an authorized user and returns it's email
export const isAuthenticated = (): { valid: boolean; email: string } => {
	const authorized = Cookies.get("authorized");
	if (authorized) {
		return { valid: true, email: authorized };
	}
	return { valid: false, email: "" };
};
