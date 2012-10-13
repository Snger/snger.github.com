---
layout: post
title: "认清实际"
date: 2012-05-18 20:46
comments: true
categories: 读书笔记
---

继续话题：[计算机课程之1：认清实际](http://developer.51cto.com/art/201202/315330.htm).

### 1. 列举10个Python Web框架  
关于 Python web 框架，网络上流传比较广的版本是来自[飞龙博客](http://feilong.me)的[浅谈Python web框架](http://feilong.me/2011/01/talk-about-python-web-framework),其文主要介绍了 [Django](http://www.djangoproject.com/)、[Pylons](http://www.pylonshq.com/)、[Tornado](http://www.tornadoweb.org/)、[Bottle](http://bottle.paws.de/)、[Quixote](http://www.quixote.ca/).[点击这里-查看更多](http://wiki.python.org/moin/WebFrameworks)

### 2. Python有多少种不同的解释器？
在 Wikipedia 中的 [Python解释器 分类](http://zh.wikipedia.org/wiki/Category:Python%E8%A7%A3%E9%87%8A%E5%99%A8)中，主要列出三种：

* [CPython](http://zh.wikipedia.org/wiki/CPython)
>CPython是用C语言实现的Python解释器，也是官方的并且是最广泛使用的Python解释器。除了CPython以外，还有用JAVA实现的Jython和用.NET实现的IronPython，使Python方便地和JAVA程序、.NET程序集成。

* [IronPython](http://zh.wikipedia.org/wiki/IronPython)
>IronPython 是一种在 .NET 和 Mono 上实现的 Python 语言，由 Jim Hugunin（同时也是 Jython 创造者）所创造。在 2007 年，开发者决定改写构架，使用动态类型系统以让更多脚本语言能很容易地移植到.NET Framework上。

* [Jython](http://zh.wikipedia.org/wiki/Jython)
>Jython，（原JPython），是一个用JAVA语言写的Python解释器。Jython程序可以和Java无缝集成。除了一些标准模块，Jython使用Java的模块。Jython几乎拥有标准的Python中不依赖于C语言的全部模块。

* [PyPy](http://zh.wikipedia.org/wiki/PyPy)
>PyPy是用Python实现的Python解释器。PyPy比CPython是更加灵活，易于使用和试验，以制定具体的功能在不同情况的实现方法，可以很容易实施。

### 3. Perl 跟 Python 有什么不同？
两者设计思想的不同：  
Perl--["there is more than one way to do it"](http://en.wikipedia.org/wiki/There_is_more_than_one_way_to_do_it)  
Python--["there should be one—and preferably only one—obvious way to do it"](http://www.python.org/dev/peps/pep-0020/)  
推荐阅读[Perl 与 Python 之间的一些异同](http://www.ibm.com/developerworks/cn/linux/l-cn-perl2python/index.html),文章从 1.起源与特点 2.基本数据类型 3.控制结构 4.函数 5.包与模块 6.面向对象 7.正则表达式 8.线程 方面进行了比较。

