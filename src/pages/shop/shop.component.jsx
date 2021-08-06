import React, { useState } from "react";
import "./shop.styles.scss";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

function ShopPage() {
	const [collections, setCollection] = useState(SHOP_DATA);

	return (
		<div className="shop-page">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
}

export default ShopPage;
