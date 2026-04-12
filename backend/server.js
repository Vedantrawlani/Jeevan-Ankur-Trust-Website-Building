const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/volunteer", (req, res) => {
  console.log("Volunteer Data:", req.body);
  res.send("Form data received");
});

app.post("/donate", (req, res) => {
  console.log("Donation Data:", req.body);
  res.send("Donation received");
});

// server start
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
let students = [
  { name: "Anshika", age: 8, class: "3rd", gender: "Female" },
  { name: "Rahul", age: 10, class: "5th", gender: "Male" }
];
app.get("/students", (req, res) => {
  res.json(students);
});
app.post("/add-student", (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.send("Student added");
});
