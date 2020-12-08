const express = require("express");

const cors = require("cors");

const students = require("./services/students");

const server = express();

server.use(cors());
server.use(express.json());

server.use("/students", students);

server.listen(3002, () => console.log("Server running on port 3002"));
