import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
};

export const loadingSlice = createSlice({
	name: "loading",
	initialState,
	reducers: {
		setLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
			state.isLoading = action.payload.isLoading;
		},
	},
});

export const { setLoading } = loadingSlice.actions;

const loadingReducer = loadingSlice.reducer;
export default loadingReducer;
