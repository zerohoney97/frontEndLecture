let userInfo = {
  id: "",
  pw: "",
  nickName: "",
  isLogin: false,
};

const reducer = (state = userInfo, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SIGNUP":
      return {
        ...state,
        id: payload.id,
        pw: payload.pw,
        nickName: payload.nickName,
      };

    default:
      return state;
  }
};

export default reducer;
