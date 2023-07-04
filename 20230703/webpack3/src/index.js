import React from "react";
import { createRoot } from "react-dom/client";
// react18부터 react-dom/client에서 createRoot메서드를 가져와야함(권장)
import App from "./app";
const root = createRoot(document.querySelector("#root"));

root.render(<App />);
