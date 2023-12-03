import { Button, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isFieldValid } from "../../../utils/validators";
import {
	isAuthenticated,
	signInService,
} from "../../../services/authentication.services";
import PasswordInput from "../../../components/PasswordInput";
import { setLoading } from "../../../store/loadingSlice";
import { useDispatch } from "react-redux";

const SignIn = () => {
	const [form, setForm] = useState({
		email: { value: "", validity: false },
		password: { value: "", validity: false },
	});
	const [isFormValid, setIsFormValid] = useState(true);
	const [noUser, setNoUser] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (isAuthenticated().valid) navigate("/pokemons/all");
	});

	const onSignUp = () => {
		navigate("/sign-up");
	};

	const isFormFieldInvalid = (fv: boolean) => {
		return !isFormValid && !fv;
	};

	const onFormChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const validity = isFieldValid(e.target.name, e.target.value);
		setForm((prev) => ({
			...prev,
			[e.target.name]: { value: e.target.value, validity },
		}));
		setNoUser(false);
	};

	const onFormSubmit = () => {
		const fv = Object.values(form).every((field) => field.validity == true);
		setIsFormValid(fv);
		if (!fv) return;

		const res = signInService(form.email.value, form.password.value);
		if (res) {
			dispatch(setLoading({ isLoading: true }));
			navigate("/pokemons/all");
		} else {
			setNoUser(true);
		}
	};

	return (
		<div className="w-full flex flex-col items-center">
			<div className="w-[80%] pb-5">
				<TextField
					error={isFormFieldInvalid(form.email.validity)}
					helperText={
						isFormFieldInvalid(form.email.validity) &&
						"The email is not valid."
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
			</div>
			{noUser && (
				<p className="pb-2" style={{ color: "#EF4036" }}>
					There is no user with that combination.
				</p>
			)}
			<div className="w-[80%] flex flex-row justify-between items-center pb-5">
				<div className="w-[43%]">
					<Button
						className="w-[40%]"
						onClick={onSignUp}
						variant="outlined"
						size="medium"
						fullWidth
						sx={{ p: "15px" }}
					>
						Sign up
					</Button>
				</div>
				<div className="w-[43%]">
					<Button
						onClick={onFormSubmit}
						variant="contained"
						size="medium"
						fullWidth
						sx={{ p: "15px" }}
					>
						Sign in
					</Button>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
