import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonSlice";
import loadingReducer from "./loadingSlice";

export const store = configureStore({
	reducer: { pokemonReducer, loadingReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
