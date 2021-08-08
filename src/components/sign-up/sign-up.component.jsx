import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
	auth,
	createUserProfileDocument,
} from "./../../firebase/firebase.ultis";

import "./sign-up.styles.scss";

function SignUp() {
	const [data, setData] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	async function handleSubmit(e) {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = data;

		if (password !== confirmPassword) {
			alert("Password don't match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			await createUserProfileDocument(user, { displayName });

			const newData = {
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			};
			setData(newData);
		} catch (error) {
			console.log(error);
		}
	}

	function handleChange(e) {
		e.preventDefault();
		const { name, value } = e.currentTarget;
		const newData = { ...data };
		newData[name] = value;
		setData(newData);
	}

	return (
		<div className="sign-up">
			<h2 className="title">I do not have an account</h2>
			<span>Sing up with your email and password</span>
			<form className="sign-up-form" onSubmit={(e) => handleSubmit(e)}>
				<FormInput
					type="text"
					name="displayName"
					value={data.displayName}
					onChange={(e) => handleChange(e)}
					label="Display Name"
					required
				/>
				<FormInput
					type="email"
					name="email"
					value={data.email}
					onChange={(e) => handleChange(e)}
					label="Email"
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={data.password}
					onChange={(e) => handleChange(e)}
					label="Password"
					required
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={data.confirmPassword}
					onChange={(e) => handleChange(e)}
					label="Confirm Password"
					required
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</div>
	);
}

export default SignUp;
