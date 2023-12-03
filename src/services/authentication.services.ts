import { User } from "../types/User";
import Cookies from "js-cookie";

export const signUpService = (user: User) => {
	const email = localStorage.getItem(user.email);
	if (email) {
		return false;
	}
	localStorage.setItem(user.email, JSON.stringify(user));
	return true;
};

export const signInService = (email: string, password: string) => {
	const credentials = localStorage.getItem(email);
	if (!credentials) {
		return false;
	}
	const user: User = JSON.parse(credentials);
	const isUserValid = user.email == email && user.password == password;
	if (isUserValid) {
		Cookies.set("authorized", email, { expires: 0.04 });
		return isUserValid;
	}
	return isUserValid;
};

export const isAuthenticated = (): { valid: boolean; email: string } => {
	const authorized = Cookies.get("authorized");
	if (authorized) {
		return { valid: true, email: authorized };
	}
	return { valid: false, email: "" };
};
