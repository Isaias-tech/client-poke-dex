import { ChangeEvent } from "react";

export interface PasswordInputProps {
	isValid: boolean;
	helperText: string;
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	variant: "outlined" | "filled" | "standard";
	name: string;
	label: string;
}
