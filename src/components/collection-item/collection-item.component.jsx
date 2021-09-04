import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/reducer/cart";
import "./collection-item.styles.scss";

function CollectionItem({ item }) {
	const { name, price, imageUrl } = item;
	const dispatch = useDispatch();

	return (
		<div className="collection-item">
			<div
				className="image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton
				className="custom-button"
				onClick={() => dispatch(addItem(item))}
				inverted
			>
				{" "}
				Add to cart{" "}
			</CustomButton>
		</div>
	);
}

export default CollectionItem;
