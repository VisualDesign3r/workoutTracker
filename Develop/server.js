
const express = require("express");
const mongojs = require("mongojs");

const logger = require("morgan");

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "warmup";
const collections = ["books"];

const db = mongojs(databaseUrl, collections);
db.on("error", error => {
  console.log("Database Error:", error);
});

// Routes
// ======

// TODO: Fill in each route so that the server performs
// the proper mongojs functions for the site to function
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

app.get("/exercise", (req, res) => {});



// Post a book to the mongoose database
app.post("/submit", ({ body }, res) => {
  // Save the request body as an object called book
  const workout = body;


});

// Find all books marked as read
app.get("/read", (req, res) => {});

// Find all books marked as unread
app.get("/unread", (req, res) => {});

// Mark a book as having been read
app.put("/markread/:id", (req, res) => {
  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))
});

// Mark a book as having been not read
app.put("/markunread/:id", (req, res) => {
  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))
});

// Listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
