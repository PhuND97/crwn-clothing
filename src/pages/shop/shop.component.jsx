import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import "./shop.styles.scss";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { updateCollections } from "../../store/reducer/shop";
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.ultis";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function ShopPage({ match }) {
	let unsubscribeFromSnapshot = null;
	let dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const collectionRef = firestore.collection("collections");
		unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			dispatch(updateCollections(collectionsMap));
			setLoading(false);
		});
	}, []);

	return (
		<div className="shop-page">
			<Route
				exact
				path={`${match.path}`}
				render={(props) => (
					<CollectionsOverviewWithSpinner
						isLoading={loading}
						{...props}
					/>
				)}
			/>
			<Route
				path={`${match.path}/:collectionId`}
				render={(props) => (
					<CollectionPageWithSpinner isLoading={loading} {...props} />
				)}
			/>
		</div>
	);
}

export default ShopPage;
