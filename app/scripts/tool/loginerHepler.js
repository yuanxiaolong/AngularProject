'use strict';

/**
 * 用户信息工具类,用于封装成通用的http获取用户信息操作
 */
angular.module('jannaApp').factory('loginerHepler', ['$http', function ($http) {
  var userInfo = 'admin';
  var doGetUser = function (param) {
    if (userInfo == '') {
      return $http.get('http://127.0.0.1',
        {
          params: param
        }).success(function (data) {
          userInfo = data;
        });
    }
    return userInfo;
  };
  return {
    doGet: function (param) {
      return doGetUser(param);
    }
  };
}]);
