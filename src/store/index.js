import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import paymentsReducer from "./slices/payments/paymentsSlice";
import { createLogger } from "redux-logger";

const logger = createLogger({
	collapsed: true,
});

export default configureStore({
	reducer: {
		payments: paymentsReducer,
	},
	middleware: [...getDefaultMiddleware(), logger],
});
