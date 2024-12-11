/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cardData: null,
	loading: false,
	ratingAndReview: null,
};

const authSlice = createSlice({
	name: "card",
	initialState: initialState,
	reducers: {
		setCardData(state, value) {
			state.cardData = value.payload;
		},
		setLoading(state, value) {
			state.loading = value.payload;
		},
		setRatingAndReview(state, value) {
			state.ratingAndReview = value.payload;
		},
	},
});

export const { setCardData, setLoading, setRatingAndReview } = authSlice.actions;

export default authSlice.reducer;
