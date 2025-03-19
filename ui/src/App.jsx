/* eslint-disable import/no-import-module-exports */
import React from "react";
import ReactDOM from "react-dom/client";
import IssueList from "./IssueList.jsx";

if (module.hot) {
  module.hot.accept();
}

ReactDOM.createRoot(document.getElementById("content")).render(<IssueList />);
