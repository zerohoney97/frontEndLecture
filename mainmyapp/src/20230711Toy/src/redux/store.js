import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducer/user";
import boardReducer from "./reducer/board";
const rootReducer = combineReducers({ userReducer,boardReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
