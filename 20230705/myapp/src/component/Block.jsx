import React from "react";

const Block = ({ data, name, result }) => {
  let temp = "";
  if (name === "유저") {
    temp = result;
  } else {
    temp =
      result === "무승부"
        ? "무승부"
        : result === "이겨따!"
        ? "져따!"
        : "이겨따!";
  }
  return (
    <div className="block">
      <div>{name}</div>
      <div style={{ width: "43%", overflow: "hidden" }}>
        <img
          // 값이 없으면 페이지가 터지기 때문에 조건부 랜더링, 값이 있으면 값을 사용하라는 뜻 data가 있으면 data.img
          src={data && data.img}
          alt=""
          style={data && data.imgStyle}
        />
      </div>
      {/* <div style={{ width: "43%", overflow: "hidden" }}>
        <img src={data && data.img} alt="" style={data && data.imgStyle} />
      </div>
      <div style={{ width: "43%", overflow: "hidden" }}>
        <img src={data && data.img} alt="" style={data && data.imgStyle} />
      </div> */}
      <div>{result === "" ? "" : temp}</div>
    </div>
  );
};

export default Block;
