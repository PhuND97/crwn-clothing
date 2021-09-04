import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import "./shop.styles.scss";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.ultis";
import { useDispatch } from "react-redux";
import { updateCollections } from "../../store/reducer/shop";

function ShopPage({ match }) {
	let unsubscribeFromSnapshot = null;
	let dispatch = useDispatch();
	useEffect(() => {
		const collectionRef = firestore.collection("collections");
		unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			dispatch(updateCollections(collectionsMap));
		});
	}, []);

	return (
		<div className="shop-page">
			<Route
				exact
				path={`${match.path}`}
				component={CollectionOverview}
			/>
			<Route
				path={`${match.path}/:collectionId`}
				component={CollectionPage}
			/>
		</div>
	);
}

export default ShopPage;
