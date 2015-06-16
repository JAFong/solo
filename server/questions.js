var express = require('express');
var router = express.Router();
var db = require('./server.js')

router.get('/', function(req, res) {
  db.Question.find(function(err, questions) {
    // console.log(questions);
    res.send(questions);
  });
});

router.post('/', function(req, res) {
  console.log('Router posted!')
  // console.log(db.Question);
  new db.Question({name: req.body.name, text: req.body.text, upvotes: 0})
  .save(function(err, response) {
    res.writeHead(201);
    res.end();
  });
});

router.post('/', function(req, res) {
  db.Question.findById(req.body.id, function(error, question) {
    question.update({$set: {'text': req.body.text}}, function(error, response) {
      res.end();
    });
  })

});

router.delete('/', function(req, res) {
console.log(req.body)
console.log('Got to delete request!')
console.log(req.body.id)
 db.Question.findById(req.body.id, function(error, question) {
  console.log(question)
   question.remove({'_id': req.body.id}, function(err, response) {
     res.writeHead(200);
     res.end();
   });
 })
});

module.exports = router;