import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducer/user";

const rootReducer = combineReducers({ userReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
