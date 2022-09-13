
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getPayments } from "../../../api/payments";
import { tryRequest } from "../../../api/helpers";

export const fetchPayments = createAsyncThunk(
	"/payments",
	(args, { rejectWithValue }) =>
	  tryRequest(() => getPayments(args), rejectWithValue),
  );


export const slice = createSlice({
	name: "payments",
	initialState: {
		metaData: null,
		results: []
	},
	reducers: {
		clearResults: (state) => {
			state.results = []
		},
	},
	extraReducers: {
		[fetchPayments.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[fetchPayments.fulfilled]: (state, action) => {
			state.loading = false;
			state.metaData = action.payload.metaData;
			state.results = action.payload.results;
			state.error = null;
		},
		[fetchPayments.rejected]: (state, action) => {
			state.loading = false;
			state.error = true; // action.payload
		},
	}
});

export const selectPayments = state => state.payments;

export default slice.reducer;
