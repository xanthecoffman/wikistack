const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser")
const app = express();
const pg = require("pg");
const models = require('./models/index.js');
const db = models.db;


// module.exports = { Page, User };
db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));


app.get("/", (req, res, next) => {
  res.send(`<p> "Hello" </p>`);
})
const syncing = async () => {
  await models.User.sync();
  await models.Page.sync();
  await models.db.sync({force: true})
  app.listen(3000, () => {
    console.log("Running!");
  })
}
syncing();
