title: 查看代码变更（或审查代码）的建议
date: 2014-02-27 12:35:06
comments: true
categories: 工具
tags: [vim, git, vimdiff]
description: 目前的工作流中，是使用branch来管理不同的功能点开发的，那么我们怎样能比较不同branch的不同呢？
keywords: git diff vimdiff

---

目前的工作流中，是使用branch来管理不同的功能点开发的，那么我们怎样能比较不同branch的不同呢？  
在更新代码量不大的情况下使用 git diff  branch1 branch2 , 就可以了；但这个方法也有一些缺点：

1. 在更新代码很多的时候，不能看到代码改动的整体情况；
2. 因为只能显示不同点的上下几行，不够直观，不方便理解；
3. 有遇到有的部分更改没显示的情况；

####可针对性地配合以下方式：

1. git diff --stat branch1 branch2   统计有哪些文件被改动，有多少行被改动
2. git diff --shortstat branch1 branch2 只显示 --stat 中最后的行数修改添加移除统计。
3. git diff --dirstat branch1 branch2  以百分比的方式统计文件夹的改动情况
4. 使用 vimdiff 查看代码变更，具体操作如下：

------

##使用 vimdiff 来审查代码；


<pre><code>确认模式： git difftool -t vimdiff +对比两分支
静默模式： git difftool -t vimdiff -y +对比两分支</code></pre>



###进入 vimdiff 后，切换窗口：

窗口焦点切换，即切换当前窗口

<pre><code>CTRL-w h 跳转到左边的窗口
CTRL-w j 跳转到下面的窗口
CTRL-w CTRL-w 跳转到另一个窗口，同CTRL-w w </code></pre>



###同时退出两个 vi 窗口：

<pre><code>:qa （当前文件审核通过，）同时退出两个 vi 窗口（，进入下一个文件审核） </code></pre>

###代码审核中，滚动：

<pre><code>jkhl 基本的上下左右  
CTRL-U 向上滚动半屏  
CTRL-D 向下移动半屏  
CTRL-F 向下滚动一整屏(forward)  
CTRL-B 向上滚动一整屏(backward)
32j    向下跳32行
CTRL-G 显示当前所在文件中的位置（例如："usr_03.txt" line 233 of 650 --35%-- col 45-52）
:set number 显示行号
:set nonumber 不显示行号
gg   回到页首
]c   跳转到下一个差异点
[c   跳转到上一个差异点
zo   临时展开被折叠的相同的文本行
zc   重新折叠相同的文本行</code></pre>

###其他设置：
<pre><code>:set noscrollbind  关闭两侧文件的对齐（滚动不同步）</code></pre>

可参考：【技巧：Vimdiff 使用】 https://www.ibm.com/developerworks/cn/linux/l-vimdiff/
