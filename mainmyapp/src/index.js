import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./20230726hacker/App.js";
import reportWebVitals from "./reportWebVitals";
// import { Provider } from "react-redux";
// import { store } from "./20230724Toy/src/store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
    <App />
  //  </Provider>
);

// redux-toolkit
// 

reportWebVitals();
