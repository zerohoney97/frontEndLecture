import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Detail, Login, Main, MyPage, Shop } from "./pages/index";
import { useState } from "react";
function App() {
  const [login, setLogin] = useState(false);
  const Redirect = () => {
    // Navigate 브라우저의 경로를 바꿔준다.
    // 페이지 리다이렉트 가능
    // mypage는 보호받는 페이지
    // 로그인이 안되어있는 상태면 메인 페이지로 이동 시킨다.
    return login == true ? <MyPage login={login} /> : <Navigate to={'/'}/>;
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main login={login} />} />
        <Route
          path="/login"
          element={<Login login={login} setLogin={setLogin} />}
        />
        <Route path="/shop" element={<Shop login={login} />} />
        {/* 매개변수 데이터베이스의 id는 primarykey,num은 상품번호 ,name은 이름 모두 Params처럼 전달 가능 */}
        <Route path="/detail/:id/:num/:name" element={<Detail login={login} />} />
        {/* 로그인이 돼있을 때만 mypage접근 가능 */}
        <Route path="/mypage" element={<Redirect />} />
      </Routes>
    </div>
  );
}

export default App;
