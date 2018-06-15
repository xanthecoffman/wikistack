const express = require('express');
const router = express.Router();
const client = require("./client");
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false}));

module.exports = router;
