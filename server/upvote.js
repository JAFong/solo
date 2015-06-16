var express = require('express');
var router = express.Router();
var db = require('./server.js')

router.post('/', function(req, res) {
  db.Question.update(
     { _id: "ObjectId(" + req.body.id + ")" },
     { $inc: { "upvotes": 1 } }
  )
  res.end();
});

module.exports = router;