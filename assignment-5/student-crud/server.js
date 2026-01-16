import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());

const DB_FILE = "./db.json";

// Helper function: Read database
function readDB() {
  const data = fs.readFileSync(DB_FILE, "utf-8");
  return JSON.parse(data);
}

// Helper function: Write database
function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

/* ------------------------------
   1) GET /students
--------------------------------*/
app.get("/students", (req, res) => {
  const db = readDB();
  res.json(db.students);
});

/* ------------------------------
   2) POST /students
--------------------------------*/
app.post("/students", (req, res) => {
  const { name, course, year } = req.body;

  if (!name || !course || !year) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const db = readDB();

  const newStudent = {
    id: Date.now(),
    name,
    course,
    year
  };

  db.students.push(newStudent);
  writeDB(db);

  res.status(201).json({
    message: "Student added successfully!",
    student: newStudent
  });
});

/* ------------------------------
   3) PUT /students
--------------------------------*/
app.put("/students", (req, res) => {
  const { id, name, course, year } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Student ID is required!" });
  }

  const db = readDB();
  const student = db.students.find((s) => s.id == id);

  if (!student) {
    return res.status(404).json({ message: "Student not found!" });
  }

  if (name) student.name = name;
  if (course) student.course = course;
  if (year) student.year = year;

  writeDB(db);

  res.json({
    message: "Student updated successfully!",
    student
  });
});

/* ------------------------------
   4) DELETE /students/:id
--------------------------------*/
app.delete("/students/:id", (req, res) => {
  const { id } = req.params;

  const db = readDB();
  const index = db.students.findIndex((s) => s.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found!" });
  }

  db.students.splice(index, 1);
  writeDB(db);

  res.json({ message: "Student deleted successfully!" });
});

/* ------------------------------
   SERVER
--------------------------------*/
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
