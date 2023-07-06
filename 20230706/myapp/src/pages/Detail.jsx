import React from "react";
import { Header } from "../components";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
// useLocation: hook함수 함수 현재 브라우저의 url 위치 값을 가져오는데 사용
// useParams: hook함수 함수 url에 params 값을 접근하는데 사용 객체의 형태로 가져올 수 있다.
// useSearchParams: hook함수 url의 쿼리값을 가져올 때 사용 문자열을 해석해서 쿼리 매개변수의 값을 가져온다.

const Detail = () => {
  let temp = [
    { num: 10, name: "셔츠" },
    { num: 20, name: "바지" },
    { num: 30, name: "모자" },
    { num: 40, name: "장갑" },
  ];
  const location = useLocation();
  const useParam = useParams();
  console.log(location);
  console.log(useParam);
  const [query, setQuery] = useSearchParams();
  // query.get() 메서드: 매개변수로 쿼리의 key로 value를 가져올 수 있다.
  console.log(query.get("size"));
  return (
    <div>
      <Header name={"detail"} />
      <div>{temp && temp[useParam.id].num}번</div>
      <div> 이름:{temp && temp[useParam.id].name}</div>
    </div>
  );
};

export default Detail;
