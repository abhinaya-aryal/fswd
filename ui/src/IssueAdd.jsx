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
    <form
      name="issueAdd"
      className="max-w-6xl mx-auto grid grid-cols-3 gap-8 mt-8"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="owner" className="block mb-2 font-semibold">
          Owner:
        </label>
        <input
          type="text"
          name="owner"
          id="owner"
          placeholder="Owner"
          className="bg-white text-black px-4 py-2 rounded-md shadow-md col-span-1 w-full"
        />
      </div>
      <div>
        <label htmlFor="title" className="block mb-2 font-semibold">
          Title:
        </label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="bg-white text-black px-4 py-2 rounded-md shadow-md col-span-1 w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 w-max text-white px-16 py-3 rounded-md font-semibold shadow-md hover:bg-blue-700 transition h-max self-end"
      >
        Add
      </button>
    </form>
  );
}

IssueAdd.propTypes = {
  createIssue: PropTypes.func.isRequired,
};
