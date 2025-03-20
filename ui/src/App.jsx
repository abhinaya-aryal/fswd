/* eslint-disable import/no-import-module-exports */
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import Page from "./Page.jsx";

if (module.hot) {
  module.hot.accept();
}

const element = (
  <HashRouter>
    <Page />
  </HashRouter>
);

ReactDOM.createRoot(document.getElementById("content")).render(element);
