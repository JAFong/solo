var express = require('express');
var router = express.Router();
var db = require('./server.js')

router.post('/', function(req, res) {
  // console.log(req.body.id);

  // db.Question.findOne({'_id': req.body.id}, function(err, question) {
  //   console.log(question);
  //   db.Question.update({'_id': req.body.id}, {$set: {'upvotes': question.upvotes + 1}});
  //   res.end();
  // })

  // db.Question.update(
  //    { '_id': req.body.id },
  //    { $inc: { "upvotes": 1 } }
  // )

  db.Question.findById(req.body.id, function(error, question) {
    console.log(question);
    question.update({$inc: {'upvotes': 1}}, function(error, response) {
      console.log(response);
    });
  })

});

module.exports = router;