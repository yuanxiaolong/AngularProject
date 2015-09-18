'use strict';

/**
 * 常量类,作为配置文件使用
 */

angular.module('jannaApp').factory('constHepler', ['$http', function ($http) {
  return {
    url: 'http://127.0.0.1:8099'
  };
}]);
