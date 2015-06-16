var submit = angular.module('mvp.submit', []);

submit.controller('SubmitController', function($scope, Questions) {
  $scope.name;
  $scope.questionText;
  $scope.submit = function(valid) {
    // console.log(valid);
    if ( valid ) {
    console.log("Posted!");
      // console.log("Name: ", $scope.name)
      // console.log("Text: ", $scope.questionText)
      Questions.addQuestion($scope.name, $scope.questionText)
      .then(function() {
        $scope.name = "";
        $scope.questionText="";
      });
    }
  }
});