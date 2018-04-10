import express from "express";
import path from "path";

const app = express();

app.get("/", (req, res) => {
  res.json({status: "OK"});
});

app.listen(8080, () => console.log("Running on localhost: 8080"));
