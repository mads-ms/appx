'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', function() {

  })
  .controller('MyCtrl2', function() {

  })
  .controller('viewExercise', function($scope, $routeParams) {
	$scope.exerciseId = $routeParams.exId;
  });
  


