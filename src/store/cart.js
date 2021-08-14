import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "cart",
	initialState: { hidden: false },
	reducers: {
		toggleCartHidden: (cart, action) => {
			cart.hidden = !cart.hidden;
		},
	},
});

export const { toggleCartHidden } = slice.actions;
export default slice.reducer;
