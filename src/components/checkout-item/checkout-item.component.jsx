import React from "react";
import "./checkout-item.styles.scss";
import {
	removeItem,
	increaseQuantity,
	decreaseQuantity,
} from "../../store/reducer/cart";
import { useDispatch } from "react-redux";

function CheckoutItem({ cartItem }) {
	const { name, price, quantity, imageUrl } = cartItem;
	const dispatch = useDispatch();

	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div
					className="arrow"
					onClick={() => dispatch(decreaseQuantity(cartItem))}
				>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div
					className="arrow"
					onClick={() => dispatch(increaseQuantity(cartItem))}
				>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<div
				className="remove-button"
				onClick={() => dispatch(removeItem(cartItem))}
			>
				&#10005;
			</div>
		</div>
	);
}

export default CheckoutItem;
