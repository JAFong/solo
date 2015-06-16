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

  var upvote = function(id) {
    return $http({
      method:'POST',
      url:'/questions/upvote',
      data: JSON.stringify({id: id})
    });
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