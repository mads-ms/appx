'use strict';

var exercises = [
	{id:1, title:'knee',desc:'this exercise will hurt',src:'someurl.mp4'},
	{id:2, title:'elbow',desc:'this exercise will hurt',src:'someurl.mp4'},
	{id:3, title:'shoulder',desc:'this exercise will hurt',src:'someurl.mp4'},
	{id:4, title:'ancle',desc:'this exercise will hurt',src:'someurl.mp4'}
];
// console.log(exercises);



// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.when('/exercise/:exId', {templateUrl: 'partials/exercise.html', controller: 'viewExercise'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
