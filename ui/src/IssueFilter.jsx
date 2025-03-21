import React from "react";
import { useNavigate } from "react-router-dom";

export default function IssueFilter() {
  const navigate = useNavigate();

  function onChangeStatus(e) {
    const status = e.target.value;
    navigate({
      pathname: "/issues",
      search: status ? `?status=${status}` : "",
    });
  }

  return (
    <div>
      Status:&nbsp;
      <select onChange={onChangeStatus}>
        <option value="">(All)</option>
        <option value="NEW">New</option>
        <option value="ASSIGNED">Assigned</option>
        <option value="FIXED">Fixed</option>
        <option value="CLOSED">Closed</option>
      </select>
    </div>
  );
}
