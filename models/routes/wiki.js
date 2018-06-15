
const express = require('express');
const router = express.Router();
const client = require("./client");
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false}));
const addPage = require('./../../views/addPage');


router.get("/", (req, res, next) => {

})

router.post("/", (req, res, next) => {

})

router.get("/add", (req, res, next) => {
  res.send(addPage());
})




// method	full path	router path	action
// GET	/wiki/	/	retrieve all wiki pages
// POST	/wiki/	/	submit a new page to the database
// GET	/wiki/add/	/add	retrieve the "add a page" form


module.exports = router;
