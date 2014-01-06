---
layout: post
title: "在Ubuntu系统安装Magento"
date: 2012-05-22 01:54
comments: true
categories: php
tags: [Magento, php]
description: 如何在Ubuntu系统安装Magento
permalink: magentoinstallationinubuntu

---

Install Apache 2 WebServer  
Code:  
`sudo apt-get install apache2`

Install PHP5  
Code:  
`sudo apt-get install php5`  

Install Mysql Server  
Code:  
`sudo apt-get install mysql-server`  

Apart from default installation of LAMP we need to install php5-curl,from terminal issue the command  
Code:  
`sudo apt-get install php5-curl`  

After this you need to enable mod_rewrite by issuing this command in the terminal(This is for Clean SEO URLS,you can skip this if you do not want)  
Code:  
`sudo a2enmod rewrite`  

Install Phpmyadmin  
code:  
`sudo apt-get install libapache2-mod-auth-mysql php5-mysql phpmyadmin`  

Finally restart the apache  
Code:  
`/etc/init.d/apache2 restart`

导入 magento-sample-data:

		mysql -u root -p
		mysql>create database magento;
		mysql>use magento
		mysql>source path/data_file.sql

解压 magento 到 /var/www/ 中，或用命令复制：

		sudo cp -ri /downloads/magento /var/www/

启动 apache,打开浏览器访问 http://127.0.0.1/magento 进入安装界面，若不改动设置，直接下一步……  
若遇到错误提示：

>Path "/var/www/magento/app/etc" must be writable.  
>Path "/var/www/magento/var" must be writable.  
>Path "/var/www/magento/media" must be writable.  

设置对应的文件权限：

		sudo chmod -R a+w /var/www/magento/app/etc
		sudo chmod -R a+w /var/www/magento/media
		sudo chmod -R a+w /var/www/magento/var

相关设置完成后，选择进入 网站前台 或是 管理后台。<!-- more -->

---

linux 小常识 -- 设置 Ubuntu Root 用户：  

1. 打开终端，输入：`sudo passwd root` 然后按回车  
2. 此时会提示你输入密码，在password:后输入你现在登录的用户的密码  
3. 然后系统提示你输入新的UNIX密码  
Enter new UNIX password:这里输入你想为root设置的密码，要输入两次  
4. 此时系统会出现密码设置成功的提示，于是就可以用 `su rooot` 或者 `sudo -s -H` 切换到root权限
