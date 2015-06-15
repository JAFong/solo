var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('This is all the way from our server!');
});

router.post('/', function(req, res) {
  console.log("Request 123456", req);
  res.end();
});

module.exports = router;