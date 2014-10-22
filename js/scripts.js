$(document).ready(function (){
  $(".video-wrapper").hover(function() {
    $(this).children('video')[0].play();
  }, function() {
    var el = $(this).children('video')[0];
    el.pause();
    el.currentTime = 0;
  });
});

// smooth scroll
$(function(){
  $('nav a').smoothScroll({
    offset : -48
  });
});
