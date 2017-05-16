const app = angular.module('Notes', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeCtrl'
  }).when('/profile', {
    templateUrl: 'partials/profile.html',
    controller: 'ProfileCtrl'
  })
}])
