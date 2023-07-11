let init = {
  id: "",
  pw: "",
  isLogin: false,
};

function reducer(state = init, action) {
  // reducer함수는 무조건 반환값이 있어야 한다.
  //   리듀서 함수에서 반환된 값이 store에 업데이트=> 최신화
  // 단, 값만 바뀌면 인식을 못함, 주소가 변해야함.
  //   새로운 주소를 만들어서 반환해야함

  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return {
        ...state,
        id: payload.id,
        pw: payload.pw,
        isLogin: true,
      };
    case "LOGOUT":
      return { ...state, id: "", pw: "", isLogin: false };

    default:
      return { ...state };
  }
}

export default reducer;
