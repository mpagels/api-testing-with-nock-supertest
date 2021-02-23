const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = 3006;

app.get("/", async (req, res) => {
  const response = await fetch("http://api.icndb.com/jokes/random");
  const json = await response.json();
  res.json(json);
});

app.listen(PORT);
module.exports = app;
