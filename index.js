var express = require('express');
var db = require('./server/server');
var questions = require('./server/messages')

app = express();

app.use('/', express.static('client'));
app.use('/questions', questions)
// app.get('/', function(req, res, next) {

// });

app.listen(8080, function() {
  console.log('Express started at port 8080');
});