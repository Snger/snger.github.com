title: 处理 Angularjs 兼容 IE8 问题
comments: true
date: 2015-06-02 14:58:22
categories: [Web前端]
tags: Web前端
description: 
keywords: angularjs
---
##项目背景
项目最早使用的是 angularjs 1.3.x 版本，功能开发完成后，发现使用者中 IE8 用户占比为 ，而且因为项目特质，必须解决用户的 IE8 使用场景，于是乎，有了此文。

##目标
使用 angularjs 并兼容 IE8 （注：本文不考虑兼容低于 IE8 浏览器的情况）

##AngularJS兼容低版本IE文档
[docs.angularjs.org:Internet Explorer Compatibility](https://docs.angularjs.org/guide/ie):
>Note: AngularJS 1.3 has dropped support for IE* Read more about it on our blog. AngularJS 1.2 will continue to support IE8, but the core team does not plan to spend time addressing issues specific to IE8 or earlier.

AngularJS 1.3抛弃了对 IE8 的支持，但 AngularJS 1.2 将继续支持 IE8，但核心团队已经不打算在解决 IE8 及之前版本的问题上花时间。本文档介绍了互联网浏览器（IE）在处理自定义 HTML 标签及属性时的特点。如果你正计划在 IE8 或更早的浏览器上部署 Angular 应用请阅读本文。
项目目前支持且将尝试修复 IE9 以上的 bug。持续集成服务器在 IE9，IE10 和 IE11 上运行所有的测试。详细内容参加 Travis CI 及 [ci.angularjs.org](ci.angularjs.org)。
我们不在 IE8 及之前的浏览器上运行测试。一些 AngularJS 的功能子集也许能够在在这些浏览器上工作，但这将由你来测试并决定它在你的特定应用上是否工作。

……

##总结

###全局
* angular 版本降级：1.3.x -〉 1.2.x；
* 引入 [es5-shim](https://github.com/es-shims/es5-shim)；

> es5-shim可以让一些低级的浏览器支持最新的ecmascript5的一些特性。

###项目
* angularjs 打包(`$templateCache`)；

>[grunt-angular-templates](https://www.npmjs.com/package/grunt-angular-templates)
>Speed up your AngularJS app by automatically minifying, combining, and automatically caching your HTML templates with `$templateCache`.

* 不要使用自定义元素标签，比如 &lt;ng:view>，使用 &lt;div ng-view>来取代。

###Angularjs语法
* 给根元素添加 `id=”ng-app”` 属性与 `ng-app` 属性结合起来。

<pre>
<code>&lt;!doctype html>
&lt;html xmlns:ng="http://angularjs.org" id="ng-app" ng-app="optionalModuleName">
  ...
&lt;/html>
</code></pre>

* 使用 `ng-style` 标签来取代 `style=”{{someCSS}}”`
* angular 1.2 $route 没有 `updateParams` 方法，使用 `$location.search`;(翻页组件)

###浏览器语法
* 删除代码中 Javascript 保留字列表，例如：delete；

>Javascript保留字列表：
break delete function return typeof case do if switch var catch else in this void continue false instanceof throw while debugger finally new true with default for null try Javascript未来保留字(Javascript Future Reserved Words)
>Javascript还有一些未来保留字，这些字虽然现在没有用到Javascript语言中，但是将来有可能用到。
>Javascript未来保留字列表：
abstract double goto native static boolean enum implements package super byte export import private synchronized char extends int protected throws class final interface public transient const float long short volatile

* 删除 IE8 不支持的测试代码，例如 `console.log` ；
* 处理 `placeholder`；
* 删除 对象字面量中 最后一个属性后面的不 `,`；
* 对于数组不能使用 `for..in` 在 IE8 下会有问题, [ie8-for-in-enumerator](http://stackoverflow.com/questions/9085018/ie8-for-in-enumerator) ；

###组件兼容性
* 时间选择控件有问题；
* 单选框、复选框 选中图片没变化，貌似使用 ng-checked 才可以；
* excel 导入 upload 组件有问题；
    a. 上传请求后端返回 content-type 需要改成  Content-Type:text/html; charset=UTF-8
* input[number] max 不支持表达式（模板中好像连数值10也不支持），重新写指令；
* 部分用户反馈 改最终价不生效，后面发现是因为 不响应 ng-keyup 事件，换成 ng-change；

###低级错误
* `form` 错写成 `from` 造成元素上的控制器无效；

###针对 IE8 优化
* 判断 ie8 则限制默认列表数量；
* infiniteScroll 优化加载速度；



