import { createSelector, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { collections: null };

const slice = createSlice({
	name: "shop",
	initialState: INITIAL_STATE,
	reducers: {
		updateCollections: (shop, action) => {
			shop.collections = action.payload;
		},
	},
});

export const { updateCollections } = slice.actions;
export default slice.reducer;

export const getShopData = createSelector(
	(state) => state.shop,
	(shop) => shop.collections
);

export const getCollection = (collectionUrlParam) =>
	createSelector(
		(state) => state.shop,
		(shop) =>
			shop.collections ? shop.collections[collectionUrlParam] : null
	);

export const getCollectionForPreview = createSelector(
	(state) => state.shop.collections,
	(collections) =>
		collections
			? Object.keys(collections).map((key) => collections[key])
			: []
);
