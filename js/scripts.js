$(document).ready(function (){
  $(".video-wrapper").hover(function() {
    $(this).children('video')[0].play();
  }, function() {
    var el = $(this).children('video')[0];
    el.pause();
    el.currentTime = 0;
  });

// Chris Croyier's smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


  $(window).on('scroll',function() {
    var fixedNavSpot = $('.skill-set');
    if(fixedNavSpot.length) {
      fixedNavSpot = fixedNavSpot.position().top;
    }
    var scrollPoint = $(window).scrollTop();
    if(scrollPoint > fixedNavSpot) {
      $('.nav-wrapper').addClass('fixed');
    }
    else {
      $('.nav-wrapper').removeClass('fixed');
    }
  });

$("nav ul a").click(function() {
  $("nav ul a").removeClass("active");
  $(this).addClass('active');
});







});  // closing document.ready