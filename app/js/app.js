'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/queryObjects', {templateUrl: 'partials/queryObject.tpl.html', controller: 'QueryObjectsCtrl'});
    $routeProvider.otherwise({redirectTo: '/queryObjects'});
  }]);
