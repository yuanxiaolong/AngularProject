'use strict';
/**
 * 入口欢迎页
 */
angular.module('jannaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.currentMenu = "main";
    $scope.welcomeMsg = 'You wanna date with me ? ';
    console.log(moment().format('YYYY-MM-DD HH:mm:ss'));//当前时间
    console.log(moment().format('d'));  //今天星期几
  });
