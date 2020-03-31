const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
const logger = require("morgan");
const PORT = process.env.PORT || 3000;
const app = express();
const db = require('./models')
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false
})

// Routes
// ======

// TODO: Fill in each route so that the server performs
// the proper mongojs functions for the site to function
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, './public/exercise.html'))
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, './public/stats.html'))
});

app.get('/api/workouts', (req,res)=>{
  db.find().then(response=>{
    res.json(response)
  })
})

app.get('/api/workouts/range', (req,res)=>{
  db.find().then(response=>{
    res.json(response)
  })
})

app.put('/api/workouts/:id', (req,res)=>{
  db.findByIdAndUpdate(req.params.id, 
    {$push: {exercises:req.body}}).then(response=>res.json(response))
})

app.post('/api/workouts', (req,res)=>{
  db.create({}).then(response=>res.json(response))
})

// Post a book to the mongoose database
app.post("/workout", ({ body }, res) => {
  // Save the request body as an object called book
  const workout = body;

});

// Listen on port 3000
app.listen(PORT, () => {
  console.log("App running on port 3000!");
});
