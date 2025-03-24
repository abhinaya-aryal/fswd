import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import graphQLFetch from "./graphQLFetch.js";
import NumInput from "./NumInput.jsx";
import DateInput from "./DateInput.jsx";

export default function IssueEdit() {
  let { id } = useParams();
  const [issue, setIssue] = useState({});
  const [invalidFields, setInvalidFields] = useState({});
  id = parseInt(id, 10);

  function onValidityChange(event, valid) {
    const { name } = event.target;
    setInvalidFields((prev) => {
      const updatedFields = { ...prev, [name]: !valid };
      if (valid) delete updatedFields[name];
      return updatedFields;
    });
  }

  const loadData = useCallback(async () => {
    const query = `
      query issue($id: Int!) {
        issue(id: $id) {
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
    const data = await graphQLFetch(query, { id });
    if (data) {
      setIssue({
        ...data.issue,
        owner: data.issue.owner ?? "",
        description: data.issue.description ?? "",
      });
      setInvalidFields({});
    } else {
      setIssue({});
      setInvalidFields({});
    }
  }, [id]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(issue);
  };

  const onChange = (e, naturalValue) => {
    const { name, value: textValue } = e.target;
    const newValue = naturalValue ?? textValue;
    setIssue((prevIssue) => {
      if (prevIssue[name] === newValue) return prevIssue; // ✅ Prevent unnecessary updates
      return { ...prevIssue, [name]: newValue };
    });
  };

  if (issue.id == null) {
    if (id != null) {
      return <h3>{`Issue with ID ${id} not found.`}</h3>;
    }
    return null;
  }

  let validationMessage;
  if (Object.keys(invalidFields).length !== 0) {
    validationMessage = (
      <div className="error">
        Please correct invalid fields before submitting.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>{`Editing issue: ${issue.id}`}</h3>
      <table>
        <tbody>
          <tr>
            <td>Created:</td>
            <td>{issue.created.toDateString()}</td>
          </tr>
          <tr>
            <td>Status:</td>
            <td>
              <select name="status" value={issue.status} onChange={onChange}>
                <option value="NEW">New</option>
                <option value="ASSIGNED">Assigned</option>
                <option value="FIXED">Fixed</option>
                <option value="CLOSED">Closed</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Owner:</td>
            <td>
              <input
                aria-label="owner"
                name="owner"
                value={issue.owner}
                onChange={onChange}
              />
            </td>
          </tr>
          <tr>
            <td>Effort:</td>
            <td>
              <NumInput
                name="effort"
                value={issue.effort}
                onChange={onChange}
                id={issue.id}
              />
            </td>
          </tr>
          <tr>
            <td>Due:</td>
            <td>
              <DateInput
                aria-label="due"
                name="due"
                value={issue.due}
                onChange={onChange}
                onValidityChange={onValidityChange}
                id={issue.id}
              />
            </td>
          </tr>
          <tr>
            <td>Title:</td>
            <td>
              <input
                size={50}
                aria-label="title"
                name="title"
                value={issue.title}
                onChange={onChange}
              />
            </td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>
              <textarea
                rows={8}
                cols={50}
                aria-label="description"
                name="description"
                value={issue.description}
                onChange={onChange}
              />
            </td>
          </tr>
          <tr>
            <td aria-label="empty" />
            <td>
              <button type="submit">Submit</button>
            </td>
          </tr>
        </tbody>
      </table>
      {validationMessage}
      <Link to={`/edit/${id - 1}`}>Prev</Link>
      {" | "}
      <Link to={`/edit/${id + 1}`}>Next</Link>
    </form>
  );
}
