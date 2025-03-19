import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

let db;

export async function connectToDb() {
  const url = process.env.DB_URL || "mongodb://localhost/issuetracker";
  const client = new MongoClient(url);
  await client.connect();
  console.log("Connected to MongoDB at", url);
  db = client.db();
}

export async function getNextSequence(name) {
  const result = await db
    .collection("counters")
    .findOneAndUpdate(
      { _id: name },
      { $inc: { current: 1 } },
      { returnDocument: "after" },
    );
  console.log(result);
  return result.current;
}

export function getDb() {
  return db;
}
