'use strict';
/**
 * 渲染工具类,用于转义页面中 英文->中文
 */
angular.module('jannaApp').filter('renderFlowStatus', function () {

  return function (status) {
    if (status == 'applying') {
      return '申请保存';
    } else if (status == 'approving') {
      return '提交待审';
    } else if (status == 'rejected') {
      return '已拒绝';
    } else if (status == 'approved') {
      return '审批通过';
    } else if (status == 'running') {
      return '运行中';
    }
    return status;
  }
}).filter('renderIsDeleted', function () {
  return function (isDeleted) {
    if (isDeleted == 'N') {
      return '采集';
    } else if (isDeleted == 'Y') {
      return '不采集';
    }
    return isDeleted;
  }
}).filter('renderIsEnable', function () {
  return function (isEnable) {
    if (isEnable == 'N') {
      return '否';
    } else if (isEnable == 'Y') {
      return '是';
    }
    return isEnable;
  }
}).filter('renderHeartbeat', function ($sce) {
  return function (heartbeatTime) {
    if (heartbeatTime == null || heartbeatTime == undefined){
      return $sce.trustAsHtml("<span style='color:#33518f;'>" + "waiting" + "</span>");
    }
    var now = moment().format('YYYY-MM-DD HH:mm:ss');
    var after3Mins = moment(heartbeatTime).add(3,'m').format('YYYY-MM-DD HH:mm:ss');
    if (now > after3Mins) {
      return $sce.trustAsHtml("<span style='color:red;'>" + heartbeatTime + "</span>");
    }
    return $sce.trustAsHtml("<span style='color:#289b14;'>" + heartbeatTime + "</span>");
  }
  }).filter('renderConfigStatus', function ($sce) {
  return function (status) {
    if (status == null || status == undefined){
      return $sce.trustAsHtml("<span style='color:#898f87;'>" + "未知" + "</span>");
    }
    if (status == 'init') {
      return $sce.trustAsHtml("<span style='color:#d2a12e;'>" + "暂存" + "</span>");
    } else if (status == 'waiting') {
      return $sce.trustAsHtml("<span style='color:#33518f;'>" + "待部署" + "</span>");
    } else if (status == 'fail') {
      return $sce.trustAsHtml("<span style='color:#ff1f2b;'>" + "失败" + "</span>");
    } else if (status == 'success') {
      return $sce.trustAsHtml("<span style='color:#289b14;'>" + "成功" + "</span>");
    }
  }
}).filter('renderSaveTime', function () {
  return function (dateTime) {
    if (dateTime == '' || dateTime == undefined) {
      return 'N/A';
    }
    return moment(dateTime).format('MM-DD HH:mm');;
  }
});
