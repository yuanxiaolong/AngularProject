'use strict';

/**
 * demo
 */
angular.module('jannaApp')
    .controller('DemoCtrl', function ($scope, $http, $modal, $log, httpHepler, loginerHepler, constHepler) {
        $scope.currentMenu = "demo";

        var mockData = '[{"errorInfo":null,"gmtCreated":"2015-09-07 15:12:52","gmtCreator":null,"gmtModified":"2015-09-18 10:33:48","gmtModifier":null,"heartbeatTime":"2015-09-18 10:33:48","hostname":"hadoop2","id":1,"ip":"10.200.8.44","isEnable":"Y"},{"errorInfo":null,"gmtCreated":"","gmtCreator":"","gmtModified":"2015-09-18 10:33:42","gmtModifier":null,"heartbeatTime":"2015-09-18 10:33:42","hostname":"test","id":2,"ip":"10.200.8.67","isEnable":"Y"}]';
        $scope.rowCollection = angular.fromJson(mockData);

        //var userId = loginerHepler.doGet({});
        //httpHepler.doGet(constHepler.url + '/demo', {
        //    userId: userId
        //}, function (data) {
        //    $scope.rowCollection = angular.fromJson(data);
        //});
        $scope.itemsByPage = 10;//每页页数

        //新增申请
        $scope.newDialog = function (size) {
            $modal.open({
                templateUrl: 'newDemoDialogContent.html',
                controller: 'newDemoCtrl',
                scope: $scope,
                size: size
            });
        };


        // 提示
        $scope.successAlerts = [];
        $scope.newDemoAlerts = [];


        $scope.closeNewApplyAlert = function (index) {
            $scope.newDemoAlerts.splice(index, 1);
        };

        $scope.closeSuccessAlert = function () {
            $scope.successAlerts.pop();
        };
    })

    .controller('newDemoCtrl', function ($scope, $http, $modalInstance, $timeout, httpHepler, loginerHepler, constHepler) {
        var userId = loginerHepler.doGet({});
        $scope.newDemoAlerts.pop();

        $scope.ok = function () {
            var msg = '';
            if ($scope.ip == '' || $scope.ip == undefined) {
                msg += '[IP]';
            }
            if ($scope.hostname == '' || $scope.hostname == undefined) {
                msg += '[hostname]';
            }

            var isEnable = $scope.isEnable;

            if (isEnable == '' || isEnable == undefined) {
                isEnable = 'Y';
            }

            $scope.formData = {
                ip: $scope.ip,
                hostname: $scope.hostname,
                isEnable: isEnable
            };

            if (msg == '') {
                //httpHepler.doPost(constHepler.url + '/someurl', $scope.formData, function (data) {
                //    $modalInstance.close(); //关闭弹出层
                //
                //    // 弹出成功提示
                //    $scope.successAlerts.pop();
                //    $scope.successAlerts.push({type: 'success', msg: '成功'});
                //
                //    // 2秒后关闭提示
                //    $timeout(function () {
                //        $scope.successAlerts.pop()
                //    }, 2000);
                //
                //    // 刷新列表
                //    httpHepler.doGet(constHepler.url + '/demo', {
                //        userId: userId
                //    }, function (data) {
                //        $scope.$parent.rowCollection = angular.fromJson(data);//注意这里是parent
                //    });
                //});
            } else {
                $scope.newDemoAlerts.pop();
                $scope.newDemoAlerts.push({type: 'danger', msg: '请填写 ' + msg});
            }
        };
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    });
