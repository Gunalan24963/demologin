const { Worker } = require("worker_threads");
const express = require("express");

const app = express();

app.get("/normal", (req, res) => {
  res.send("normal page called");
});

app.get("/heavy", (req, res) => {
  const worker = new Worker("./worker.js");
  worker.on("message", (data) => {
    console.log(data);
    res.writeHead(200);
    res.end(`Heavy Page value ${data}!`);
  });
});

app.listen(7000, () => {
  console.log("Server started on 7000");
});
