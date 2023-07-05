import React from "react";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div>
      Main
      {/* Link */}
      <Link to={"/shop"}>상점 이동</Link>
    </div>
  );
};

export default Main;
