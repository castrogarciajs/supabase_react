import React from "react";
import ReactDOM from "react-dom/client";
import { Context } from "./context/Context";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// deploy :) --> Finally
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Context>
      <App />
    </Context>
  </BrowserRouter>
);
