const { parentPort } = require("worker_threads");

let i = 0;
  const timer = setInterval(() => {
    i++;
    console.log(i);
    if (i === 6000) {
      clearInterval(timer);
    }
  }, 0);
parentPort.postMessage(i);
