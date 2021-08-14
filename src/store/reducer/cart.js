import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "cart",
	initialState: { hidden: false, cartItems: [] },
	reducers: {
		toggleCartHidden: (cart, action) => {
			cart.hidden = !cart.hidden;
		},
		addItem: (cart, action) => {
			cart.cartItems.push(action.payload);
		},
	},
});

export const { toggleCartHidden, addItem } = slice.actions;
export default slice.reducer;
