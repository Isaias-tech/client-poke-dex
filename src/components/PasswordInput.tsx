import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { PasswordInputProps } from "../types/PasswordInputProps";

const PasswordInput = ({
	isValid,
	helperText,
	onChange,
	variant,
	name,
	label
}: PasswordInputProps) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleMouseDown = () => setShowPassword(true);
	const handleMouseUp = () => setShowPassword(false);

	return (
		<TextField
			error={!isValid}
			helperText={!isValid && helperText}
			fullWidth
			variant={variant}
			label={label}
			name={name}
			type={showPassword ? "text" : "password"}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onMouseUp={handleMouseUp}
							onMouseDown={handleMouseDown}
						>
							{showPassword ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				),
			}}
			autoComplete="off"
			size="medium"
			onChange={(e) => onChange(e)}
		/>
	);
};

export default PasswordInput;
