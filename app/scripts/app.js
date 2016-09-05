'use strict';

/**
 * @ngdoc overview
 * @name p3App
 * @description
 * # p3App
 *
 * Main module of the application.
 */
angular
  .module('p3App', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/monuments', {
        templateUrl: 'views/monuments-index.html',
        controller: 'MonumentIndexController',
        controllerAs: 'MIVM'
      })
      .when('/monuments/:id', {
        templateUrl: 'views/monumentsShow.html',
        controller: 'MonShCtrl',
        controllerAs: 'monSCtl'
      })
      .otherwise({
        redirectTo: '/'
      });
      // .config(function($logProvider){
      //   $logProvider.debugEnabled(true);
      // });
  });
