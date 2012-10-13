---
layout: post
title: "Ubuntu使用K2pdfopt转换pdf"
date: 2012-05-20 14:36
comments: true
categories: 工具
---

>"喜欢阅读电子书的朋友，特别是拥有Kindle等电纸书的朋友谈到扫描PDF(Scanned PDF)，大多是又爱又恨，”爱”在大量书籍、尤其是发行较早或外文原版的一些经典书籍，多由热心人士私下扫描成PDF发布在网络上，可以方便地下载到硬盘里(摆在那儿心里就踏实，看不看就另说了)；”恨”在扫描PDF(Scanned PDF)”骨头”太硬，不能像原生PDF(Native PDF)那样转换成各种格式。小小6寸屏，甚至3、4寸屏，纵然有满腔阅读热情，眼睛挤着挤着就吃不消了。由[Willus](http://www.willus.com/author/)开发的[免费PDF处理软件K2PDFopt](http://www.willus.com/k2pdfopt/)很好地解决了这个问题，可以让大家硬盘里堆积如山的扫描PDF真正重见天日。"--[用K2PDFopt重排版面，随手解救扫描PDF](http://note1day.com/2011/12/k2pdfopt/)  

在 ubuntu 安装也十分简单，主要是这几个步骤：

1. 去 [K2pdfopt Download](http://willus.com/k2pdfopt/download/) 下载相应的版本
2. 在文件所在的下载目录（一般是 Downloads ），右键所下载文件，把文件移动到主目录（家目录 Home）
3. Ctrl + Alt + T 进入命令行，依次输入如下代码：

		sudo mv k2pdfopt /usr/local/bin
		(输入你的密码)
		chmod a+x /usr/local/bin/k2pdfopt
		mkdir .local/share/applications
		cat > .local/share/applications/k2pdfopt.desktop
		[Desktop Entry]
		Name=k2pdfopt
		Exec=/usr/local/bin/k2pdfopt %f
		Terminal=true
		Type=Application
		Categories=Application
		(按下组合键 <Ctrl-D>)
		exit

4. 完成前三步后，你就可以在任意 .pdf 文件右击，在 “更多应用程序” 中找到 k2pdfopt, 选择后你就可以看到 k2pdfopt 的功能界面了。

喜欢看图示的朋友可以看看 [GETTING STARTED: UBUNTU DESKTOP 11.1](http://www.willus.com/k2pdfopt/help/ubuntu.shtml)  
更多技巧，可以看看 [K2pdfopt使用常见问题](http://note1day.com/2011/12/k2pdfopt-faq/)

