'use strict';

// (function(){
angular.module ( 'p3App' )
.service ( 'MonumentService', function MonumentService() {
  this.query = function ($http) {
    var x = $http.get('https://pokemonuments.herokuapp.com/monuments.json');
    console.log('in factory: ' + x);
    return x;
  };









});
