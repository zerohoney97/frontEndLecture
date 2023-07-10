import React from "react";
import { useSelector } from "react-redux";


const CountView2 = () => {
  

//   부모의 props값을 받지 않고
// 전역으로 관리되고 있는 상태의 값을 컴포넌트가 직접 접근 해서 가져온다.
  const count = useSelector((state) => {
    return state.count;
  });
  return <div>{count}</div>;
};

export default CountView2;
