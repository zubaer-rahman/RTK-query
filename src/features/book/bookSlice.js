import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchInput: "",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { setSearchInput } = bookSlice.actions;
export default bookSlice.reducer;
