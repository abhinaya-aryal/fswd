import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function IssueFilter() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState({
    status: searchParams.get("status") || "",
  });
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    setFilter({ status: searchParams.get("status") || "" });
    setChanged(false);
  }, [searchParams]);

  function onChangeStatus(e) {
    setFilter((prevFilter) => ({ ...prevFilter, status: e.target.value }));
    setChanged(true);
  }

  function applyFilter() {
    const params = new URLSearchParams();
    if (filter.status) params.set("status", filter.status);
    navigate({
      pathname: "/issues",
      search: params.toString(),
    });
  }

  return (
    <div>
      Status:&nbsp;
      <select value={filter.status} onChange={onChangeStatus}>
        <option value="">(All)</option>
        <option value="NEW">New</option>
        <option value="ASSIGNED">Assigned</option>
        <option value="FIXED">Fixed</option>
        <option value="CLOSED">Closed</option>
      </select>
      &nbsp;
      <button type="button" onClick={applyFilter}>
        Apply
      </button>
      &nbsp;
      <button
        type="button"
        onClick={() => {
          setFilter({ status: searchParams.get("status") || "" });
        }}
        disabled={!changed}
      >
        Reset
      </button>
    </div>
  );
}
