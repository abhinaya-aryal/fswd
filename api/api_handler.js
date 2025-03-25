import fs from "fs";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import GraphQLDate from "./graphql_date.js";
import { setMessage, getMessage } from "./about.js";
import {
  issueList,
  issueAdd,
  getIssue,
  issueUpdate,
  issueDelete,
} from "./issue.js";

dotenv.config();

const resolvers = {
  Query: {
    about: getMessage,
    issueList,
    issue: getIssue,
  },
  Mutation: {
    setAboutMessage: setMessage,
    issueAdd,
    issueUpdate,
    issueDelete,
  },
  GraphQLDate,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync("schema.graphql", "utf-8"),
  resolvers,
  formatError: (error) => {
    console.error("GraphQL Error:", error);
    return error;
  },
});

export default async function installHandler(app) {
  const enableCors = (process.env.ENABLE_CORS || "true") === "true";
  console.log("CORS setting:", enableCors);
  await server.start();
  server.applyMiddleware({ app, path: "/graphql", cors: enableCors });
}
