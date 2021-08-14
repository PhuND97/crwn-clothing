import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./root";
import logger from "redux-logger";

export default function () {
	return configureStore({
		reducer,
		middleware: [
			...getDefaultMiddleware({
				serializableCheck: false,
			}),
			logger,
		],
	});
}
