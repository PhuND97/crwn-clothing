import React from "react";
import { useSelector } from "react-redux";
import { getCollectionForPreview } from "../../store/reducer/shop";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collection-overview.styles.scss";

function CollectionOverview() {
	const collections = useSelector(getCollectionForPreview);
	console.log(collections);
	return (
		<div className="collections-overview">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
}

export default CollectionOverview;
