# janna

demo for angularjs with some useful tool

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.7.1.

---

## Build & development

环境准备：

* node > 0.10.20
* bower > 1.3.8
* npm > 2.8
* grunt >= 0.1.13


类似

```
root@mini ~$ node -v && bower -v && npm -v && grunt --version
v0.10.28
1.4.1
2.9.1
grunt-cli v0.1.13
```

* node安装：百度上有很多（安装完成后npm也被集成进去了）
* bower安装：```npm install -g bower```
* grunt安装： ```cd <your dir> && npm install -g grunt && npm install -g grunt-cli ``` 

```bower install && npm install```


> 开发环境：运行 `grunt serve` 即可运行并预览工程, 默认 http://localhost:9100 并修改Gruntfile.js为localhost 修改 script/tool/const.js 为 127.0.0.1
>
> 生产环境: 运行 ```grunt build ``` 后会生成 一个 dist 目录，然后 ``` nohup grunt serve:dist >> jannaRun.log 2>&1 & ```
>
> 检查进程  ``` ps -ef | grep grunt ```


---

## IDEA 导入工程

File -> Open -> Choose Dir

安装 angularJs 插件
Preference -> Plugins -> Browse repository -> 选择 angularJs

---

## 说明

整个项目是利用 Yoman 创建工程骨架，并利用 angularJs 作为MVC 框架，bower管理静态资源，npm 管理nodejs包，
工程运行在node环境上

echarts 没有用bower管理，可以切换成bower管理，仅仅是留了一个添加自定义js到grunt的入口


## 注意

请不要提交本地的 Gruntfile.js 和 script/tool/const.js

```
// The actual grunt server settings
    connect: {
      options: {
        port: 9100,
        // Change this to '0.0.0.0' to access the server from outside.
        //hostname: '0.0.0.0', //   注意:禁止打开这项
        hostname: 'localhost', //本机
        //hostname: '10.200.8.44', //dev
        //hostname: '10.100.5.3', //内网
        livereload: 35729
      },
```



