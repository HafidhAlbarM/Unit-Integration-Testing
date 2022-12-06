const express = require("express");
const app = express();
const mongoDb = require("./database/mongodb.connect");
const todoRoutes = require("./routes/todo.routes");

mongoDb.connect();

app.use(express.json());

app.use("/todos", todoRoutes);

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

app.get("/", (req, res) => {
  res.json("Hello world!");
});

module.exports = app;
