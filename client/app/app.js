var app = angular.module('mvp', [
  'mvp.factories',
  'mvp.submit',
  'mvp.display',
  'ui.router',
  'FBAngular'
])
.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../index.html',
      controller: 'SubmitController'
    })
});

// var app = angular.module('mvp', [
//   'mvp.submit',
//   'mvp.factories',
//   'ui.router'
// ]);

// app.config(function($urlRouterProvider. $stateProvider) {
  
//   $urlRouterProvider.otherwise('/');

//   $stateProvider
//     .state('home', {
//       url: '/',
//       templateUrl: '../index.html',
//       controller: 'SubmitController'
//     })
// });

app.run();