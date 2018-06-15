const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser")
const app = express();
const pg = require("pg")
const { db } = require('./models/index.js');

db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));


app.get("/", (req, res, next) => {
  res.send(`<p> "Hello" </p>`);
})



app.listen(3000, () => {
  console.log("Running!");
})
