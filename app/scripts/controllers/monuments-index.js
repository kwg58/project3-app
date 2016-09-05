'use strict';

// /**
// * @ngdoc function
// * @name p3App.controller:MonumentIndexController
// * @description
// * # MonumentsCtrl
// * Controller of the p3App
// */

function GetMonuments(MonumentFactory) {
  // var vm = this;
  var monumentsList = MonumentFactory.GetMonuments;
  return monumentsList;
  // MonumentFactory.get().$promise.then(function(response) {
  //   console.log(response);
  //   vm.monuments = response;
  // });


}

// (function() {
  angular.module('p3App')
  .controller('MonumentIndexController', [
    'MonumentFactory',
    GetMonuments
  ]);



// })();
