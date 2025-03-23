import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function IssueFilter() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState({
    status: searchParams.get("status") || "",
    effortMin: searchParams.get("effortMin") || "",
    effortMax: searchParams.get("effortMax") || "",
  });
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    setFilter({
      status: searchParams.get("status") || "",
      effortMin: searchParams.get("effortMin") || "",
      effortMax: searchParams.get("effortMax") || "",
    });
    setChanged(false);
  }, [searchParams]);

  function onChangeStatus(e) {
    setFilter((prevFilter) => ({ ...prevFilter, status: e.target.value }));
    setChanged(true);
  }

  function onChangeEffortMin(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      setFilter((prevFilter) => ({ ...prevFilter, effortMin: e.target.value }));
      setChanged(true);
    }
  }

  function onChangeEffortMax(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      setFilter((prevFilter) => ({ ...prevFilter, effortMax: e.target.value }));
      setChanged(true);
    }
  }

  function applyFilter() {
    const params = new URLSearchParams();
    if (filter.status) params.set("status", filter.status);
    if (filter.effortMin) params.set("effortMin", filter.effortMin);
    if (filter.effortMax) params.set("effortMax", filter.effortMax);
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
      &nbsp; Effort between:&nbsp;
      <input size={5} value={filter.effortMin} onChange={onChangeEffortMin} />
      {" - "}
      <input size={5} value={filter.effortMax} onChange={onChangeEffortMax} />
      &nbsp;
      <button type="button" onClick={applyFilter}>
        Apply
      </button>
      &nbsp;
      <button
        type="button"
        onClick={() => {
          setFilter({
            status: searchParams.get("status") || "",
            effortMin: searchParams.get("effortMin") || "",
            effortMax: searchParams.get("effortMax") || "",
          });
        }}
        disabled={!changed}
      >
        Reset
      </button>
    </div>
  );
}
