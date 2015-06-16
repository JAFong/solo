var display = angular.module('mvp.display', []);

display.controller('DisplayController', function($scope, Questions, $interval) {
  
  var init = function() {
    $scope.getQuestions();
    $interval($scope.getQuestions, 10000);
  };
  
  $scope.questions = [];
  $scope.newestQuestion = [];
  //For testing
  $scope.log = function(param) {
    console.log(param);
  };

  $scope.$on('update', function() {
    $scope.getQuestions();
  });

  $scope.delete = function(question) {
    Questions.deleteQuestion(question._id)
    .then(function(response) {
      $scope.getQuestions();
    })
  }
  
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
      $scope.newestQuestion = $scope.questions[$scope.questions.length - 1];
    })
  };
  
  init();
});