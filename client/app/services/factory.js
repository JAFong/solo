var services = angular.module('mvp.factories', [])

services.factory('Questions', function($http) {
  var addQuestion = function(name, text) {
    console.log("Factory Posted")
    return $http({
      method:'POST',
      url:'/questions',
      data: JSON.stringify({name: name, text: text})
    });
  };

  var getQuestions = function() {
    return $http({
      method:'GET',
      url:'/questions'
    });
  }

  var deleteQuestion = function(id) {
    return $http({
      method:'DELETE',
      url:'/questions',
      data: JSON.stringify({id: id}),
      headers: {"Content-Type": "application/json"}
    });
  }

  var upvote = function(id) {
    return $http({
      method:'POST',
      url:'/questions/upvote',
      data: JSON.stringify({id: id}),
      headers: {"Content-Type": "application/json"}
    });
  };

  var hello = function() {
    return 'Test even more!'
  };

  return {
    addQuestion: addQuestion,
    getQuestions: getQuestions,
    upvote: upvote,
    deleteQuestion: deleteQuestion,
    hello: hello
  }
});