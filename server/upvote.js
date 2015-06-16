var express = require('express');
var router = express.Router();
var db = require('./server.js')

router.post('/', function(req, res) {


  db.Question.findById(req.body.id, function(error, question) {
    // console.log(question);
    question.update({$inc: {'upvotes': 1}}, function(error, response) {
      // console.log(response);
      res.end();
    });
  })

});

module.exports = router;