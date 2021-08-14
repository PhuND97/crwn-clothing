import { combineReducers } from "redux";
import usersReducer from "./users";
import cartReducer from "./cart";

export default combineReducers({
	users: usersReducer,
	cart: cartReducer,
});
