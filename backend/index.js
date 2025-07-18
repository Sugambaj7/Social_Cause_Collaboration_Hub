const express = require("express");
const cors = require("cors");
const app = express();
const webRouter = require("./router");
const connectDB = require("./config/db");
const globalErrorHandler = require("./utils/globalErrorHandler");
require("dotenv").config();

const port = process.env.PORT;


connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(webRouter);
app.use(globalErrorHandler);

console.log(port, "port vayo");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
