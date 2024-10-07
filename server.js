const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Sample express server");
});

// app.listen(3000, () => {
//   console.log("Server running at 3000");
// });

module.exports = app;
