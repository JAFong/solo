var services = angular.module('mvp.factories', [])

services.factory('Questions', function($http) {
  var addQuestion = function(question) {
    return $http({
      method:'POST',
      url:'/messages',
      data: question
    })
  };

  return {
  }
});