---
layout: post
title: "Octopress Issue"
date: 2011-11-28 11:43
comments: true
categories: Octopress 
---
不知什麼原因，Octopress的source分支中的_post文件夾沒被track，博客的文章又更新不能，現在先試試rake new_post[""]，看看效果。

date:2011-11-29 update  
_測試結果爲：_  
-    使用"git status",發現_post文件夾沒被track，使用"git add _post"跟蹤。  
-    測試發文，有效。  

_依舊存在的問題：_  <!-- more -->
-    在github源碼中看不到_post文件夾，不過這也不算壞事。

_經驗：_  
-   在批量傳輸舊文時，直接"rake generate"會有一些問題，例如：文章導入不完整，網站索引可能出問題。最好每添一篇文章都生成一次。
-   更爲主業的測試請進一步閱讀[@yorkxin](https://twitter.com/#!/yorkxin)的_Octopress 搬家記_系列，這是第一篇<http://blog.yorkxin.org/2011/11/26/import-from-wpcom-to-octopress>.

2011年12月6日09时34分19秒update:  
在看《progit》时，忽然想到，为什么在github.com的souce分支中看不到_post目录：原来在根据官网指导的那两次`git push`后自己并没有再上传过；而Octopress的发布日志`rake generate`,`rake deploy`与git是相对独立的，`rake generate`使用[Jekyll](https://github.com/mojombo/jekyll)生成静态网页，并把结果置于octopress/_delploy目录中，在使用`rake deploy`后发布到github.com并同步到博客。
