import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.ultis";

function App() {
	const [currentUser, setCurrentUser] = useState(null);

	let unsubscribeFromAuth = () => {};

	useEffect(() => {
		unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			console.log(user);
		});
	}, []);

	useEffect(() => {
		return () => {
			unsubscribeFromAuth();
		};
	});

	return (
		<div>
			<Header currentUser={currentUser} />
			<Switch>
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={SignInAndSignUpPage} />
				<Route path="/" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
