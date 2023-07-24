import React from "react";
import { produce } from "immer";
import { add, remove, add2, remove2, temp } from "./src/features/countSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.count.num);
  const num2 = useSelector((state) => state.count2.num);
  const value = useSelector((state) => state.count2.value);
  const state = {
    value: 0,
    arr: [],
  };
  // 값이 변해도 바뀐것을 react에선 감지를 못하기 때문에
  // 불변성을 지킨다라는 내용이
  // 기존값을 직접 수정하지 않고 새로운 값을 만들어 내는 것
  const nextState = produce(state, (dra) => {
    // state를 새로 가져온거임
    // 즉,기존 객체를 가져와 복사를 한 상태이기 때문에 우리가 새로운 객체를 생성하면 nextState에 반환됨
    // {...state,value:state.value+1}
    dra.value += 1;
    console.log(dra.value);
    dra.arr.push("쉬는시간");
  });
  console.log(state);
  console.log(nextState);

  return (
    <div>
      <div>
        숫자:{num}
        <button
          onClick={() => {
            dispatch(add());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(remove());
          }}
        >
          -
        </button>
      </div>
      <div>
        로딩 완료 여부:{value} <br/>
        숫자2:{num2}
        <button onClick={()=>{
          dispatch(temp())
        }}>포켓몬 정보 가져오기</button>
        <button
          onClick={() => {
            dispatch(add2());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(remove2());
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default App;

// react에서 불변성을 유지하는 코드를 쉽게 작성할 수 있게 도와주는 라이브러리
// npm i immer

// react에서 기본적으로 부모에서 받은 props를 내부의 상태인 state가 변경되었을 때 다시 리렌더링을 하는
// 이 때도 props와 state의 변경을 불변성을 이용해서 감지한다.
// 객체의 참조를 복사한다는 점을 이용해서 비교하는 얕은 비교를 통해 변경이 이루어진다.
