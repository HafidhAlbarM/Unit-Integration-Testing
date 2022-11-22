const express = require("express");
const app = express();
const mongoDb = require("./database/mongodb.connect");
const todoRoutes = require("./routes/todo.routes");

mongoDb.connect();

app.use(express.json());

app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  res.json("Hello world!");
});

// app.listen(3000, () => {
//   console.log("Server is now running!");
// });

module.exports = app;
//test
