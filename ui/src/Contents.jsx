import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import IssueList from "./IssueList.jsx";
import IssueReport from "./IssueReport.jsx";
import IssueEdit from "./IssueEdit.jsx";

function NotFound() {
  return <h1>Page Not Found</h1>;
}

export default function Contents() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/issues" />} />
      <Route path="/issues/*" Component={IssueList} />
      <Route path="/edit/:id" Component={IssueEdit} />
      <Route path="/report" Component={IssueReport} />
      <Route path="*" Component={NotFound} />
    </Routes>
  );
}
