var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvp');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {

  var questionSchema = mongoose.Schema({
    name: String,
    text: String,
    upvotes: Number
  });

  var Question = exports.Question = mongoose.model('Question', questionSchema);

  /*
  Example: model instantiation
  var myQuestion = Question( { name: 'Justin', text: 'How do I create an app?'} );

  myQuestion.save(function (err, myQuestion) {
    if (err) return console.error(err);
  });

  Question.find(function (err, questions) {
    if (err) return console.error(err);
    console.log(questions)
  })

  */

});