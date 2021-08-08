import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.ultis";
import "./sign-in.styles.scss";

function SignIn() {
	const [data, setData] = useState({ email: "", password: "" });

	function handleChange(event) {
		event.preventDefault();
		const { name, value } = event.currentTarget;
		const newData = { ...data };
		newData[name] = value;
		setData(newData);
	}

	async function handleSubmit(event) {
		event.preventDefault();

		const { email, password } = data;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			setData({ email: "", password: "" });
		} catch (error) {
			console.log(error.message);
		}
	}
	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					name="email"
					label="email"
					value={data.email}
					handleChange={handleChange}
					required
				/>
				<FormInput
					type="password"
					name="password"
					label="password"
					value={data.password}
					handleChange={handleChange}
					required
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton
						type="button"
						onClick={signInWithGoogle}
						isGoogleSignIn
					>
						Sign In With Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
}

export default SignIn;
