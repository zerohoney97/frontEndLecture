import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
const Count2 = () => {
  // useDispatch
  const dispatch = useDispatch();

  //   상태 패턴 관리할 땐 대문자로 쓰자
  const handlerAdd = () => {
    dispatch({ type: "LOGIN", payload: true });
  };

  const handlerRemove = () => {
    dispatch({ type: "LOGOUT", payload: false });
  };

  return (
    <div>
      <button onClick={handlerAdd}>로그인</button>
      <button onClick={handlerRemove}>로그아웃</button>
    </div>
  );
};

export default Count2;
