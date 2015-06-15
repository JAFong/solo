var display = angular.module('mvp.display', []);

display.controller('DisplayController', function($scope, Questions) {
  
  var init = function() {
    $scope.getQuestions();
    setInterval($scope.getQuestions, 5000);
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