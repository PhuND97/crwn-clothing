import React from "react";
import { auth } from "../../firebase/firebase.ultis";
import { useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropwDown from "../cart-dropdown/cart-dropdown.component";
import { getCurrentUser } from "../../store/reducer/users";
import { getCartHidden } from "../../store/reducer/cart";

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
} from "./header.styles";

function Header() {
	const currentUser = useSelector(getCurrentUser);
	const hiddenCart = useSelector(getCartHidden);

	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/shop">SHOP</OptionLink>
				<OptionLink to="/contact">CONTACT</OptionLink>
				{currentUser ? (
					<OptionLink as="div" onClick={() => auth.signOut()}>
						SIGN OUT
					</OptionLink>
				) : (
					<OptionLink to="/signin">SIGN IN</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{hiddenCart && <CartDropwDown />}
		</HeaderContainer>
	);
}

export default Header;
