import React from "react";
import { Body, Header } from "../components";

const Shop = ({ login }) => {
  return (
    <div>
      <Header name={"shop"} />
      <Body name={"메인"} path={"/"} login={login} />
      <Body name={"상세"} path={"/detail"} login={login} />

      <Body name={"1번 상품으로 이동"} path={"/detail/0/10/shirts"} item={{id:0,num:10,name:'shirts'}} />
      <Body name={"2번 상품으로 이동"} path={"/detail/1/11/hat"} item={{id:1,num:11,name:'hat'}}/>
      <Body name={"3번 상품으로 이동"} path={"/detail/2/13/gloves"}item={{id:2,num:13,name:'gloves'}} />
      <Body name={"4번 상품으로 이동"} path={"/detail/3/16/shoes"} item={{id:3,num:16,name:'shoes'}}/>
    </div>
  );
};

export default Shop;
