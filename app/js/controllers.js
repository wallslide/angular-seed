'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('QueryObjectsCtrl', ['$http', '$scope', function($http, $scope) {
    $http.get('data/testdata.json').success(function(data) {
      $scope.queryObjects = data;
    });

    $scope.show = {};
    $scope.shouldShowDelete = function(url){
      return ($scope.show.hasOwnProperty(url) && $scope.show[url]);
    }

    $scope.removeQueryObject = function(url){
      $scope.queryObjects = _.filter($scope.queryObjects, function(item) {
        return item.srcUrl !== url;
      });
    }

  }]);