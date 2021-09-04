import { createSelector, createSlice } from "@reduxjs/toolkit";
import SHOP_DATA from "../data/shop.data";

const INITIAL_STATE = { collections: SHOP_DATA };

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
		(shop) => shop.collections[collectionUrlParam]
	);

export const getCollectionForPreview = createSelector(
	(state) => state.shop.collections,
	(collections) => Object.keys(collections).map((key) => collections[key])
);
