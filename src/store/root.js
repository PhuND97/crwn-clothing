import { combineReducers } from "redux";
import usersReducer from "./reducer/users";
import cartReducer from "./reducer/cart";
import directoryReducer from "./reducer/directory";
import shopReducer from "./reducer/shop";

export default combineReducers({
	users: usersReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
});
