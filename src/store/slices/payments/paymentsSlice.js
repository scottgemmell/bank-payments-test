
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getPayments, getMorePayments } from "../../../api/payments";
import { tryRequest } from "../../../api/helpers";

export const fetchPayments = createAsyncThunk(
	"/Payments",
	(args, { rejectWithValue }) =>
	  tryRequest(() => getPayments(args), rejectWithValue),
  );

  export const fetchMorePayments = createAsyncThunk(
	"/Payments/More",
	(args, { rejectWithValue }) =>
	  tryRequest(() => getMorePayments(args), rejectWithValue),
  );


export const slice = createSlice({
	name: "payments",
	initialState: {
		metaData: {
			hasMoreElements: null,
			nextPageIndex: null,
		},
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

		[fetchMorePayments.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[fetchMorePayments.fulfilled]: (state, action) => {
			state.loading = false;
			state.metaData = action.payload.metaData;
			state.results = [...state.results, ...action.payload.results];
			state.error = null;
		},
		[fetchMorePayments.rejected]: (state, action) => {
			state.loading = false;
			state.error = true; // action.payload
		},
	}
});

export const paymentsData = state => state.payments;
export const selectedPayments = state => state.payments.results;
export const filteredPayments = state => state.payments.results.filter(payment => payment.paymentStatus === "P");

export default slice.reducer;
