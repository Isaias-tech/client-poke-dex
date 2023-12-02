export const validateEmail = (email: string) => {
	let re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
	return re.test(email);
};

export const validatePassword = (password: string) => {
	let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
	return re.test(password);
};

export const isFieldValid = (name: string, value: string) => {
	let validity = true;
	if (name == "fullName") validity = value.length > 0;
	else if (name == "email") validity = validateEmail(value);
	else if (name == "password") validity = validatePassword(value);
	return validity;
};
