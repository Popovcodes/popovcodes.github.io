$(document).ready(function(){

// $('#gr-close').click(function(){
//   $('#gr-wrap, #overlay').fadeOut(400);
// });

$('#notice-close').click(function(){
  $('#cookies-notice').slideUp();
});

//compensate height of fixed footer
var footerCompensate = function(){
  var footerHeight = $('#footer').outerHeight();
  $('body').css('padding-bottom', footerHeight + 'px');
};
footerCompensate();
$(window).resize(footerCompensate);

// mobile navigation
$('#btn-menu').click(function(){
  $('#overlay').fadeIn();
  $('#mob-cont').addClass('active');
});

$('#mob-nav a, #overlay, #mob-close').click(function(){
  $('#overlay').fadeOut();
  $('#mob-cont').removeClass('active');
});

//overlay click events
$('#overlay').click(function(){
  $('#free-tooltip, #modal-cont, #modal-appoint-cont').fadeOut(0);
  $(this).fadeOut(0);
});

//decoration of current page link in navigation
$('nav a').each(function(){
  var location = window.location.href;
  var link = this.href
  if(location == link) {
    $(this).addClass('active');
  }
});

//modal form
$('.modal-call, #celebrate-block, .vac-btn').click(function(){
  $('#overlay').removeClass('transparent');
  $('#modal-cont, #overlay').fadeIn();
});
$('.appoint-btn').click(function(){
  $('#overlay').removeClass('transparent');
  $('#modal-appoint-cont, #overlay').fadeIn();
});
$('#modal-close, #modal-appoint-close').click(function(){
    $('#modal-cont, #modal-appoint-cont, #overlay').fadeOut();
});

// cyrilic symbols validation
$('input[type="text"], textarea').on('keyup', function() {
    this.value = this.value.replace(/[^а-яА-ЯёЁ0-9 -]/ig,'');
});

// masked phone input https://github.com/digitalBush/jquery.maskedinput
$('input[type="tel"]').mask("+7(999)999-99-99");

var flies = function(){
  if(document.body.clientWidth > 1199 ) {

    var pageIsScrolled = $(window).scrollTop();
    var windowHeight = $(window).height();
    var scrolledToWindowBottom = pageIsScrolled + windowHeight;
    // flying objects
    $('.f-1').each(function(){
      var thisPosition = $(this).offset().top;
      var thisVisible = scrolledToWindowBottom - thisPosition;
      if(thisVisible > 0 && thisVisible < windowHeight) {
        $(this).find('img').css({"left": thisVisible/2.5});
      };
    });

    $('.f-2').each(function(){
      var thisPosition = $(this).offset().top;
      var thisVisible = scrolledToWindowBottom - thisPosition;
      if(thisVisible > 0 && thisVisible < windowHeight) {
        $(this).find('img').css({"left": thisVisible/1.5});
      };
    });

    $('.f-3').each(function(){
      var thisPosition = $(this).offset().top;
      var thisVisible = scrolledToWindowBottom - thisPosition;
      if(thisVisible > 0 && thisVisible < windowHeight) {
        $(this).find('img').css({"left": thisVisible/-1});
      };
    });

    $('.f-4').each(function(){
      var thisPosition = $(this).offset().top;
      var thisVisible = scrolledToWindowBottom - thisPosition;
      if(thisVisible > 0 && thisVisible < windowHeight) {
        $(this).find('img').css({"left": thisVisible/-2});
      };
    });

    $('.f-5').each(function(){
      var thisPosition = $(this).offset().top;
      var thisVisible = scrolledToWindowBottom - thisPosition;
      if(thisVisible > 0 && thisVisible < windowHeight) {
        $(this).find('img').css({"left": thisVisible/3});
      };
    });

    $('.f-6').each(function(){
      var thisPosition = $(this).offset().top;
      var thisVisible = scrolledToWindowBottom - thisPosition;
      if(thisVisible > 0 && thisVisible < windowHeight) {
        $(this).find('img').css({"left": thisVisible/-3});
      };
    });

    $('.f-7').each(function(){
      var thisPosition = $(this).offset().top;
      var thisVisible = scrolledToWindowBottom - thisPosition;
      if(thisVisible > 0 && thisVisible < windowHeight) {
        $(this).find('img').css({"left": thisVisible/4});
      };
    });

    $('.f-8').each(function(){
      var thisPosition = $(this).offset().top;
      var thisVisible = scrolledToWindowBottom - thisPosition;
      if(thisVisible > 0 && thisVisible < windowHeight) {
        $(this).find('img').css({"left": thisVisible/1.8});
      };
    });

    $('.f-9').each(function(){
      var thisPosition = $(this).offset().top;
      var thisVisible = scrolledToWindowBottom - thisPosition;
      if(thisVisible > 0 && thisVisible < windowHeight) {
        $(this).find('img').css({"left": thisVisible/1.5});
      };
    });

    $('.f-10').each(function(){
      var thisPosition = $(this).offset().top;
      var thisVisible = scrolledToWindowBottom - thisPosition;
      if(thisVisible > 0 && thisVisible < windowHeight) {
        $(this).find('img').css({"left": thisVisible/1.5});
      };
    });

    if($('div').is('#red-line')) {
      var redLineVisible = scrolledToWindowBottom - $('#red-line').offset().top;
      if (redLineVisible > 0 ) {
        $('#red-line').css({"transform": "rotate(-7deg) translate(0%, "+ -redLineVisible/1.8+"px)"});
      };
    };
    
    if($('div').is('#blue-line')) {
      var blueLineVisible = scrolledToWindowBottom - $('#blue-line').offset().top;
      if (blueLineVisible > 0 ) {
        $('#blue-line').css({"transform": "rotate(8deg) translate(0%, "+ -blueLineVisible/4+"px)"});
      };
    };

    if($('div').is('#scarlet-line')) {
      var scarletLineVisible = scrolledToWindowBottom - $('#scarlet-line').offset().top;
      if (scarletLineVisible > 0 ) {
        $('#scarlet-line').css({"transform": "rotate(10deg) translate(0%, "+ -scarletLineVisible/3+"px)"});
      };
    };

    if($('div').is('#green-line')) {
      var greenLineVisible = scrolledToWindowBottom - $('#green-line').offset().top;
      if (greenLineVisible > 0 ) {
        $('#green-line').css({"transform": "rotate(22deg) translate(0%, "+ -greenLineVisible/6+"px)"});
      };
    };
    
  };
};
flies();
$(window).scroll(flies).resize(flies);

});
