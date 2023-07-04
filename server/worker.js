// worker.js
const { parentPort } = require("worker_threads");

const performTask = () => {
  let result = 0;
  for (let i = 0; i < 10000000000; i++) {
    result++;
  }
  return result;
};

parentPort.on("message", (message) => {
  const taskResult = performTask();
  parentPort.postMessage(taskResult);
});
