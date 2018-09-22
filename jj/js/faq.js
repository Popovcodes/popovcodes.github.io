$(document).ready(function(){

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
    $('[id ^= fig-').each(function(){
      var thisPosition = $(this).offset().top;
      var coefX = $(this).attr('data-coefX');
      var coefY = $(this).attr('data-coefY');
      var thisVisible = scrolledToWindowBottom - thisPosition;
      var rotate = 360/thisVisible*80/coefX;
      if(thisVisible > 0) {
        $(this).find('img').css({"left": thisVisible/coefX, "bottom": thisVisible/coefY, "transform": "rotate("+ rotate*2.5 +"deg)", "filter": "hue-rotate("+ rotate*3 +"deg)"})
      };
    });
  };
};

parallax();
$(window).scroll(parallax).resize(parallax);

});