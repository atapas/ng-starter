'use strict';

/**
 * @ngdoc overview
 * @name mytodoApp
 * @description
 * # mytodoApp
 *
 * Main module of the application.
 */
var app = angular
  .module('app', ['ngRoute'])
  .config(['$routeProvider',function($routeProvider) {
	  $routeProvider

	  .when('/ng-starter',{
      controller:'WelcomeController',
      templateUrl:'views/welcome.html'
    })

	  .otherwise({redirectTo:'/ng-starter'});

 }]);
  
  
