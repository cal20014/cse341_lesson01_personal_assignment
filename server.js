/* ***********************
 * Authors: Grant Call
 * Course: CSE 341
 * Citations for assistance: Github Copilot
 *************************/
const express = require("express");
const app = express();
const env = require("dotenv").config();
const utils = require("./utils");
const routes = require("./routes");

/* ***********************
 * Routes
 *************************/
app.use("/", routes);

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT;
const host = process.env.HOST;

/* ***********************
 * Log statement to confirm server operation
 *************************/

app.listen(port, () => {
  console.log(`Server running at: http://${host}:${port}`);
});
