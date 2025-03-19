import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.DB_URL || "mongodb://localhost/issuetracker";

async function testWithAsync() {
  console.log("\n--- testWithAsync ---");
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log("Connected to MongoDB at", url);
    const db = client.db();
    const collection = db.collection("employees");

    const employee = { id: 3, name: "C. Async", age: 25 };

    const result = await collection.insertOne(employee);
    console.log("✅ Inserted Employee ID:", result.insertedId);

    const doc = await collection.find({ _id: result.insertedId }).toArray();
    console.log("Result of find:\n", doc);
  } catch (err) {
    console.error("🚨 ERROR:", err);
  } finally {
    await client.close();
    console.log("🔌 Disconnected from MongoDB");
  }
}

testWithAsync();
