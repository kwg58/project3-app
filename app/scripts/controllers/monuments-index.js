'use strict';

// /**
// * @ngdoc function
// * @name p3App.controller:MonumentIndexController
// * @description
// * # MonumentsCtrl
// * Controller of the p3App
// */

(function() {
  angular.module('p3App')
  .controller('MonumentIndexController', [
    'MonumentFactory',
    GetMonuments
  ]);

  function GetMonuments(MonumentFactory) {
    // var vm = this;
    var monumentsList = MonumentFactory.GetMonuments;
    // var monumentsList = MonumentService.query();
    console.log('Monuments: ' + monumentsList);
    return monumentsList;
    // MonumentFactory.get().$promise.then(function(response) {
    //   console.log(response);
    //   vm.monuments = response;
    // });


  }



})();
