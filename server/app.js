const cluster = require("cluster");
const http = require("http");
const num = require("os").cpus().length;
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  for (let i = 0; i < num; i++) {
    cluster.fork();
    
  }
} else {
  const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/normal-page") {
      res.writeHead(200);
      res.end(`Normal Page!`);
    } else if (req.url === "/loading-page") {
      RunningTask(res);
    } else if (req.url === "/refresh-page") {
      Refreshing(res);
    }
  });

  server.listen(8000, () => {
    console.log(`Worker ${process.pid} started`);
  });
}

function RunningTask(res) {
  let i = 0;
  const timer = setInterval(() => {
    i++;
    if (i === 6000) {
      clearInterval(timer);
      res.writeHead(200);
      res.end(`Value is I = ${i}!`);
    }
  }, 0);
}
function Refreshing(res) {
  let j = 0;
  const timer = setInterval(() => {
    j++;
    if (j === 9000) {
      clearInterval(timer);
      res.writeHead(200);
      res.end(`Value is I = ${j}!`);
    }
  }, 0);
}
