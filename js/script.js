window.onload = init
function init(){

  //fixed navbar
  window.onscroll = function() {scroll()};

  function scroll() {
    if (document.body.scrollTop > 665) {
      document.getElementById('nav').classList.add('nav-fixed', 'animated', 'fadeInDown');
    } else {
      document.getElementById('nav').classList.remove('nav-fixed', 'animated', 'fadeInDown');
    }
  }

  // Mobile nav toggle
  $('#open').on('click', function(){
    $('#mobile-nav').css({
      "transition": ".5s ease",
      "transform": "translateY(0)"
    });
  });
  $('a').on('click', function(){
    $('#mobile-nav').css({
      "transition": ".5s ease",
      "transform": "translateY(-200%)"
    });
  });

  //video player
  var video = document.getElementById('play-video');
  var cover = document.getElementById('video-thumb');
  video.onclick = play;

  function play (){
    video.onclick = cover.style.display = "none";
    document.getElementById('video-player').style.display = "block";
    document.getElementById('video-source').setAttribute('src', 'https://player.vimeo.com/video/114953855?rel=0&autoplay=1')
  }

  // social icon hover efect
  $(".fa").mouseenter(function(){
    $(this).parents('.border').css({
      "border": "1px solid #d07c7c",
      "transition": ".5s ease"
    });
  });

  $(".fa").mouseleave(function(){
    $(this).parents('.border').css({
      "border": "1px solid transparent",
      "transition": ".5s ease"
    });
  });

  // smooth scroll
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  //slider
  jQuery(document).ready(function($){
  	var w,mHeight,tests=$("#testimonials");
  	w=tests.outerWidth();
  	mHeight=0;
  	tests.find(".testimonial").each(function(index){
  		$("#t_pagers").find(".pager:eq(0)").addClass("active");
  		if(index==0)
  			$(this).addClass("active");
  		if($(this).height()>mHeight)
  			mHeight=$(this).height();
  		var l=index*w;
  		$(this).css("left",l);
  		tests.find("#test_container").height(mHeight);
  	});

    $(".pager").on("click",function(e){
      e.preventDefault();
      next=$(this).index(".pager");
      clearInterval(t_int);
      moveIt(next);
    });

    var t_int=setInterval(function(){
      var i=$(".testimonial.active").index(".testimonial");
      if(i==$(".testimonial").length-1)
      next=0;
      else
      next=i+1;
      moveIt(next);
    },3000);
  });

  function moveIt(next){
    var c=parseInt($(".testimonial.active").removeClass("active").css("left"));
    var n=parseInt($(".testimonial").eq(next).addClass("active").css("left"));
    var view = document.getElementById("testimonials").offsetWidth;
    $(".testimonial").each(function(){
      if(n>c)
      $(this).animate({'left':'-='+view+'px'});
      else
      $(this).animate({'left':'+='+Math.abs(n-c)+'px'});
    });
    $(".pager.active").removeClass("active");
    $("#t_pagers").find(".pager").eq(next).addClass("active");
  }

}
