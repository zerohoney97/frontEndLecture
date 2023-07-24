import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// createSlice메서드를 사용해서 create 함수를 가지고 있는 객체를 만듦
export const counterSlice = createSlice({
  // Slice 구분 이름
  name: "count",
  // 초기값
  initialState: { num: 0 },
  reducers: {
    add: (state) => {
      // 이전 상태가 매개변수로 들어온다.
      state.num += 1;
    },
    remove: (state) => {
      state.num -= 1;
    },
  },
});

// 액션함수를 내보내서 dispatch로 전달해서 액션 발생시킬거임
export const { add, remove } = counterSlice.actions;

export const temp = createAsyncThunk("/temp", async () => {
  // axios
  const resp = await axios.get("http://localhost:8080/main");
  const { data } = resp;
  console.log(data);
  return data;
});

// createSlice메서드를 사용해서 create 함수를 가지고 있는 객체를 만듦
export const counterSlice2 = createSlice({
  // Slice 구분 이름
  name: "count2",
  // 초기값
  initialState: { num: 0, value: "나 상태" },
  reducers: {
    add2: (state) => {
      // 이전 상태가 매개변수로 들어온다.
      state.num += 1;
    },
    remove2: (state) => {
      state.num -= 1;
    },
  },
  //   비동기 처리는 여기에 작성해라
  extraReducers: (builder) => {
    // extraReducers 의builder 매개변수로 받고 케이스를 추가하는데
    // 상태의 케이스 추가 로딩중,완료,실패
    // 상태 케이스를 등록해준다.
    // builder.addCase() 케이스 추가
    // loading 중=> pendig일때
    builder.addCase(temp.pending, (state, action) => {
      state.value = "로딩중임";
    });
    // 다 받아왔을 때 =>fulfilled
    builder.addCase(temp.fulfilled, (state, value) => {
      state.value = "완료";
      state.num+=1
    });
    // 실패했을 때 케이스
    builder.addCase(temp.rejected, (state, action) => {
      state.value = "실패";
    });
  },
});

// 액션함수를 내보내서 dispatch로 전달해서 액션 발생시킬거임
export const { add2, remove2 } = counterSlice2.actions;
