/*
 * localhost:
        mongosh issuetracker scripts/init.mongo.js
 
* Atlas:
*       mongosh mongodb+srv://user:pwd@xxx.mongodb.net/issuetracker scripts/init.mongo.js
*/

/* global db print */
/* eslint no-restricted-globals: "off" */

db.issues.deleteMany({});

const issuesDB = [
  {
    id: 1,
    status: "NEW",
    owner: "Ravan",
    created: new Date("2025-05-15"),
    due: null,
    title: "Error in console when clicking Add",
  },
  {
    id: 2,
    status: "ASSIGNED",
    owner: "Eddie",
    effort: 14,
    created: new Date("2025-01-16"),
    due: new Date("2025-04-01"),
    title: "Missing bottom border on panel",
  },
];

db.issues.insertMany(issuesDB);
const count = db.issues.countDocuments();
print("Inserted", count, "issues");

db.counters.deleteOne({ _id: "issues" });
db.counters.insertOne({ _id: "issues", current: count });
print("Inserted issues counters");

db.issues.createIndex({ id: 1 }, { unique: true });
db.issues.createIndex({ status: 1 });
db.issues.createIndex({ owner: 1 });
db.issues.createIndex({ created: 1 });
