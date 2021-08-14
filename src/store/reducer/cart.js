import { createSelector, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "cart",
	initialState: { hidden: false, cartItems: [] },
	reducers: {
		toggleCartHidden: (cart, action) => {
			cart.hidden = !cart.hidden;
		},
		addItem: (cart, action) => {
			const existingCartItem = cart.cartItems.find(
				(cartItem) => cartItem.id === action.payload.id
			);

			if (existingCartItem) {
				cart.cartItems.map((cartItem) =>
					cartItem.id === action.payload.id
						? (cartItem.quantity += 1)
						: cartItem
				);
			} else {
				cart.cartItems.push({ ...action.payload, quantity: 1 });
			}
		},
		removeItem: (cart, action) => {
			const indexOfItem = cart.cartItems.findIndex(
				(cartItem) => cartItem.id === action.payload.id
			);
			cart.cartItems.splice(indexOfItem, 1);
		},
		increaseQuantity: (cart, action) => {
			const indexOfItem = cart.cartItems.findIndex(
				(cartItem) => cartItem.id === action.payload.id
			);
			cart.cartItems[indexOfItem].quantity += 1;
		},
		decreaseQuantity: (cart, action) => {
			const indexOfItem = cart.cartItems.findIndex(
				(cartItem) => cartItem.id === action.payload.id
			);

			if (cart.cartItems[indexOfItem].quantity === 1) {
				cart.cartItems.splice(indexOfItem, 1);
			} else {
				cart.cartItems[indexOfItem].quantity -= 1;
			}
		},
	},
});

export const {
	toggleCartHidden,
	addItem,
	removeItem,
	increaseQuantity,
	decreaseQuantity,
} = slice.actions;
export default slice.reducer;

// Selector
export const getCartItems = createSelector(
	(state) => state.cart,
	(cart) => cart.cartItems
);

export const getItemQuantities = createSelector(
	(state) => state.cart.cartItems,
	(cartItems) =>
		cartItems.reduce(
			(accumulateQuantity, cartItem) =>
				accumulateQuantity + cartItem.quantity,
			0
		)
);

export const getItemTotal = createSelector(
	(state) => state.cart.cartItems,
	(cartItems) =>
		cartItems.reduce(
			(accumulateTotal, cartItem) =>
				accumulateTotal + cartItem.quantity * cartItem.price,
			0
		)
);

export const getCartHidden = createSelector(
	(state) => state.cart,
	(cart) => cart.hidden
);
