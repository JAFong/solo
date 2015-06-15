var submit = angular.module('mvp.submit', []);

submit.controller('SubmitController', function($scope) {
  $scope.submit = function() {
    console.log("Hello World!")
    alert("Hello World!")
  }
});