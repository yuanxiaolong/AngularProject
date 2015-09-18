'use strict';

/**
 * 图表工具类
 */
angular.module('jannaApp').factory('chartHelper', ['$http', function ($http) {

    /**
     * 画线图和柱状图
     * @param bussNo     业务编号
     * @param domElement echarts init 的 dom 元素
     * @param jsonData   后台返回的数据
     * @param title      图表标题
     * @param subTitle   图表子标题
     * @param xFormat    X轴 format 的格式, 如果传入为空,则原样输出 后台返回的X轴
     * @param isShowDetail  是否可以查看详情,展示超链接
     */
    var lineAndBar = function (bussNo,domElement,jsonData,title,subTitle,xFormat,isShowDetail) {
        var lineOption = {
            title : {
                text: title,
                subtext: subTitle
            },
            tooltip : {
                //enterable: true,
                //padding: [5, 5, 5, 5],
                backgroundColor: 'rgba(204,160,46,0.8)',
                //borderColor: '#999999',
                //borderRadius: 8,
                //borderWidth: 1,
                //width: 500,
                //color:'#000',
                showDelay: 100,
                hideDelay: 800,
                ////position: function(p) {
                ////    return [p[0] + 20, p[1] + 20];
                ////},
                formatter: function(params, ticket, callback) {
                    var ret = "";
                    var detailDate = "";
                    for(var i=0; i < params.length; i++){
                        if(i == 0){
                            detailDate = params[i].name;
                            ret += detailDate + '<br/>'
                        }
                        ret += params[i].seriesName + ': ' + params[i].value + '<br/>'
                    }
                    if (isShowDetail === true){
                        ret += "<a href='#/charts-detail?detailDate=" + detailDate ;
                        ret += "&bNo=" + bussNo
                        ret += "' target='_blank'>查看</a>";
                    }
                    return ret;
                },
                trigger: 'axis'//'item'
            },
            legend: {
                data: []
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: false},
                    dataView : {show: true, readOnly: true},
                    magicType : {show: true, type: ['line', 'bar','stack','tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            dataZoom : {
                show : true,
                //realtime : true,
                //orient: 'vertical',   // 'horizontal'
                //x: 0,
                y: 36,
                //width: 400,
                height: 20,
                backgroundColor: 'rgba(221,160,221,0.5)',
                dataBackgroundColor: 'rgba(138,43,226,0.5)',
                fillerColor: 'rgba(38,143,26,0.6)',
                handleColor: 'rgba(57,61,70,0.8)',//'rgba(128,43,16,0.8)',
                //xAxisIndex:[],
                //yAxisIndex:[],
                start :40,
                end : 60
                //zoomLock: true
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data: []
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: function(value){
                            if (value > 10000){
                                return value / 10000 + '万'
                            }
                            return value ;
                        }
                    }
                }
            ],
            series : []
        };

        // X轴format
        if (xFormat != '' && xFormat != undefined){
            for(var i=0; i < jsonData.axis.length; i++){
                lineOption.xAxis[0].data.push(moment(jsonData.axis[i]).format(xFormat));
            }
        }else{
            lineOption.xAxis[0].data = jsonData.axis;
        }

        // 图例
        lineOption.legend.data = jsonData.legend;
        // 线
        var series_arr=jsonData.series;
        for(var i=0; i < series_arr.length; i++){
            lineOption.series[i] = jsonData.series[i];
        }

        domElement.hideLoading();
        // 为echarts对象加载数据
        if (jsonData.axis.length <= 24){
            lineOption.dataZoom.start = 80;
            lineOption.dataZoom.end = 20;
        }
        domElement.setOption(lineOption,true);

    };



    /**
     * 画线图
     * @param bussNo     业务编号
     * @param domElement echarts init 的 dom 元素
     * @param jsonData   后台返回的数据
     * @param title      图表标题
     * @param subTitle   图表子标题
     * @param xFormat    X轴 format 的格式, 如果传入为空,则原样输出 后台返回的X轴
     * @param isShowDetail  是否可以查看详情,展示超链接
     */
    var line = function (bussNo,domElement,jsonData,title,subTitle,xFormat,isShowDetail) {
        var lineOption = {
            title : {
                text: title,
                subtext: subTitle
            },
            tooltip : {
                //enterable: true,
                //padding: [5, 5, 5, 5],
                backgroundColor: 'rgba(204,160,46,0.8)',
                //borderColor: '#999999',
                //borderRadius: 8,
                //borderWidth: 1,
                //width: 500,
                //color:'#000',
                showDelay: 100,
                hideDelay: 800,
                ////position: function(p) {
                ////    return [p[0] + 20, p[1] + 20];
                ////},
                formatter: function(params, ticket, callback) {
                    var ret = "";
                    var detailDate = "";
                    for(var i=0; i < params.length; i++){
                        if(i == 0){
                            detailDate = params[i].name;
                            ret += detailDate + '<br/>'
                        }
                        ret += params[i].seriesName + ': ' + params[i].value + '<br/>'
                    }
                    if (isShowDetail === true){
                        ret += "<a href='#/charts-detail?detailDate=" + detailDate ;
                        ret += "&bNo=" + bussNo
                        ret += "' target='_blank'>查看</a>";
                    }
                    return ret;
                },
                trigger: 'axis'//'item'
            },
            legend: {
                data: []
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: false},
                    dataView : {show: true, readOnly: true},
                    magicType : {show: true, type: ['line', 'bar','stack','tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data: []
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: function(value){
                            if (value > 10000){
                                return value / 10000 + '万'
                            }
                            return value ;
                        }
                    }
                }
            ],
            series : []
        };

        // X轴format
        if (xFormat != '' && xFormat != undefined){
            for(var i=0; i < jsonData.axis.length; i++){
                lineOption.xAxis[0].data.push(moment(jsonData.axis[i]).format(xFormat));
            }
        }else{
            lineOption.xAxis[0].data = jsonData.axis;
        }

        // 图例
        lineOption.legend.data = jsonData.legend;
        // 线
        var series_arr=jsonData.series;
        for(var i=0; i < series_arr.length; i++){
            lineOption.series[i] = jsonData.series[i];
        }

        domElement.hideLoading();
        domElement.setOption(lineOption,true);

    };

    /**
     * 画柱状图
     * @param bussNo     业务编号
     * @param domElement echarts init 的 dom 元素
     * @param jsonData   后台返回的数据
     * @param title      图表标题
     * @param subTitle   图表子标题
     * @param xFormat    X轴 format 的格式, 如果传入为空,则原样输出 后台返回的X轴
     * @param isShowDetail  是否可以查看详情,展示超链接
     */
    var bar = function (bussNo,domElement,jsonData,title,subTitle,xFormat,isShowDetail) {
        var lineOption = {
            title : {
                text: title,
                subtext: subTitle
            },
            tooltip : {
                //enterable: true,
                //padding: [5, 5, 5, 5],
                backgroundColor: 'rgba(204,160,46,0.8)',
                //borderColor: '#999999',
                //borderRadius: 8,
                //borderWidth: 1,
                //width: 500,
                //color:'#000',
                showDelay: 100,
                hideDelay: 800,
                ////position: function(p) {
                ////    return [p[0] + 20, p[1] + 20];
                ////},
                formatter: function(params, ticket, callback) {
                    var ret = "";
                    var detailDate = "";
                    for(var i=0; i < params.length; i++){
                        if(i == 0){
                            detailDate = params[i].name;
                            ret += detailDate + '<br/>'
                        }
                        ret += params[i].seriesName + ': ' + params[i].value + '<br/>'
                    }
                    if (isShowDetail === true){
                        ret += "<a href='#/charts-detail?detailDate=" + detailDate ;
                        ret += "&bNo=" + bussNo
                        ret += "' target='_blank'>查看</a>";
                    }
                    return ret;
                },
                trigger: 'axis'//'item'
            },
            legend: {
                data: []
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: false},
                    dataView : {show: true, readOnly: true},
                    magicType : {show: true, type: ['line', 'bar','stack','tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data: []
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: function(value){
                            if (value > 10000){
                                return value / 10000 + '万'
                            }
                            return value ;
                        }
                    }
                }
            ],
            series : []
        };

        // X轴format
        if (xFormat != '' && xFormat != undefined){
            for(var i=0; i < jsonData.axis.length; i++){
                lineOption.xAxis[0].data.push(moment(jsonData.axis[i]).format(xFormat));
            }
        }else{
            lineOption.xAxis[0].data = jsonData.axis;
        }

        // 图例
        lineOption.legend.data = jsonData.legend;
        // 线
        var series_arr=jsonData.series;
        for(var i=0; i < series_arr.length; i++){
            lineOption.series[i] = jsonData.series[i];
        }

        domElement.hideLoading();

        domElement.setOption(lineOption,true);

    };

    return {
        drawLineBar: function (bussNo,domElement,jsonData,title,subTitle,xFormat,isShowDetail) {
            return lineAndBar(bussNo,domElement,jsonData,title,subTitle,xFormat,isShowDetail);
        },
        drawLine: function (bussNo,domElement,jsonData,title,subTitle,xFormat,isShowDetail) {
            return line(bussNo,domElement,jsonData,title,subTitle,xFormat,isShowDetail);
        },
        drawBar: function (bussNo,domElement,jsonData,title,subTitle,xFormat,isShowDetail) {
            return bar(bussNo,domElement,jsonData,title,subTitle,xFormat,isShowDetail);
        }
    };
}]);