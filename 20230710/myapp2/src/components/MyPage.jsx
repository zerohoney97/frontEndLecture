import React from "react";
import { useSelector } from "react-redux";

const MyPage = () => {
  const orderData = useSelector((state) => {
    return state.orderInfoInfo;
  });
  console.log(orderData);
  return (
    <div>
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
