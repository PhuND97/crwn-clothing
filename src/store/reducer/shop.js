import { createSelector, createSlice } from "@reduxjs/toolkit";
import SHOP_DATA from "../data/shop.data";

const INITIAL_STATE = { collections: SHOP_DATA };

const slice = createSlice({
	name: "shop",
	initialState: INITIAL_STATE,
	reducers: {},
});

export default slice.reducer;

export const getShopData = createSelector(
	(state) => state.shop,
	(shop) => shop.collections
);
