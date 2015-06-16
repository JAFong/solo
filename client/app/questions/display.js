var display = angular.module('mvp.display', []);

display.controller('DisplayController', function($scope, Questions) {
  
  var init = function() {
    $scope.getQuestions();
    setInterval($scope.getQuestions, 10000);
  };
  

  //For testing
  $scope.log = function(param) {
    console.log(param);
  };
  
  $scope.upvote = function(question){
    Questions.upvote(question._id)
    .then(function(response) {
      console.log(response);
      $scope.getQuestions();
    });
  };

  $scope.getQuestions = function() {
    console.log('gotQuestions')
    Questions.getQuestions()
    .then(function(response){
      console.log(response.data);
      $scope.questions = response.data;
    })
  };
  
  init();
});