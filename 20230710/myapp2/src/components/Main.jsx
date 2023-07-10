import React from "react";
import "./toy.css";
import { useDispatch } from "react-redux";
import {Link} from'react-router-dom'
const Main = () => {
  let menuArr = [
    ["라멘", "스시", "텐동"],
    ["제육덮밥", "김밥", "치킨"],
    ["짜장면", "짬뽕", "볶음밥"],
  ];
  const dispatch = useDispatch();
  const orderHandler = (data) => {
    const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const currentTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    dispatch({ type: "ORDER", payload: { foodName: data, date: currentTime } });
  };
  return (
    <div className="main-container">
      {menuArr.map((el) => {
        return (
          <div className="row">
            {el.map((el2) => {
              return (
                <div
                  className="item"
                  onClick={() => {
                    orderHandler(el2);
                  }}
                >
                  {el2}
                </div>
              );
            })}
          </div>
        );
      })}
      <Link to={'/mypage'}>마이 페이지 이동하기</Link>
    </div>
  );
};

export default Main;
