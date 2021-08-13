import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./index";
import logger from "redux-logger";

export default function () {
	return configureStore({
		reducer,
		middleware: [...getDefaultMiddleware(), logger],
	});
}
