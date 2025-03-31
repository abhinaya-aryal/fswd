import React from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

function IssueRow({ issue, closeIssue, index, deleteIssue }) {
  const [searchParams] = useSearchParams();
  const search = searchParams.toString();

  return (
    <tr className="hover:bg-white transition cursor-pointer">
      <td className="p-3 text-center text-gray-800 border-2 border-white">
        {issue.id}
      </td>
      <td className="p-3 text-center border-2 border-white">
        <span className="px-4 py-2 rounded-full font-semibold text-white bg-blue-500">
          {issue.status}
        </span>
      </td>
      <td className="p-3 text-center text-gray-800 border-2 border-white">
        {issue.owner}
      </td>
      <td className="p-3 text-center text-gray-600 border-2 border-white">
        {issue.created.toDateString()}
      </td>
      <td className="p-3 text-center text-gray-800 border-2 border-white">
        {issue.effort}
      </td>
      <td className="p-3 text-center text-gray-600 border-2 border-white">
        {issue.due ? issue.due.toDateString() : "—"}
      </td>
      <td className="p-3 text-center text-gray-800 border-2 border-white">
        {issue.title}
      </td>
      <td className="p-3 text-center border-2 border-white">
        <div className="flex items-center justify-between gap-3">
          <Link
            title="Edit issue"
            to={`/edit/${issue.id}`}
            className="p-1 text-blue-600 text-2xl hover:bg-blue-600 hover:text-white rounded-full"
          >
            <BiEdit />
          </Link>
          <NavLink
            to={{ pathname: `/issues/${issue.id}`, search }}
            className="text-green-600 hover:underline"
          >
            Select
          </NavLink>
          <button
            title="Close issue"
            type="button"
            className="p-1 text-green-600 text-2xl hover:bg-green-600 hover:text-white rounded-full"
            onClick={() => closeIssue(index)}
          >
            <IoClose />
          </button>
          <button
            title="Delete issue"
            type="button"
            className="p-1 text-red-600 text-2xl hover:bg-red-600 hover:text-white rounded-full"
            onClick={() => deleteIssue(index)}
          >
            <MdDeleteOutline />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default function IssueTable({ issues, closeIssue, deleteIssue }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full max-w-6xl mx-auto bg-slate-200 shadow-lg overflow-hidden border-collapse">
        <thead className="bg-gradient-to-r from-blue-500 to-purple-900 text-white">
          <tr>
            <th className="p-3 text-center border-2 border-white">ID</th>
            <th className="p-3 text-center border-2 border-white">Status</th>
            <th className="p-3 text-center border-2 border-white">Owner</th>
            <th className="p-3 text-center border-2 border-white">Created</th>
            <th className="p-3 text-center border-2 border-white">Effort</th>
            <th className="p-3 text-center border-2 border-white">Due Date</th>
            <th className="p-3 text-center border-2 border-white">Title</th>
            <th className="p-3 text-center border-2 border-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue, index) => (
            <IssueRow
              key={issue.id}
              issue={issue}
              closeIssue={closeIssue}
              index={index}
              deleteIssue={deleteIssue}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
