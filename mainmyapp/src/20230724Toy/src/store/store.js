import { configureStore } from "@reduxjs/toolkit";
import { boardSlice } from "../features/BoardSlice";
import { userSlice } from "../features/UserSlice";
const store = configureStore({
  reducer: {
    boardReducer: boardSlice.reducer,
    userReducer: userSlice.reducer,
  },
});

export { store };
