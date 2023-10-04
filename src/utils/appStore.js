import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// contains small reducers from different slices
const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

export default appStore;