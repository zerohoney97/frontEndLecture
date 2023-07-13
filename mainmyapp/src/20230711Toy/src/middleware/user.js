import axios from "axios";

const login = (data) => {
  return async (dispatch) => {
    const userData = await axios.get(
      "http://localhost:8080/login/getUserData",
      {
        withCredentials: true,
        params: {
          data,
        },
      }
    );
    console.log(userData);
    if (userData.data === "invalidID") {
      alert("잘못된 아이디 입니다!");
    } else if (userData.data === "invalidPW") {
      alert("잘못된 비밀번호 입니다");
    } else {
      dispatch({
        type: "LOGIN",
        payload: {
          id: userData.data.id,
          userId: userData.data.user_id,
          nickName: userData.data.user_nickname,
        },
      });
    }
  };
};

const userMiddleWareFunction = {
  login,
};

export default userMiddleWareFunction;
