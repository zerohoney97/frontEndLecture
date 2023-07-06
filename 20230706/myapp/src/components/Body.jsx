import React from "react";
import { Link, useNavigate } from "react-router-dom";
// Link는 a태그와 같은 역할을 해준다.
// 페이지가 새로고침 되지 않고 url만 변경이 되는것

// react hook 함수 useNavigate 페이지 전환을 위해 사용
const Body = ({ path, name, login, item }) => {
  const nav = useNavigate();

  return (
    <div className="body">
      <Link to={path}>{name} 페이지 이동</Link>
      <button
        onClick={() => {
          nav(path);
        }}
      >
        {name} nav를 이용해 이동
      </button>
      {item && item.id ? <div>{item.id}번</div> : null}
      {item && item.num ? <div>{item.num}번</div> : null}
      {item && item.name ? <div>이름:{item.name}번</div> : null}
      {login ? <div>로그인 되었음</div> : <div>로그인 안되었음</div>}
    </div>
  );
};

export default Body;
