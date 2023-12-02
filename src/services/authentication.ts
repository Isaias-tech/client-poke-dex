import { User } from "../types/User";

export const signUpService = (user: User) => {
	const email = localStorage.getItem(user.email);
	if (email) {
		return false;
	}
	localStorage.setItem(user.email, JSON.stringify(user));
};

export const signInService = (email: string, password: string) => {
	const credentials = localStorage.getItem(email);
	if (!credentials) {
		return false;
	}
	const user: User = JSON.parse(credentials);
	return user.email == email && user.password == password;
};
