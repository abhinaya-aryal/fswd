import React, { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import graphQLFetch from "./graphQLFetch.js";
import NumInput from "./NumInput.jsx";
import DateInput from "./DateInput.jsx";
import TextInput from "./TextInput.jsx";
import CustomDropDown from "./components/CustomDropDown.jsx";

export default function IssueEdit() {
  const navigate = useNavigate();
  let { id: curId } = useParams();
  const [issue, setIssue] = useState({});
  const [invalidFields, setInvalidFields] = useState({});
  curId = parseInt(curId, 10);

  const onValidityChange = useCallback((event, valid) => {
    const { name } = event.target;
    setInvalidFields((prev) => {
      const updatedFields = { ...prev, [name]: !valid };
      if (valid) delete updatedFields[name];
      return updatedFields;
    });
  }, []);

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
    const data = await graphQLFetch(query, { id: curId });
    setIssue(() => (data ? data.issue : {}));
    setInvalidFields({});
  }, [curId]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(invalidFields).length !== 0) return;
    const query = `
      mutation issueUpdate($id: Int!, $changes: IssueUpdateInputs!) {
        issueUpdate(id: $id, changes: $changes) {
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
    const { id, created, ...changes } = issue;
    const data = await graphQLFetch(query, { changes, id });
    if (data) {
      setIssue(data.issueUpdate);
      navigate(-1);
    }
  };

  const onChange = useCallback((e, naturalValue) => {
    const { name, value: textValue } = e.target;
    const newValue = naturalValue === undefined ? textValue : naturalValue;
    setIssue((prevIssue) => ({ ...prevIssue, [name]: newValue }));
  }, []);

  const onStatusChange = (value) => {
    setIssue((prevIssue) => ({ ...prevIssue, status: value }));
  };

  let validationMessage;
  if (Object.keys(invalidFields).length !== 0) {
    validationMessage = (
      <div className="text-red-500 col-span-2 text-center">
        Please correct invalid fields before submitting.
      </div>
    );
  }

  return (
    <>
      {!(issue.id == null && curId != null) ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-6xl mx-auto bg-gray-300 mt-16 rounded-md"
        >
          <h3 className="w-full text-lg font-semibold text-white mb-4 bg-gradient-to-r to-blue-500 from-purple-900 p-3 rounded-t-md">{`Editing issue: ${issue.id}`}</h3>
          <div className="grid grid-cols-[auto_1fr] items-center gap-6 px-4 pb-6">
            <span className="block font-semibold">Created</span>
            <span className="block">
              {issue.created ? new Date(issue.created).toDateString() : ""}
            </span>

            <span className="block font-semibold">Status</span>
            <CustomDropDown
              selectedValue={issue.status}
              onSelect={onStatusChange}
            />

            <span className="font-semibold block">Owner</span>
            <TextInput
              name="owner"
              value={issue.owner}
              onChange={onChange}
              id={`owner${issue.id}`}
              key={`owner${issue.id}`}
            />

            <span className="font-semibold block">Effort</span>
            <NumInput
              name="effort"
              value={issue.effort}
              onChange={onChange}
              id={`effort${issue.id}`}
              key={`effort${issue.id}`}
            />

            <span className="font-semibold block">Due</span>
            <DateInput
              name="due"
              value={issue.due}
              onChange={onChange}
              onValidityChange={onValidityChange}
              id={`due${issue.id}`}
              key={`due${issue.id}`}
            />

            <span className="font-semibold block">Title</span>
            <TextInput
              name="title"
              value={issue.title}
              onChange={onChange}
              id={`title${issue.id}`}
              key={`title${issue.id}`}
            />

            <span className="font-semibold block">Description</span>
            <TextInput
              tag="textarea"
              rows={6}
              aria-label="description"
              name="description"
              value={issue.description}
              onChange={onChange}
              id={`description${issue.id}`}
              key={`description${issue.id}`}
            />
            {validationMessage}
            <div className="col-span-2 flex justify-center gap-20 items-center mt-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 font-semibold text-white px-16 py-3 rounded"
              >
                Submit
              </button>
              <button
                onClick={() => navigate("/issues")}
                type="button"
                className="bg-red-500 hover:bg-red-700 font-semibold text-white px-16 py-3 rounded"
              >
                Back
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="max-w-6xl mx-auto text-lg font-semibold text-white mt-16 bg-gradient-to-r to-blue-500 from-purple-900 p-3 rounded-t-md">{`Issue with Id: ${curId} not found.`}</div>
      )}
      <div className="rounded-b-md justify-around grid grid-cols-2 text-center gap-0.5 max-w-6xl mx-auto mb-16">
        <Link
          className="bg-gray-400 py-3 hover:bg-gray-600 hover:text-white"
          to={`/edit/${curId === 1 ? curId : curId - 1}`}
        >
          Prev
        </Link>
        <Link
          className="bg-gray-400 py-3 hover:bg-gray-600 hover:text-white"
          to={`/edit/${curId + 1}`}
        >
          Next
        </Link>
      </div>
    </>
  );
}
