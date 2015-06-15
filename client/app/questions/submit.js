var submit = angular.module('mvp.submit', []);

submit.controller('SubmitController', function($scope, Questions) {
  $scope.submit = function() {
    console.log("Name: ", $scope.name)
    console.log("Text: ", $scope.questionText)
    Questions.addQuestion($scope.name, $scope.questionText);
  }
});