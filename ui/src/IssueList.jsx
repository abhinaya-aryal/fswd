import React, { useEffect, useState, useCallback } from "react";
import graphQLFetch from "./graphQLFetch.js";
import IssueFilter from "./IssueFilter.jsx";
import IssueTable from "./IssueTable.jsx";
import IssueAdd from "./IssueAdd.jsx";

export default function IssueList() {
  const [issues, setIssues] = useState([]);

  const loadData = useCallback(async () => {
    const query = `
      query {
        issueList {
          id
          title
          status
          owner
          created
          effort
          due
        }
      }
    `;

    const data = await graphQLFetch(query);
    if (data) {
      setIssues(data.issueList);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const createIssue = useCallback(
    async (issue) => {
      const query = `mutation issueAdd($issue: IssueInput!) {
      issueAdd(issue: $issue)  {
        id
      }
    }`;

      const data = await graphQLFetch(query, { issue });
      if (data) {
        loadData();
      }
    },
    [loadData],
  );

  return (
    <>
      <h1>Issue Tracker</h1>
      <IssueFilter />
      <hr />
      <IssueTable issues={issues} />
      <hr />
      <IssueAdd createIssue={createIssue} />
    </>
  );
}
