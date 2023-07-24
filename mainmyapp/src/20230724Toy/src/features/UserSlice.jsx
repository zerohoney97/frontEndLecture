import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const insertUserData = createAsyncThunk(
  "/insertUserData",
  async (payload) => {
    const res = await axios.post("http://localhost:8080/user/signUp", {
      id: payload.id,
      pw: payload.pw,
      nickName: payload.nickName,
    });
    console.log("dd");
    return res.data;
  }
);

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    id: "",
    user_id: "",
    user_nickname: "",
    isLogin: false,
    status: "",
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(insertUserData.pending, (state, action) => {
      state.status = "loading";
      console.log(action.payload, "p");
    });
    builder.addCase(insertUserData.fulfilled, (state, action) => {
      const { id, pw, nickName } = action.payload;
      state.id = id;
      state.pw = pw;
      state.nickName = nickName;
      state.isLogin = true;
      state.status='완료'
      console.log(action.payload, "f");
    });
    builder.addCase(insertUserData.rejected, (state, action) => {
      console.log(action.payload, "r");
    });
  },
});
