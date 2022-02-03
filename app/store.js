import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import themeReducer from "../slices/themeSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    theme: themeReducer,
  },
});
