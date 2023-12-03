import { Button, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isFieldValid } from "../../../utils/validators";
import {
	isAuthenticated,
	signUpService,
} from "../../../services/authentication.services";
import { User } from "../../../types/User";
import PasswordInput from "../../../components/PasswordInput";
import { useSnackbar } from "notistack";
import { snackBarOpts } from "../../../utils/constants";

const SignUp = () => {
	const [form, setForm] = useState({
		fullName: { value: "", validity: false },
		email: { value: "", validity: false },
		password: { value: "", validity: false },
		repeatPassword: { value: "", validity: false },
	});
	const [isFormValid, setIsFormValid] = useState(true);

	const { enqueueSnackbar } = useSnackbar();
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated().valid) navigate("/pokemons/all");
	});

	const onSignIn = () => {
		navigate("/sign-in");
	};

	const isFormFieldInvalid = (fv: boolean) => {
		return !isFormValid && !fv;
	};

	const onFormChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		let validity = isFieldValid(e.target.name, e.target.value);
		if (e.target.name == "repeatPassword")
			validity = form.password.value == e.target.value;
		setForm((prev) => ({
			...prev,
			[e.target.name]: { value: e.target.value, validity },
		}));
	};

	const onFormSubmit = () => {
		const fv = Object.values(form).every((field) => field.validity == true);
		setIsFormValid(fv);
		if (!fv) return;

		const user: User = {
			fullName: form.fullName.value,
			email: form.email.value.toLowerCase(),
			password: form.password.value,
			favorites: []
		};

		const res = signUpService(user);

		if (res == false) {
			setForm((prev) => ({
				...prev,
				email: { value: "", validity: false },
			}));
			setIsFormValid(false);
			enqueueSnackbar("There was an error while creating the user.", {
				...snackBarOpts.error,
			});
		} else {
			enqueueSnackbar("The user was created.", {
				...snackBarOpts.success,
			});
			navigate("/sign-in");
		}
	};

	return (
		<div className="w-full flex flex-col items-center text-center">
			<div className="w-[80%] pb-5">
				<TextField
					error={isFormFieldInvalid(form.fullName.validity)}
					helperText={
						isFormFieldInvalid(form.fullName.validity) &&
						"There is no name."
					}
					fullWidth
					variant="outlined"
					label="Full name"
					name="fullName"
					autoComplete="off"
					size="medium"
					onChange={(e) => onFormChange(e)}
				/>
				<div className="p-2"></div>
				<TextField
					error={isFormFieldInvalid(form.email.validity)}
					helperText={
						isFormFieldInvalid(form.email.validity) &&
						"The email is not valid or already exists."
					}
					fullWidth
					variant="outlined"
					label="Email"
					name="email"
					autoComplete="off"
					size="medium"
					onChange={(e) => onFormChange(e)}
				/>
				<div className="p-2"></div>
				<PasswordInput
					isValid={!isFormFieldInvalid(form.password.validity)}
					helperText="The password is not valid."
					label="Password"
					name="password"
					onChange={onFormChange}
					variant="outlined"
				/>
				<div className="p-2"></div>
				<PasswordInput
					isValid={!isFormFieldInvalid(form.repeatPassword.validity)}
					helperText="The passwords are not the same."
					label="Repeate password"
					name="repeatPassword"
					onChange={onFormChange}
					variant="outlined"
				/>
			</div>
			<div className="w-[80%] flex flex-row justify-between items-center pb-5">
				<div className="w-[43%]">
					<Button
						onClick={onSignIn}
						variant="outlined"
						size="medium"
						fullWidth
						sx={{ p: "15px" }}
					>
						Sign in
					</Button>
					<div />
				</div>
				<div className="w-[43%]">
					<Button
						onClick={onFormSubmit}
						variant="contained"
						size="medium"
						fullWidth
						sx={{ p: "15px" }}
					>
						Sign up
					</Button>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
