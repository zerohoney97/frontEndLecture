let userInfo = {
  id: "",
  nickName: "",
  isLogin: false,
};

const reducer = (state = userInfo, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        id: payload.id,
        nickName: payload.nickName,
        isLogin:true
      };

    default:
      return state;
  }
};

export default reducer;
