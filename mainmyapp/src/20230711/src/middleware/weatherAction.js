// 요청 응답을 처리할 때
// axios 사용
// 요청 응답 처리를 해줄겁니다.

import axios from "axios";

function getWeather(city) {
  return async (dispatch) => {
    // api작업 데이터 요청
    const data = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a086ae459eac1a3609fed1f0c6c90f08`
    );
    dispatch({ type: "GET_WHEATER", payload: data });
    // 요청의 처리가 끝나면
  };
}

export const weather = { getWeather };
