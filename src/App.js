import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.ultis";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/users";

function App() {
	const dispatch = useDispatch();
	let unsubscribeFromAuth = () => {};

	useEffect(() => {
		unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					dispatch(
						setCurrentUser({ id: snapShot.id, ...snapShot.data() })
					);
				});
			}
			dispatch(setCurrentUser(userAuth));
		});
		return () => {
			unsubscribeFromAuth();
		};
	}, []);

	return (
		<div>
			<Header />
			<Switch>
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={SignInAndSignUpPage} />
				<Route path="/" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
