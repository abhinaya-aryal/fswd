import React, { useEffect, useState, useCallback } from "react";
import {
  useSearchParams,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import graphQLFetch from "./graphQLFetch.js";
import IssueFilter from "./IssueFilter.jsx";
import IssueTable from "./IssueTable.jsx";
import IssueAdd from "./IssueAdd.jsx";
import IssueDetail from "./IssueDetail.jsx";

export default function IssueList() {
  const [searchParams] = useSearchParams();
  const [issues, setIssues] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

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

  const closeIssue = useCallback(
    async (index) => {
      const query = `
      mutation issueClose($id: Int!) {
        issueUpdate(id: $id, changes: { status: Closed }) {
          id
          title
          status
          owner
          effort
          created
          due
          description
        }
      }
    `;
      const data = await graphQLFetch(query, { id: issues[index].id });
      if (data) {
        setIssues((prevIssues) => {
          const newList = [...prevIssues];
          newList[index] = data.issueUpdate;
          return [...newList];
        });
      } else {
        loadData();
      }
    },
    [issues, loadData],
  );

  const deleteIssue = useCallback(
    async (index) => {
      const query = `
      mutation issueDelete($id: Int!) {
        issueDelete(id: $id)
      }
    `;
      const data = await graphQLFetch(query, { id: issues[index].id });
      if (data && data.issueDelete) {
        setIssues((prevIssues) => {
          const newList = [...prevIssues];
          if (location.pathname === `/issues/${issues[index].id}`) {
            navigate({ pathname: "/issues", search: location.search });
          }
          newList.splice(index, 1);
          return [...newList];
        });
      } else {
        loadData();
      }
    },
    [issues, loadData, location.pathname, location.search, navigate],
  );

  return (
    <>
      <IssueFilter />
      <IssueTable
        issues={issues}
        closeIssue={closeIssue}
        deleteIssue={deleteIssue}
      />
      <IssueAdd createIssue={createIssue} />
      <Routes>
        <Route path=":id" Component={IssueDetail} />
      </Routes>
    </>
  );
}
