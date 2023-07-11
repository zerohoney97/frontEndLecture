import axios from "axios";

const login = (data) => {
  return async (dispatch) => {
    const userData = await axios.get(
      "http://localhost:8080/login/getUserData",
      {
        params: {
          data,
        },
      }
    );
    console.log(userData);
    dispatch({
      type: "LOGIN",
      payload: {
        id: userData.data.user_id,
        pw: userData.data.user_pw,
        nickName: userData.data.user_nickname,
        isLogin: true,
      },
    });
  };
};

const userMiddleWareFunction = {
  login,
};

export default userMiddleWareFunction;
