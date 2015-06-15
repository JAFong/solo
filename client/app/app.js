var app = angular.module('mvp', [
  'mvp.submit',
  'mvp.factories',
  'ui.router',
  'ngRoute'  
]);

app.config(function($urlRouterProvider. $stateProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../index.html',
      controller: 'SubmitController'
    })
});

app.run();