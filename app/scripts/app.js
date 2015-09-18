'use strict';

/**
 * 程序主函数,用于注册服务,依赖注入
 */
angular.module('jannaApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'smart-table',
    'ui.bootstrap'
])
    .config(function ($routeProvider, $locationProvider, $httpProvider) {

        //$locationProvider.html5Mode(true); //去掉angularJs 中url路径中的 # 号
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/demo', {
                templateUrl: 'views/demo/demo.html',
                controller: 'DemoCtrl'
            })
            .when('/charts', {
                templateUrl: 'views/charts/charts-overview.html',
                controller: 'ChartsCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        //字符串替换 好像有问题
        String.prototype.replaceAll = function (s1, s2) {
            return this.replace(new RegExp(s1, "gm"), s2);
        };
    });
