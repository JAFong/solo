var express = require('express');
var bodyParser = require('body-parser');
var db = require('./server/server');
var questions = require('./server/questions');
var upvote = require('./server/upvote')

app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('client'));
app.use('/questions', questions);
app.use('/questions/upvote', upvote);

app.listen(8080, function() {
  console.log('Express started at port 8080');
});