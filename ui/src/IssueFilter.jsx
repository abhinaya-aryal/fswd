import React from "react";

export default function IssueFilter() {
  return (
    <div>
      <a href="/#/issues">All Issues</a>
      {" | "}
      <a href="/#/issues?status=NEW">New Issues</a>
      {" | "}
      <a href="/#/issues?status=ASSIGNED">Assigned Issues</a>
    </div>
  );
}
