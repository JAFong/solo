var display = angular.module('mvp.display', []);

display.controller('DisplayController', function($scope, Questions) {
  
  var init = function() {
    $scope.getQuestions();
  };
  
  $scope.getQuestions = function() {
    Questions.getQuestions()
    .then(function(response){
      console.log(response.data);
    })
  };
  
  init();
});