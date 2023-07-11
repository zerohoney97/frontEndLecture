import React from "react";
import { useSelector } from "react-redux";

const Main = () => {
  const userInfo = useSelector((state) => state.userReducer);
  console.log(userInfo)
  return <div>
    {userInfo && userInfo.nickName}님 안녕하세요!
  </div>;
};

export default Main;
