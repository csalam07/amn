import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkTheme: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const selectTheme = (state) => state.theme.darkTheme;

export default themeSlice.reducer;
