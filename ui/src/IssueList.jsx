import React, { useEffect, useState, useCallback } from "react";
import { useSearchParams, Routes, Route } from "react-router-dom";
import graphQLFetch from "./graphQLFetch.js";
import IssueFilter from "./IssueFilter.jsx";
import IssueTable from "./IssueTable.jsx";
import IssueAdd from "./IssueAdd.jsx";
import IssueDetail from "./IssueDetail.jsx";

export default function IssueList() {
  const [searchParams] = useSearchParams();
  const [issues, setIssues] = useState([]);

  const loadData = useCallback(async () => {
    const filter = {};
    const status = searchParams.get("status");
    if (status) filter.status = status;
    const effortMin = parseInt(searchParams.get("effortMin"), 10);
    if (!Number.isNaN(effortMin)) filter.effortMin = effortMin;
    const effortMax = parseInt(searchParams.get("effortMax"), 10);
    if (!Number.isNaN(effortMax)) filter.effortMax = effortMax;
    const query = `
      query issueList($status: StatusType, $effortMin: Int, $effortMax: Int) {
        issueList(
          status: $status
          effortMin: $effortMin
          effortMax: $effortMax
        ) {
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
      const query = `
        mutation issueAdd($issue: IssueInput!) {
          issueAdd(issue: $issue) {
            id
          }
        }
      `;

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
      <hr />
      <Routes>
        <Route path=":id" Component={IssueDetail} />
      </Routes>
    </>
  );
}
