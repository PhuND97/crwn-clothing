import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "users",
	initialState: { currentUser: null },
	reducers: {
		setCurrentUser: (users, action) => {
			users.currentUser = action.payload;
		},
	},
});

export const { setCurrentUser } = slice.actions;
export default slice.reducer;
