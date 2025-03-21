import React from "react";
import { Link } from "react-router-dom";

export default function IssueFilter() {
  return (
    <div>
      <Link to="/issues">All Issues</Link>
      {" | "}
      <Link to={{ pathname: "/issues", search: "?status=NEW" }}>
        New Issues
      </Link>
      {" | "}
      <Link to={{ pathname: "/issues", search: "?status=ASSIGNED" }}>
        Assigned Issues
      </Link>
    </div>
  );
}
