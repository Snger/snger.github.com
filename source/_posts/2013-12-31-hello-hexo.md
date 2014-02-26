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

Hexo has 3 default layouts: post, page and draft.

<table><tr><td>Layout</td><td>Destination</td></tr>
<tr><td>post (Default)</td><td>	source/_posts</td></tr>
<tr><td>page</td><td>	source</td></tr>
<tr><td>draft	</td><td>source/_drafts</td></tr></table>

###Example

<pre><code>
$ hexo new "New Post"
# => The file will be created at source/_posts/new-post.md

$ hexo new page "New Page"
# => The file will be created at source/new-page/index.html

$ hexo new draft "New Draft"
# => The file will be created at source/_drafts/new-draft.md
</code></pre>

##Code Highlighting

There're 2 ways for you to highlight your code snippets in your posts: Backtick code block and Swig code block. Both are ported from Octopress.

###Backtick Code Block

<pre><code>``` [language] [title] [url] [link text]
code snippet
```</code></pre>
###Swig Code Block

<pre><code>{% code [title] [lang:language] [url] [link text] %}
code snippet
{% endcode %}</code></pre>

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
##Tag Plugins
Tag plugins are different from tags in posts. They're ported from Octopress and can help you insert specific contents in posts quickly.

###Block Quote

This plugin helps you insert quotes with author, source and title in posts.

Alias: quote

<pre><code>{% blockquote [author[, source]] [link] [source_link_title] %}
content
{% endblockquote %}</code></pre>

###Code Block

This plugins helps you insert code snippets in posts.

Alias: code

<pre><code>{% codeblock [title] [lang:language] [url] [link text] %}
code snippet
{% endcodeblock %}</code></pre>
###Backtick Code Block

This plugin is same as code block, but in backtick style.

<pre><code>
``` [language] [title] [url] [link text]
code snippet
```
</code></pre>
###Pull Quote

This plugin helps you insert a pull quote in posts.

<pre><code>{% pullquote [class] %}
content
{% endpullquote %}</code></pre>
###jsFiddle

This plugin helps you embed jsFiddle snippets in posts.

<pre><code>{% jsfiddle shorttag [tabs] [skin] [width] [height] %}</code></pre>
###Gist

This plugin helps you embed Gist snippets in posts.

<pre><code>{% gist gist_id [filename] %}</code></pre>
###Image

This plugin helps you insert an image in posts with specified size.

<pre><code>{% img [class names] /path/to/image [width] [height] [title text [alt text]] %}</code></pre>
###Link

This plugin helps you insert a link with target="_blank" attribute.

<pre><code>{% link text url [external] [title] %}</code></pre>
###Include Code

This plugins helps you insert code snippets in source folder.

<pre><code>{% include_code [title] [lang:language] path/to/file %}</code></pre>
###Youtube

This plugin helps you insert a Youtube video in posts.

<pre><code>{% youtube video_id %}</code></pre>
###Vimeo

This plugin helps you insert a Vimeo video in posts.

<pre><code>{% vimeo video_id %}</code></pre>
###Raw

If there're some contents can't be processed in posts, you can wrapped it with rawblock tag.

<pre><code>{% rawblock %}
content
{% endrawblock /%}</code></pre>