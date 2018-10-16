$(document).ready(function(){

//parallax
var parallax = function(){
  if(document.body.clientWidth > 1199 ) {
    var pageIsScrolled = $(window).scrollTop();
    var windowHeight = $(window).height();
    var scrolledToWindowBottom = pageIsScrolled + windowHeight;
    $('#main-bg-img').css({"transform":  "translate(0%, "+ pageIsScrolled/2+"px)"});

    // flying objects
    $('.figure').each(function(){
      var thisPosition = $(this).offset().top;
      var coefX = $(this).attr('data-coefX');
      var coefY = $(this).attr('data-coefY');
      var thisVisible = scrolledToWindowBottom - thisPosition;
      var rotate = 360/thisVisible*80/coefX;
      if(thisVisible > 0) {
        $(this).find('img').css({"left": thisVisible/coefX, "bottom": thisVisible/coefY});
      };
    });
  };
};

parallax();
$(window).scroll(parallax).resize(parallax);

  // salary sum bit delimiter
  $('.salary-sum').each(function(){
    var str = $(this).text();
    $(this).html(str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
  });

});
