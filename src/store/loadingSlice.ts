import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Loading {
	isLoading: boolean;
}

const initialState: Loading = {
	isLoading: false,
};

export const loadingSlice = createSlice({
	name: "loading",
	initialState,
	reducers: {
		setLoading: (state, action: PayloadAction<Loading>) => {
			state.isLoading = action.payload.isLoading;
		},
	},
});

export const { setLoading } = loadingSlice.actions;

const loadingReducer = loadingSlice.reducer;
export default loadingReducer;
