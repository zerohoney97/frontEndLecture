import React from "react";
import { useDispatch } from "react-redux";
// 전역 상태에 있는 값을 업데이트 해줄 것이다.
// useDispatch 액션을 보낼 수 있게 react hook 함수를 사용하자.
const Count = () => {
  // useDispatch
  const dispatch = useDispatch();
  //   dispatch 함수를 사용해서 action을 던질 수 있다.
  //   dispatch 함수를 사용할 때 매개변수로 객체를 전달 해주자
  //   객체의 규칙 {type,payload}
  // type: 동작시킬 행동의 이름
  // payload: 선택사항, 있어도되고 없어도 됨. 상태를 변경할 때 데이터 전달이 필요할 경우 사용

  const handlerAdd = () => {
    dispatch({ type: "sushi" });
  };
  const handlerRemove = () => {
    dispatch({ type: "ramen" });
  };
  return (
    <div>
      <button onClick={handlerAdd}>초밥</button>
      <button onClick={handlerRemove}>라멘</button>
    </div>
  );
};

export default Count;
