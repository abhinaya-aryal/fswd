import express from "express";
import installHandler from "./api_handler.js";
import { connectToDb } from "./db.js";

// New one
const app = express();

installHandler(app);

const port = process.env.PORT || 4000;

const server = async () => {
  try {
    await connectToDb();
    app.listen(port, () => {
      console.log(`API server running at http://localhost:${port}`);
    });
  } catch (err) {
    console.log("ERROR:", err);
  }
};

server();
