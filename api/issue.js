import { UserInputError } from "apollo-server-express";
import { getDb, getNextSequence } from "./db.js";

export async function issueList() {
  const db = getDb();
  const issues = await db.collection("issues").find({}).toArray();
  return issues;
}

function validate(issue) {
  const errors = [];
  if (!issue.title || issue.title.length < 3) {
    errors.push("Field 'title' must be at least 3 characters long.");
  }
  if (issue.status === "Assigned" && !issue.owner) {
    errors.push("Field 'owner' is required when status is 'Assigned'");
  }
  if (errors.length > 0) {
    throw new UserInputError("Invalid input(s)", { errors });
  }
}

export async function issueAdd(_, { issue }) {
  const db = getDb();
  validate(issue);
  const newIssue = {
    ...issue,
    created: new Date(),
    id: await getNextSequence("issues"),
  };
  const result = await db.collection("issues").insertOne(newIssue);
  return db.collection("issues").findOne({ _id: result.insertedId });
}
