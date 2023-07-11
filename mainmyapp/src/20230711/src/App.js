import React, { useEffect, useState } from "react";
import LoginBox from "./components/layout/loginBox";
import { weather, logins } from "./middleware";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const weatherData = useSelector((state) => state.weather.weatherData);
  const isLogin = useSelector((state) => {
    return state.login.isLogin;
  });
  const userName = useSelector((state) => {
    return state.login.id;
  });

  const login = () => {
    dispatch(logins.login(id, pw));
  };

  const logout = () => {
    dispatch(logins.logout());
  };

  const getWeather = (city) => {
    dispatch(weather.getWeather(city));
  };

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);
  useEffect(() => {
    console.log(isLogin, userName);
  }, [isLogin, userName]);
  useEffect(() => {
    console.log(id);
    console.log(pw);
  }, [id, pw]);

  return (
    <div>
      {/* <LoginBox></LoginBox> */}
      <label>도시 이름</label> <br />
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <br />
      <button
        onClick={() => {
          getWeather(name);
        }}
      >
        날씨 검색
      </button>
      <div>
        지금 여기는 {weatherData && weatherData.data?.name}날씨는:
        {weatherData && weatherData?.data?.weather[0]?.main}
      </div>
      <br />
      <label>아이디</label>
      <input
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <br />
      <label>비밀번호</label>
      <input
        onChange={(e) => {
          setPw(e.target.value);
        }}
      />
      <br />
      <button onClick={login}>로그인</button>
      <div>로그인 됨?</div>
      {isLogin ? (
        <>
          {userName}유저가 로그인 했어<button onClick={logout}>로그아웃</button>{" "}
        </>
      ) : (
        <> 로그인 안됨 </>
      )}
    </div>
  );
};

export default App;
// api를 가져와서 스토어의 상태값을 바꿀 때 비동기 처리를 하기 위해서 미들웨어를 추가해야한다.

// 클래스명이 겹치지 않는다.
// 스타일에 관랸되어서 props로 값을 전달해서 스타일 값을 적용 시킬 수 있다.
// SCSS
// npm install styled-components

// redux-thunk
// api를 요청하고 처리가 된 뒤에 상태를 변경하기 위해서
// dispatch를 지연시킨다. actions라는 함수를 만들 것이다.

// thunk 미들웨어로 추가하는 방법

// dispatch함수를 실행할 때 매개변수로 객체를 넘기느냐 함수를 넘기느냐의 차이

// 날씨 api를 가지고 와서 사용해보자

// a086ae459eac1a3609fed1f0c6c90f08

// 우리가 사용하는 개발 환경=> npm start
// 실제 배포할 때는 npm run build
// 빌드된 파일 배포

// 게시판 구현
// 백엔드 구현
// 글 추가 ,삭제,수정,
// express 서버 사용해서 서버 구축 게시판 CRUD
// token까지 사용해서 로그인 인증 까지
