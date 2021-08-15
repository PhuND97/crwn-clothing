import React from "react";
import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { useSelector } from "react-redux";
import { getCollection } from "../../store/reducer/shop";

function CollectionPage({ match }) {
	const { title, items } = useSelector(
		getCollection(match.params.collectionId)
	);
	return (
		<div className="collection-page">
			<h2 className="title">{title}</h2>
			<div className="items">
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
}

export default CollectionPage;
