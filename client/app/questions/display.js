var display = angular.module('mvp.display', []);

display.controller('DisplayController', function($scope, Questions, $interval, $rootScope, Fullscreen) {
  
  var init = function() {
    $scope.getQuestions();
    // $interval($scope.getQuestions, 10000);
  };
  
  $scope.questions = [];
  $scope.newestQuestion = [];
  $scope.answered = false;
  $scope.presenterMode = false;

  //For testing
  $scope.log = function(question, param) {
    console.log(question);
    // console.log(angular.element(param.target).text());
  };

  $scope.$on('update', function() {
    $scope.getQuestions();
  });
  
  // $scope.goFullscreen = function () {
  //   if (Fullscreen.isEnabled()) {
  //     Fullscreen.cancel();
  //   }
  //   else {
  //     Fullscreen.enable( document.getElementById('questionDisplay') );
  //   }
  // }

  $scope.editQuestion = function(question, event) {
    Questions.editQuestion(question._id, angular.element(event.target).text())
    .then(function(response) {
      $scope.getQuestions();
      $rootScope.$broadcast('update')
    });
  }

  $scope.delete = function(question) {
    Questions.deleteQuestion(question._id)
    .then(function(response) {
      $scope.getQuestions();
      $rootScope.$broadcast('update');
    });
  }
  
  $scope.upvote = function(question){
    Questions.upvote(question._id)
    .then(function(response) {
      console.log(response);
      $scope.getQuestions();
      $rootScope.$broadcast('update');
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