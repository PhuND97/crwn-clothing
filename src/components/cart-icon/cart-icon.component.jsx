import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden, getItemQuantities } from "../../store/reducer/cart";
import "./cart-icon.styles.scss";

function CartIcon() {
	const dispatch = useDispatch();
	const itemQuantities = useSelector(getItemQuantities);

	return (
		<div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{itemQuantities}</span>
		</div>
	);
}

export default CartIcon;
