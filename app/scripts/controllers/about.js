'use strict';

/**
 *
 */
angular.module('jannaApp')
  .controller('AboutCtrl', function ($scope, $location) {
    $scope.currentMenu = "about";
    //$scope.curPath = $location.path();
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
