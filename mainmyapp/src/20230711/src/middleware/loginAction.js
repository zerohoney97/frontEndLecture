function login(id, pw) {
  return (dispatch) => {
    // 데이터베이스 요청 응답과정이 이곳에 들어가면 된다.
    // await
    // dispatch를 딜레이 시키기 위해서
    dispatch({ type: "LOGIN", payload: { id, pw } });
  };
}

function logout(params) {
  return (dispatch) => {
    dispatch({ type: "LOGOUT" });
  };
}

// 새로운 방식으로 내보냄

export const logins = {
  login,
  logout,
};

//   import{ logins}
