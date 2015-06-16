var display = angular.module('mvp.display', []);

display.controller('DisplayController', function($scope, Questions) {
  
  var init = function() {
    $scope.getQuestions();
    // setInterval($scope.getQuestions, 5000);
  };
  
  $scope.log = function(param) {
    console.log(param);
  };
  
  $scope.upvote = function(question){
    Questions.upvote(question._id);
  };

  $scope.getQuestions = function() {
    Questions.getQuestions()
    .then(function(response){
      console.log(response.data);
      $scope.questions = response.data;
    })
  };
  
  init();
});