'use strict';
/**
* @ngdoc function
* @name p3App.controller:MonShCtrl
* @description
* # MonumentsCtrl
* Controller of the p3App
global angular
*/

function MonShowCtrlFunction(monumentFactory, $scope) {
  this.monument = monumentFactory.get({id: $scope.id});
}


angular.module('p3App')
.controller('MonShCtrl', [
  'monumentFactory',
  '$scope',
  MonShowCtrlFunction
]);
