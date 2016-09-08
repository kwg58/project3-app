'use strict';
// // http://weblogs.asp.net/dwahlin/using-an-angularjs-factory-to-interact-with-a-restful-service
// /**
// * @ngdoc service
// * @name p3App.monuments
// * @description
// * # monuments
// * Factory in the p3App.
// */



(function() {
  angular
  .module ( 'p3App' )
  .factory ( 'MonumentFactory', [
    '$http',
    GetMonuments
  ]);

  function GetMonuments( $http ) {
    return $http({
      method: 'GET',
      url: 'https://pokemonuments.herokuapp.com/monuments.json'
    }).success(function(data){
      console.log('Factory');
      console.log(data);
      return data;
    }).error(function(){
      // alert('error');
      return null ;
    });

  }



})();








// function MonumentFactoryFunction ( $resource ) {
//   return $resource( 'https://pokemonuments.herokuapp.com/monuments.json', {}, {
//     update: {method: 'PUT'}
//   });

// angular.module('p3App')
// .factory('monumentFactory',  ['$http', function($http){
//
//   var monumentFactory = {};
//   var monumentData = '';
//   var urlBase = 'https://pokemonuments.herokuapp.com/monuments';
//
//   var GetMonuments = function(urlBase) {
//     monumentData =  $http.get(urlBase + '.json');
//     return monumentData;
//     // var obj = {content:null};
//     // // var url = 'https://pokemonuments.herokuapp.com/monuments.json&callback=JSON_CALLBACK';
//     // $http.get(urlBase).
//     // success(function(data) {
//     //   console.log('success content: ' + obj.content);
//     //   return obj.content;
//     // }).
//     // error(function(data, status){
//     //   console.log('failure: ' + status);
//     //   return status;
//     // });
//   };
// return monumentFactory;
// }]);
//
//
//
// // return $resource('https://pokemonuments.herokuapp.com/monuments.json', {}, {
// //   update: {method: 'PUT'}
// // });
