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
