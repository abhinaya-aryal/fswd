import { UserInputError } from "apollo-server-express";
import { getDb, getNextSequence } from "./db.js";

export async function issueList(_, { status, effortMin, effortMax }) {
  const db = getDb();
  const filter = {};
  if (status) filter.status = status.toString().toUpperCase();
  if (effortMin !== undefined || effortMax !== undefined) {
    filter.effort = {};
    if (effortMin !== undefined) filter.effort.$gte = effortMin;
    if (effortMax !== undefined) filter.effort.$lte = effortMax;
  }
  const issues = await db.collection("issues").find(filter).toArray();
  return issues;
}

function validate(issue) {
  const errors = [];
  if (!issue.title || issue.title.length < 3) {
    errors.push("Field 'title' must be at least 3 characters long.");
  }
  if (issue.status === "ASSIGNED" && !issue.owner) {
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

export async function getIssue(_, { id }) {
  const db = getDb();
  const issue = await db.collection("issues").findOne({ id });
  return issue;
}

export async function issueUpdate(_, { id, changes }) {
  const db = getDb();
  if (changes.title || changes.status || changes.owner) {
    const issue = await db.collection("issues").findOne({ id });
    Object.assign(issue, changes);
    validate(issue);
  }
  await db.collection("issues").updateOne({ id }, { $set: changes });
  const savedIssue = await db.collection("issues").findOne({ id });
  return savedIssue;
}

export async function issueDelete(_, { id }) {
  const db = getDb();
  const issue = await db.collection("issues").findOne({ id });
  if (!issue) return false;
  issue.deleted = new Date();
  let result = await db.collection("deleted_issues").insertOne(issue);
  if (result.insertedId) {
    result = await db.collection("issues").deleteOne({ id });
    return result.deletedCount === 1;
  }
  return false;
}
