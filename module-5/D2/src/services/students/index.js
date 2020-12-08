const express = require("express");
const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");
const uniqid = require("uniqid");

const router = express.Router();

router.get("/", (req, res) => {
  const buffer = fs.readFileSync(path.join(__dirname, "students.json"));
  const fileContent = buffer.toString();

  res.send(JSON.parse(fileContent));
});

router.get("/:id", (req, res) => {
  const buffer = fs.readFileSync(path.join(__dirname, "students.json"));
  const studentsArray = JSON.parse(buffer.toString());
  const student = studentsArray.filter(
    (student) => student.ID === req.params.id
  );

  res.send(student);
});

router.post("/", (req, res) => {
  const newStudent = req.body;
  const buffer = fs.readFileSync(path.join(__dirname, "students.json"));
  const studentDB = JSON.parse(buffer.toString());
  newStudent.ID = uniqid();
  studentDB.push(newStudent);

  let errors = false;

  for (let i = 0; i < studentDB.length; i++) {
    if (newStudent.email === studentDB[i].email) {
      errors = true;
    }
  }

  if (errors === true) {
    res.status(400);
  } else {
    fs.writeFileSync(
      path.join(__dirname, "students.json"),
      JSON.stringify(studentDB)
    );

    res.status(201).send({ ID: newStudent.ID });
  }
});

router.put("/:id", (req, res) => {
  const modifiedStudent = req.body;
  const buffer = fs.readFileSync(path.join(__dirname, "students.json"));
  const studentDB = JSON.parse(buffer.toString());
  const newStudentDB = studentDB.filter(
    (student) => student.ID !== req.params.id
  );
  modifiedStudent.ID = req.params.id;
  newStudentDB.push(modifiedStudent);

  fs.writeFileSync(
    path.join(__dirname, "students.json"),
    JSON.stringify(newStudentDB)
  );

  res.status(201).send(newStudentDB);
});

router.delete("/:id", (req, res) => {
  const buffer = fs.readFileSync(path.join(__dirname, "students.json"));
  const studentDB = JSON.parse(buffer.toString());
  const newStudentDB = studentDB.filter(
    (student) => student.ID !== req.params.id
  );
  fs.writeFileSync(
    path.join(__dirname, "students.json"),
    JSON.stringify(newStudentDB)
  );

  res.status(204).send();
});

module.exports = router;
