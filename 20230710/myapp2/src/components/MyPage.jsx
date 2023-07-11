import React from "react";
import { useSelector } from "react-redux";

const MyPage = () => {
  const orderData = useSelector((state) => {
    return state.orderInfoInfo;
  });
  const userrData = useSelector((state) => {
    return state.userInfo;
  });
  console.log(orderData);
  return (
    <div>
      <h1>{userrData.userNickName}님의 주문내역</h1>
      {orderData.map((el) => {
        return (
          <ul>
            <li>{el.foodName}</li>
            <li>{el.date}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default MyPage;
