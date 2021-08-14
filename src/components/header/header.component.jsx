import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.ultis";
import { useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropwDown from "../cart-dropdown/cart-dropdown.component";
import "./header.styles.scss";

function Header() {
	const currentUser = useSelector((state) => state.users.currentUser);
	const hiddenCart = useSelector((state) => state.cart.hidden);

	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/contact">
					CONTACT
				</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{hiddenCart && <CartDropwDown />}
		</div>
	);
}

export default Header;
