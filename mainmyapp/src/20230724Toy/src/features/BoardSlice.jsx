import { createSlice } from "@reduxjs/toolkit";

export const boardSlice = createSlice({
  name: "boardSlice",
  initialState: {
    name: "",
    content: "",
    view: 0,
    date: "",
  },
  reducers: {
    insert: (state, action) => {
      state.name = action.name;
      state.content = action.content;
      state.date = action.date;
    },
    addViewCount: (state, action) => {
      state.view += 1;
    },
  },
});

export const { insert, addViewCount } = boardSlice.actions;
