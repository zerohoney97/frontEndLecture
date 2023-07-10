import { createStore, combineReducers } from "redux";
import { userInfoReducer, orderReducer } from "./reducer/reducer";
import {composeWithDevTools} from 'redux-devtools-extension'
const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  orderInfoInfo: orderReducer,
});

const store = createStore(rootReducer,composeWithDevTools());
export default store;
