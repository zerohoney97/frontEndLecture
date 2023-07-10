import React from "react";
import { useSelector } from "react-redux";
import CountView2 from "./CounterView2";
const CountView = () => {
  // 저장소 값을 가져와 보자
  // reacthook 함수
  // useSelector 전역 상태값을 조회 할 때 사용
  //   상태에서 카운트를 반환
  // count가 변경되었을 때 리렌더링 된다.
  // count값을 상태로 보고있음
  const count = useSelector((state) => {
    return state.count;
  });
  return (
    <div>
      {count}
      <CountView2 />
    </div>
  );
};

export default CountView;
