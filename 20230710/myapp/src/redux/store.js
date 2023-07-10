// 저장소 만들기

import { createStore } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

// 스토어의 전역상태가 변화하는걸 개발 모드로 확인가능한 툴
let store = createStore(reducer, composeWithDevTools());

export default store;
