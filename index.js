const { response } = require("express");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("PFA Docker!");
});

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
