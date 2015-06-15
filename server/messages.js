var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('This is all the way from our server!')
});

module.exports = router;