KISSY.ready(function(S) {
  KISSY.use('node',function(S,Node){
    $ = Node.all;
    console.log("We're now in Chrome's console. Yay!");
    // Green box positioning logic
     $(window).on('scroll', function() {
      var y_scroll_pos   = window.pageYOffset,
          greenBox       = $('#green-box-container').offset().top,
          greenBoxTop    = $('#stop-green-top').offset().top + 100,
          greenBoxBottom = $('#stop-green-bottom').offset().top - 220;

      if (y_scroll_pos > greenBox)
          $('#green-box-container').css({'position': 'fixed', 'top': '10px'});

      if (y_scroll_pos < greenBoxTop)
          $('#green-box-container').css({'position': 'inherit'});

      if (y_scroll_pos > greenBoxBottom)
          $('#green-box-container').css({'position': 'absolute'});
    });

    // Code along positioning logic
    $(window).on('scroll', function() {
      var y_scroll_pos       = window.pageYOffset,
          divContainer       = $('#my-div-container').offset().top,
          divContainerTop    = $('#stop-div-container-top').offset().top + 100,
          divContainerBottom = $('#stop-div-container-bottom').offset().top - 220;

      if (y_scroll_pos > divContainer)
          $('#my-div-container').css({'position': 'fixed', 'top': '10px'});

      if (y_scroll_pos < divContainerTop)
          $('#my-div-container').css({'position': 'inherit'});

      if (y_scroll_pos > divContainerBottom)
          $('#my-div-container').css({'position': 'absolute'});
    });

    
    // Skrollr logic
    $('h1, h2, h3, p, ul, code, img').each(function(v, k) {
      $(v).attr('data-bottom-top', 'opacity:0;');
      $(v).attr('data-center-top', 'opacity:1;');
    });

    skrollr.init();


    // KISSY project demo
    var playHadouken = false;

    $('#main-example').on({
      'mouseenter':function() {
          this.src = 'intro-to-kissy/images/ryu_animated.gif';
        },
      'mouseleave':function() {
          this.src = 'intro-to-kissy/images/ryu_stand_still.png';
        }
    });

    $('#main-example').on('mousedown', function() {
      this.src = 'intro-to-kissy/images/ryu_hadoken_pose.png';
    });

    $('#main-example').on('mousedown', function() {
      $('.moving-hadouken').remove();
    });
    
    $('#main-example').on('mousedown', function() {
      $('#main-example-container').append('<img class="moving-hadouken" src="intro-to-kissy/images/hadouken.gif" >');
    });
    //@todo 貌似 KISSY animate和 jquery animate 实现不同，swing曲线不同？completeFn最后一帧执行时间？
    $('#main-example').on('mousedown', function() {
      if (playHadouken)
        $('#hadouken-sound')[0].play();
      $('.moving-hadouken').animate({"margin-left": "600px"}, 1.5, 'easeOut', function() {
        $('.moving-hadouken').remove();
      });
    });

    $('#main-example').on('mouseup', function() {
      this.src = 'intro-to-kissy/images/ryu_animated.gif';
    });

    $('#main-example-add-sound').on('click', function() {
      playHadouken = !playHadouken;

      if (playHadouken)
        $(this).html('声音已添加，请按Ryu');

      if (!playHadouken)
        $(this).html('声音已移除，点击重新添加');
    });
  })
});