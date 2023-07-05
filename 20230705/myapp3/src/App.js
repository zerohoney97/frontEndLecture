import "./App.css";
import Main from "./Main";
// 3x3 지뢰 찾기

// 랜덤한 위치 3개의 지뢰 넣고
// 타일 컴포넌트를 클릭하면 지뢰인지 아닌지 보여주기
// 지뢰를 다 피해서 다 열었을 때는 게임 클리어 아니면 게임 오버
function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
