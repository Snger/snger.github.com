title: Hello Hexo
date: 2013-12-31 14:04:44
comments: true
categories: 博客相关
tags: hexo
description: hexo是由Node.js驱动的一款快速、简单且功能强大的博客框架。

---

Welcome to [Hexo](http://zespia.tw/hexo)! Check [documentation](http://zespia.tw/hexo/docs) to learn how to use.

hexo是由Node.js驱动的一款快速、简单且功能强大的博客框架。它和jekyll相比，更快，更轻量。之前在Github上托管的博客就是使用jekyll搭建的，官方的Github Pages同样推荐使用它。但是jekyll目前有不少缺点，包括生成速度尤其是文章多了以后的生成速度让人无法接受，默认引擎Redcarpet解析Markdown时对中文支持不好，而且在Windows上使用问题多多，之前被严重坑过，虽然有解决的办法但是实在是耗费精力。[via alimon](http://yangjian.me/workspace/building-blog-with-hexo/)  

---

##Create a New Post

`$ hexo new [layout] <title>`

Hexo has 3 default layouts: post, page and draft.<table style="width:400px;"><tr><th>Layout</th><th>Destination</th></tr>
<tr><td>post (Default)</td><td>	source/_posts</td></tr>
<tr><td>page</td><td>	source</td></tr>
<tr><td>draft	</td><td>source/_drafts</td></tr></table>

###Example

<pre><code>$ hexo new "New Post"
# => The file will be created at source/_posts/new-post.md
$ hexo new page "New Page"
# => The file will be created at source/new-page/index.html
$ hexo new draft "New Draft"
# => The file will be created at source/_drafts/new-draft.md
</code></pre>

##Code Highlighting

<pre><code>&lt;pre&gt;&lt;code&gt;
code snippet
&lt;/code&gt;&lt;/pre&gt;
</code></pre>

##Generating
Generate static files with Hexo is quite easy and fast.

<pre><code>$ hexo generate</code></pre>

###Watch for File Changes

Hexo can watch for file changes and regenerate files immediately.

<pre><code>$ hexo generate --watch</code></pre>

###Deploy After Generating

To deploy after generating, you can run one of the following commands. Both of them are equaled.

<pre><code>$ hexo generate --deploy
$ hexo deploy --generate</code></pre>

or

<pre><code>hexo clean
hexo generate
hexo deploy
</code></pre>

---

##server
To start server, run the following command:

<pre><code>$ hexo server</code></pre>

Your website will running at `http://localhost:4000`

安装 hexo-livereload 插件后，文件修改会自动刷新页面；

###Static Mode

In static mode, only files in public folder will be served and file watching is disabled. You have to run hexo generate before starting the server. Usually used in production.

<pre><code>$ hexo server -s</code></pre>

###Drafts

In draft mode, drafts will be served as normal posts. You can preview your drafts on the server. All changes you made on drafts will be updated at once.

<pre><code>$ hexo server -d</code></pre>

##deployment
To deploy your site with Hexo, you only need one command.

<pre><code>$ hexo deploy</code></pre>

---

###markdown书写注意事项

1. 现在的主题设置，每一段文字都需要前后有空格，才能自动形成段落，不然变成行内 span（左侧没有间距）；
2. 编码放在 pre code 中，才会自动有高亮，为了避免代码高亮第一行为空，需要把第一行代码直接跟在code后面；[hexo官方文档介绍的codeblock高亮方式](http://zespia.tw/hexo/docs/tag-plugins.html#code-block) 样式没处理好；
3. table的宽度需要手动设定；

