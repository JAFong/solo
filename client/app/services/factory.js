var services = angular.module('mvp.factories', [])

services.factory('Questions', function($http) {
  var addQuestion = function(name, text) {
    return $http({
      method:'POST',
      url:'/questions',
      data: JSON.stringify({name: name, text: text})
    })
  };

  var getQuestions = function() {
    return $http({
      method:'GET',
      url:'/questions'
    })
  }

  var upvote = function() {

  };

  var hello = function() {
    return 'Test even more!'
  };

  return {
    addQuestion: addQuestion,
    getQuestions: getQuestions,
    upvote: upvote,
    hello: hello
  }
});