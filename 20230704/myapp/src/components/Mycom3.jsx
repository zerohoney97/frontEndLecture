// 함수형 컴포넌트를 만들어보자
// rafce
import React, { useEffect, useState } from "react";
// 함수형 컴포넌트의 state와 props의 값은 어떻게 관리 해야하나
// react hook => useState,useEffect
// useState 상태값을 만들어 준다. 상태값을 수정할 때 사용할 메서드를 만들어준다.
// useEffect 라이프 사이클 지원

// 함수형 컴포넌트의 props는 함수의 매개변수로 전달된다.
const Mycom3 = ({numb}) => {
  console.log(numb);
  let count = 0;
  // useState는 배열이고 첫번째 반환값=>상태변수, 두번째 반환값=>상태변수를 update 할 setState함수
  const [num, setNum] = useState({ number: 1, asd: "23" });
  const [active, setActive] = useState(false);
  //  useEffect라이프 사이클 함수
  // useEffect 첫번째 매개변수, 함수를 전달한다. 두번째 매개변수, 배열을 전달한다.
  //   첫번째로 전달한 함수를 두번째 매개변수의 상태를 확인하고 실행시킨다.
  // []빈 배열일 경우 componentDidMount
  // [num] 배열에 전달된 값이 수정된경우 다시 실행(componentDidMount,componentDidUpdate)

  useEffect(() => {
    // 제어문을 사용해서 만들어주면 된다.
    console.log("componentDidMount,componentDidUpdate");

    // 상태가 변화한 이후의 값을 사용하는 라이프 사이클 함수
  }, [num.number]);

  useEffect(() => {
    console.log("상태:" + active);
  }, [active]);

  useEffect(() => {
    // active,num 둘 중 하나라도 변경이 되면 업데이트 함수 실행
    console.log("num이나 active가 변경됐어");
    console.log("둘 중 하나");
  }, [num, active]);

  function clickHandler() {
    setNum({ number: num.number + 1 });
    // 상태를 변경
    // 상태의 값을 사용하는 이유
    // 이전의 상태값이 보관
    // 상태값이 계속 유지

    // 상태값을 수정하고 바로 값을 사용하면 안됨.
  }

  function activeHandler() {
    setActive(!active);
  }

  return (
    <div>
      Mycom3{num.number}
      <button onClick={clickHandler}>qj</button>
      <button onClick={activeHandler}>활성화/비활성화</button>
    </div>
  );
};



export default Mycom3;
