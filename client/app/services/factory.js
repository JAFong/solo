var services = angular.module('mvp.factories', [])

services.factory('Questions', function($http) {
  var addQuestion = function(name, text) {
    return $http({
      method:'POST',
      url:'/messages',
      data: {name: name, text: text}
    })
  };

  var getQuestions = function() {
    return $http({
      method:'GET',
      url:'/messages'
    })
  }

  var hello = function() {
    return 'Test even more!'
  };

  return {
    addQuestion: addQuestion,
    getQuestions: getQuestions,
    hello: hello
  }
});