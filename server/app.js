const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require('body-parser')


app.use(cors());
app.use(bodyParser.json())
app.get("/", (req, res) => {
  res.send("employees");
});
app.use('/',require('./routes/AuthenticateRouter'))
app.use('/',require('./routes/CrudOperation'))
connectDB();
app.listen(8000);
console.log(`Port Run On ${8000}`);
