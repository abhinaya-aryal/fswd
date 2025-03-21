import React, { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import graphQLFetch from "./graphQLFetch.js";
import IssueFilter from "./IssueFilter.jsx";
import IssueTable from "./IssueTable.jsx";
import IssueAdd from "./IssueAdd.jsx";

export default function IssueList() {
  const [searchParams] = useSearchParams();
  const [issues, setIssues] = useState([]);

  const loadData = useCallback(async () => {
    const filter = Object.fromEntries(searchParams.entries());
    const query = `
      query issueList($status: StatusType) {
        issueList(status: $status) {
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

    const data = await graphQLFetch(query, filter);
    if (data) {
      setIssues(data.issueList);
    }
  }, [searchParams]);

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
