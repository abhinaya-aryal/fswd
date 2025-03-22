import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import graphQLFetch from "./graphQLFetch.js";

export default function IssueDetail() {
  const [issue, setIssue] = useState({});
  const { id } = useParams();
  const issueId = parseInt(id, 10);

  const loadData = useCallback(async () => {
    const query = `
      query issue($id: Int!) {
        issue(id: $id) {
          id
          description
        }
      }
    `;
    const data = await graphQLFetch(query, { id: issueId });
    if (data) {
      setIssue(data.issue);
    } else {
      setIssue({});
    }
  }, [issueId]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div>
      <h3>Description</h3>
      <pre>{issue.description}</pre>
    </div>
  );
}
