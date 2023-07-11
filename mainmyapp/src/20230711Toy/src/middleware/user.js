import axios from "axios";
const signUp = (data) => {
  return async (dispatch) => {

    console.log("디스패치ㅁㄴㅇ");
    await axios
      .post("http://localhost:8080/login/save", data)
      .then(() => {
        console.log("저장성공");
      })
      .catch((err) => {
        console.log(err);
      });

    dispatch({
      type: "SIGNUP",
      payload: { id: data.id, pw: data.pw, nickName: data.nickName },
    });
  };
};

const userMiddleWareFunction = {
  signUp,
};

export default userMiddleWareFunction;
