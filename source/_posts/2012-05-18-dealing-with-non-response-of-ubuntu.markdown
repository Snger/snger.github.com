---
layout: post
title: "Ubuntu无响应的处理方法"
date: 2012-05-18 22:10
comments: true
categories: Linux
tags: Linux
description: Ubuntu无响应的处理方法


---
在更新了Ubuntu12.04后，经常遇到电脑无响应的状态，一般的症状是：鼠标可以移动，键盘却无法操作，点击笔记本的音量控制键，指示灯有变化，音量却没变化，很是无奈。  
症状一般发生在使用 Flash 、使用 Chrome 浏览一些页面没优化好的网页、Chrome 开15+网页的时候。  
尝试过使用 Gnome Classic 假死的情况基本上不出现，不过后来 Gnome 和 Unity 有些冲突，又切回 Unity，于是这状况又出现了。  
搜索了下，发现一些人更新显卡驱动后，情况好转。关于显卡安装，[请点这里](http://forum.ubuntu.org.cn/viewtopic.php?t=140531)  
另外，[这篇文章介绍了Ubuntu死机、无响应的处理方法](http://fgqiblog.appspot.com/?p=43001),比较推荐的方法是：

1. 按Ctrl-Alt-(F1～F6)，进入控制台进行相关的操作
2. 用户名和密码登录，然后运行 top 命令，查看正在运行的程序，记下占 CPU 高的程序的 PID 
3. 输入 kill + PID ,结束相应的进程
4.  Alt + F7 切换回图形界面

5月20更新：发现 kill 相关进程后，切换回图形界面还是呈现卡死状态，又不想重启电脑，于是使用  
`sudo skill -KILL -u 图形界面登录的用户名`  
去重启图形界面。


