'use strict';

/**
 * http工具类,用于封装成通用的http操作,减少代码回调冗余逻辑
 */

angular.module('jannaApp').factory('httpHepler', ['$http', function ($http) {
  var doGet = function (url, param, fun) {
    return $http.get(url,
      {
        params: param
      }).success(function (data) {
        fun(data);
      });
  };

  var doPost = function (url, param, fun) {
    return $http(
      {
        url: url,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        data: param
      }).success(function (data) {
        fun(data);
      });
  };

  var doPut = function (url, param, fun) {
    return $http(
      {
        url: url,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        data: param
      }).success(function (data) {
        fun(data);
      });
  };

  var doDelete = function (url, param, fun) {
    return $http(
      {
        url: url,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        data: param
      }).success(function (data) {
        fun(data);
      });
  };
  return {
    doGet: function (url, param, fun) {
      return doGet(url, param, fun);
    },
    doPost: function (url, param, fun) {
      return doPost(url, param, fun);
    },
    doPut: function (url, param, fun) {
      return doPut(url, param, fun);
    },
    doDelete: function (url, param, fun) {
      return doDelete(url, param, fun);
    }
  };
}]);
