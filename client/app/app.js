const app = angular.module('Notes', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeCtrl'
  }).when('/addEntry', {
    templateUrl: 'partials/addEntries.html',
    controller: 'AddEntryCtrl'
  })
}])
