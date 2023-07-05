import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Main, Login, Shop } from "./pages";
function App() {
  return (
    <div className="App">
      {/* {조건부 랜더링 Routes가 Route들의 부모 컴포넌트} */}
      {/* Route컴포넌트는 속성을 두개 주자 path,element(브라우저의 경로,컴포넌트
        path경로로 들어오면 해당 컴포넌트(element)를 보여줌 */}
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>
    </div>
  );
}

export default App;
