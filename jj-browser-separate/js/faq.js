$(document).ready(function(){

var isSafari;
var ua = detect.parse(navigator.userAgent);
var browserFamily = ua.browser.family;
if (browserFamily == 'Safari' ) {
  isSafari = 1;
} else {
  isSafari = 0;
};

//accordion
$('.faq-accord-title').click(function(){
  var parentLi = $(this).parents('li');
  if($(this).hasClass('open')) {
    parentLi.find('.answer-cont').slideUp();
    $(this).removeClass('open');
  } else {
    $('.answer-cont').slideUp();
    parentLi.find('.answer-cont').slideDown();
    $('.faq-accord-title').removeClass('open');
    $(this).addClass('open');
  };
});

// flying objects
var parallax = function(){
  if(document.body.clientWidth > 1199 ) {
    var pageIsScrolled = $(window).scrollTop();
    var windowHeight = $(window).height();
    var scrolledToWindowBottom = pageIsScrolled + windowHeight;
    $('.figure').each(function(){
      var thisPosition = $(this).offset().top;
      var coefX = $(this).attr('data-coefX');
      var coefY = $(this).attr('data-coefY');
      var thisVisible = scrolledToWindowBottom - thisPosition;
      if(thisVisible > 0) {
        if(isSafari == 1) {
            $(this).find('img').css({"left": thisVisible/coefX, "bottom": thisVisible/coefY});
            $('.figure img').css('transition', 'none !important');
          } else {
            var rotate = 360/thisVisible*80/coefX;
            $(this).find('img').css({"left": thisVisible/coefX, "bottom": thisVisible/coefY, "transform": "rotate("+ rotate*2.5 +"deg)"});
          };
      };
    });
  };
};

parallax();
$(window).scroll(parallax).resize(parallax);

});