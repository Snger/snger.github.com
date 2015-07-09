title: 记录上次列表所在分页数
date: 2014-02-20 13:54:29
comments: true
categories: 
tags: 
description: 
keywords: 

---
需求描述：“异步获取列表的，如果点击列表的某一行进入详情页，在详情页处理完要返回列表页的时候，能否返回之前所在的分页？ ”

现有有两个可行的方案：1.使用 url参数 来记录之前的分页数；2.使用 HTML5 sessionStorage 记录之前的分页数；

**方案1：**特点是可以特定某些链接跳回列表页时回到之前所在分页；缺点是改动文件多，改动量大，容易出错；宝贝-标题优化已使用这种方式；

**方案2：**特点是对一个 session 进行分页数存储，无论哪个页面跳到列表页都可以回到之前所在分页；优点是只改 js；缺点是得针对 IE6、IE7 做兼容（已有方案可解决）；【个人推荐】

------------------
###方案1

进度（toushou-tbv3）：  
a.已完成：素材-投放管理；  
b.前端完成：素材-海报（跳回链接需在 flash 中添加）；  
c.前端完成后发现无需（囧）：素材关联列表（所有）-》制作完成后跳到“我的关联列表”

**说明：**改动了4个页面，分别对应1、2、3、4；第3步 a 的方法可能丢失分页参数（如果在操作页不是点击链接返回列表，而是用浏览器的返回按钮、或是 Mac 系统用双指回退），在之后异步 block 回传数据，用 js 渲染列表内容可避免这个问题；以下例子是 tbv3的素材-投放管理页的修改步骤；

####步骤：

1. 列表所在的 phtml 页面，添加
<pre><code>&lt;input type="hidden" id="J_PageId" value="<?php echo $this->getRequest()->getParam('page_id','1');?>" /></code></pre>
2. 在异步加载的（block）html，给需要跳转链接记住上次所在分页的<a>上加 `class= J_LiA`；如果此链接不是使用 href 跳转而是用 onclick 控制，则分解 onclick 事件：链接放到 data-url 属性中；在第3步 a 中处理onclick 事件；
3. 列表所在的 js 页面：
	a. 对象中加入分页记录属性：
	<pre><code>pageId : DOM.val(DOM.get("#J_PageId")),</code></pre>

	b. 渲染异步列表后，用 js 给链接加分页参数，（例如在 renderItems() 方法中）
		1.如果第2步使用 href 跳转：

<pre>
<code>var liA = DOM.query('#J_MaterialItems .J_LiA');

S.later(function(){

    for(var i=0;i<liA.length;i++){

        var oldLink = DOM.attr(liA[i],'href');

        var newLink = oldLink+'&page_id='+listControl.pageId;

        DOM.attr(liA[i],'href',newLink);

    }

},100)
</code></pre>


如果第2步使用 onclick 跳转：

<pre>
<code>Event.on('.J_LiA','click',function(ev){

    if(!showPermissions('editor_material','促销素材')){return ;}

    var link = DOM.attr(ev.currentTarget,'data-url');

window.location.href=link+'&page_id='+templet.pageId;
    //window.open(link+'&page_id='+templet.pageId);

})
</code></pre>

加载列表的方法（例如：searchPutItems() ），第一行加入 
`var pageId = listControl.pageId;`
加载列表的方法，发送的请求中多加参数
` +"&page_id="+pageId `
加载列表的方法，成功后的回调（例如：submitHandle() ），渲染完分页后，再指定分页跳转；例如：

<pre>
<code>if(pageId > 1){
    listControl.paginator.setPage(pageId).setPageCount(pageCount).printHtml('#J_Paging',2);
}
</code></pre>

分页操作的方法第一行加入：
`listControl.pageId  = turnTo;`
在列表页跳出的操作页面，给需要跳回上次所在分页的链接所在的 php echo 方法中加入
`,array('page_id'=>$this->getRequest()->getParam('page_id','1'))`
例如：

  <pre><code>&lt;a href="<?php echo $this->getUrl('material/show/index',array('page_id'=>$this->getRequest()->getParam('page_id','1')))?>"></a></code></pre>



------------------------------------------方案2分割线------------------------------------------------

说明：只改动列表页所在的 js；

步骤：

分页控制方法中，把分页存入 sessionStorage：

<pre>
<code>if(window.sessionStorage){
  var ss = window.sessionStorage;
  var last_pagination = {'udp_item_index' : turnTo};

  ss.setItem("hlg_ss_tbv3",JSON.stringify(last_pagination));

}
</code></pre>

加载列表的方法中，读取 sessionStorage，并指定分页数：
a.获取分页数：

<pre>
<code>var ss = window.sessionStorage;
var hlg_ss = JSON.parse(ss['hlg_ss_tbv3']);

if(ss && ss.getItem('hlg_ss_tbv3') && hlg_ss['udp_item_index']){

  var pageId = parseInt(hlg_ss['udp_item_index']);

 }else{

  var pageId = 1;

}
</code></pre>

b.传参：`data += "&page_id="+pageId;`

c.请求成功后跳转：

<pre>
<code>if(pageId > 1){
    list.paginator.setPage(pageId).setPageCount(pageCount).printHtml('#J_Paging',2);
}
</code></pre>

