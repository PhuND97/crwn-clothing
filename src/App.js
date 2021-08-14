import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.ultis";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, setCurrentUser } from "./store/reducer/users";

function App() {
	const dispatch = useDispatch();
	const currentUser = useSelector(getCurrentUser);
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
				<Route
					exact
					path="/signin"
					render={() =>
						currentUser ? (
							<Redirect to="/" />
						) : (
							<SignInAndSignUpPage />
						)
					}
				/>
				<Route path="/" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
