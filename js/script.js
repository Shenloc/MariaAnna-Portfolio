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

  var navOpen = document.getElementById('open');
  var navClose = document.getElementById('close');

  /*navOpen.onclick = navToggle;

  function navToggle() {
    document.getElementById('mobile-nav').setAttribute("style", "tranform:translateY(0)")
  }*/

  $('#open').on('click', function(){
    $('#mobile-nav').css({
      "transition": ".5s ease",
      "transform": "translateY(0)"
    });
  });
  $('a').on('click', function(){
    $('#mobile-nav').css({
      "transition": ".5s ease",
      "transform": "translateY(-100%)"
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



}
