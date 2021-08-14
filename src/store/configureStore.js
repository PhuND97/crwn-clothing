import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./root";
import logger from "redux-logger";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default function () {
	return configureStore({
		reducer: persistedReducer,
		middleware: [
			...getDefaultMiddleware({
				serializableCheck: false,
			}),
			logger,
		],
	});
}
