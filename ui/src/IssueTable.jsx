import React from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";

function IssueRow({ issue, closeIssue, index, deleteIssue }) {
  const [searchParams] = useSearchParams();
  const search = searchParams.toString();

  return (
    <tr>
      <td>{issue.id}</td>
      <td>{issue.status}</td>
      <td>{issue.owner}</td>
      <td>{issue.created.toDateString()}</td>
      <td>{issue.effort}</td>
      <td>{issue.due ? issue.due.toDateString() : ""}</td>
      <td>{issue.title}</td>
      <td>
        <Link to={`/edit/${issue.id}`}>Edit</Link>
        {" | "}
        <NavLink to={{ pathname: `/issues/${issue.id}`, search }}>
          Select
        </NavLink>
        {" | "}
        <button
          type="button"
          onClick={() => {
            closeIssue(index);
          }}
        >
          Close
        </button>
        {" | "}
        <button
          type="button"
          onClick={() => {
            deleteIssue(index);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default function IssueTable({ issues, closeIssue, deleteIssue }) {
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Owner</th>
          <th>Created</th>
          <th>Effort</th>
          <th>Due Date</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {issues.map((issue, index) => (
          <IssueRow
            key={issue.id}
            issue={issue}
            closeIssue={closeIssue}
            index={index}
            deleteIssue={deleteIssue}
          />
        ))}
      </tbody>
    </table>
  );
}
