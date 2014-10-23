$(document).ready(function (){
  $(".video-wrapper").hover(function() {
    $(this).children('video')[0].play();
  }, function() {
    var el = $(this).children('video')[0];
    el.pause();
    el.currentTime = 0;
  });

// smooth scroll
  $(function(){
    $('nav a').smoothScroll({
      offset : -48
    });
  });

  $(window).on('scroll',function() {
    var fixedNavSpot = $('.skill-set');
    if(fixedNavSpot.length) {
      fixedNavSpot = fixedNavSpot.position().top;
    }
    var scrollPoint = $(window).scrollTop();
    if(scrollPoint > fixedNavSpot) {
      $('.nav-wrapper').css({
                            'position' : 'fixed',
                            'background' : 'rgba(255, 255, 255, 0.75)'
                            });
    }
    else {
      $('.nav-wrapper').css({'position' : 'relative'});
    }
  });
});