---
layout: post
title: "Test My jQuery Skill: Solutions"
date: 2012-03-04 10:24
comments: true
categories: [Web前端, 读书笔记]
---
See it in my other blog : [Test My jQuery Skills: Solutions | The same summer.](http://thesamesummer.blogspot.com/2012/02/test-my-jquery-skills-solutions.html)  
You can text it now : [Tuts+ Premium Course: 30 Days to Learn jQuery - Quiz #1: The Basics](http://tutsplus.com/lesson/jquery-30-days-quiz-1/)  
---
###1.In addition to jQuery(), we can also use a shorter reference to the jQuery function. What is it?

`jQ  $  $$  j`  
####Additional Notes  
If you review the jQuery source (something you should always do), you will find that jQuery and $ can both be used interchangably. The former is most often used in situations when the $ can clash with existing code or libraries.

###2.True or False: the jQuery function accepts a CSS selector, which is used to query the DOM for the applicable elements.

 `True False`  
####Additional Notes  
Remember, you are not limited to mere CSS selectors; you can also pass DOM nodes, and even create elements. For instance, the following code will create a div and append it to the body: $("
Hi there
").appendTo("body");  

###3.Query the DOM for the div with an id of container and store a reference to it ("cache it") in a variable, called container.

`var container = $("#container"); `
####Additional Notes
Storing the results of a particular query in a variable is often referred to as "caching." This way, we keep from having to dive into the DOM pool over and over to retrieve the same set of elements.

###4.Query the DOM for the ul, and add a class of alternate.

`$("ul").addClass("alternate"); `
####Additional Notes
Technically, this code will add a class of alternate to all unordered lists in the DOM. If you need to be more specific, you can use an id, or a method like eq() or first() to fine-tune the results.

###5.Which of the following is not a valid jQuery method?

`addClass  next  prev  grandparents`
####Additional Notes
Don't take the "parent-child" relationship idea too far. grandparents or grandchildren do not exist! Instead, you'd use parents(), closest(), and find().<!-- more -->

###6.True or False: We use $(document).ready(fn); to ensure that the DOM has fully loaded before proceeding.

 `True False`
####Additional Notes
Alternatively, the same result can be achieved by passing an anonymous function to jQuery.

###7.Use jQuery's text method to update the element. Change it to "Updated."

`$("h1").text("Updated"); `
####Additional Notes
Should you need to insert actual HTML, you'd instead use the html method.

###8.Which method will return the nearest element, moving up the DOM chain, that matches the provided selector?

`ancestors()  closest()  nearest()  children()`
####Additional Notes
closest will retrieve the first element that matches a provided selector. It begins at the current element, and works up through the DOM tree.

###9.The box (or div) below has a class of box. Listen for when this box is clicked. When it is, remove the box class. Hint: you will want to use jQuery'son() method.

		$("div.box").on("click", function() { 
   			$(this).removeClass("box");
		});

####Additional Notes
In addition to on(), jQuery also provides a handful of "shortcut" methods, such as click() and hover().

###10.Imagine that you've selected one list item, and now need to select all other list items on that same level. Which method should use to accomplish this?


####Additional Notes
Additionally, a selector can be passed to the siblings method. This allows you to filter the matches.

###11.Select the fourth list item below, and use the css method to set its background color to 'gray'.

`$('li:nth-child(4)').css('background', 'gray'); `
####Additional Notes
There were lots of ways to handle this question. In addition to the provided solution, you could also use the eq()method: $("li").eq(3).css("backgroundColor", "gray");. jQuery also allows you to use eq as a custom selectors: $("li:eq(3)");.

###12.True or False: jQuery is just JavaScript.

 `True False`
####Additional Notes
Sometimes, it's easy to think of JavaScript and jQuery as entirely separate languages, but they aren't! At its core, jQuery is just JavaScript.
