import { combineReducers } from "redux";
import usersReducer from "./reducer/users";
import cartReducer from "./reducer/cart";

export default combineReducers({
	users: usersReducer,
	cart: cartReducer,
});
