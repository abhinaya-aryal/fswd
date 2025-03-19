import PropTypes from "prop-types";
import React from "react";

export default function IssueAdd({ createIssue }) {
  function handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.issueAdd;
    const issue = {
      owner: form.owner.value,
      title: form.title.value,
      due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10),
    };
    createIssue(issue);
    form.owner.value = "";
    form.title.value = "";
  }

  return (
    <form name="issueAdd" onSubmit={handleSubmit}>
      <input type="text" name="owner" placeholder="Owner" />
      <input type="text" name="title" placeholder="Title" />
      <button type="submit">Add</button>
    </form>
  );
}

IssueAdd.propTypes = {
  createIssue: PropTypes.func.isRequired,
};
