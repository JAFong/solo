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
  // console.log(db.Question);
  new db.Question({name: req.body.name, text: req.body.text})
  .save(function(err, response) {
    console.log(response);
    res.writeHead(201);
    res.end();    
  })
});

module.exports = router;