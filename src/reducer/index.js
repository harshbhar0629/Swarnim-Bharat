/** @format */

import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import cardReducer from "../slices/cardSlice";

const rootReducer = combineReducers({
	// add all reducer
	auth: authReducer,
	cart: cardReducer,
});

export default rootReducer;
