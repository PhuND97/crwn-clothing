import React from "react";
import "./shop.styles.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { getShopData } from "../../store/reducer/shop";
import { useSelector } from "react-redux";

function ShopPage() {
	const collections = useSelector(getShopData);

	return (
		<div className="shop-page">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
}

export default ShopPage;
