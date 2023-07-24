import { configureStore } from "@reduxjs/toolkit";
import { counterSlice, counterSlice2 } from "../features/countSlice";
// 저장소 생성
export const store = configureStore({
  reducer: {
    count: counterSlice.reducer,
    count2: counterSlice2.reducer,
  },
});
