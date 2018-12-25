// preloader
$(window).on('load', function(){
  $('#preloader').delay(300).fadeOut(700);
});

$(document).ready(function(){
// modal form and mobile navigation call
$('.modal-call').click(function(){
  $('#overlay').fadeIn();
  $('#modal-cont').addClass('active');
  $('#btn-menu').addClass('reduced').removeClass('active');
});
$('#btn-menu').click(function(){
  $('#mob-cont').toggleClass('active');
  $('#overlay').fadeToggle();
  $(this).toggleClass('active');
});
$('.mob-modal-call').click(function(){
  $('#mob-cont, #btn-menu').removeClass('active');
  $('#btn-menu').addClass('reduced');
  $('#modal-cont').addClass('active');
});
$('#overlay, #modal-close, #mob-cont a').click(function(){
  $('#overlay').fadeOut();
  $('#modal-cont').removeClass('active');
  $('#mob-cont, #btn-menu').removeClass('active');
  $('#btn-menu').removeClass('reduced');
});
/*
// сообщение "Спасибо за заявку"
$('.modal-form').submit(function(){
  $('#overlay').fadeIn();
  $('#thank-message').addClass('active');
});
$('.thank-close').click(function(){
  $('#overlay').fadeOut();
  $('#thank-message').removeClass('active');
});
*/

//slick.js slider   http://kenwheeler.github.io/slick/
$('#main-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots: false
});
$('#main-slider').css('opacity', '1');

// табы https://github.com/jellekralt/Responsive-Tabs
$('#tabs-container').responsiveTabs({
  startCollapsed: 'tabs',
  rotate: false,
});

// animated counter https://github.com/bfintal/Counter-Up
$('.js-counter').counterUp({
  time: 1400
});


// flashing dots decor
if($('.dots').length>0) {
  var dot = '<i class="dot"></i>';
  for (var i = 0; i < 48; i++) {
    $('.dots-1, .dots-3').append(dot);
  };
  for (var i = 0; i < 44; i++) {
    $('.dots-2').append(dot);
  };
  for (var i = 0; i < 24; i++) {
    $('.dots-4').append(dot);
  };

  $('.dots-1 .dot, .dots-2 .dot, .dots-3 .dot').each(function(){
    var ind = $(this).index();
    $(this).css({
      '-webkit-animation-delay': -48+ind/2+'s',
      'animation-delay': -48+ind/2+'s'
    });
  });
  $('.dots-4 .dot').each(function(){
    var ind = $(this).index();
    var indSixth = ind%6;
    $(this).css({
      '-webkit-animation-delay': -24+indSixth+'s',
      'animation-delay': -24+indSixth+'s'
    });
  });
};

// shadowed decor of numbers
$('.pos-quant').each(function(){
  $(this).clone().appendTo(this).addClass('shadowed');
});
$('.enlarge').each(function(){
  $(this).clone().appendTo(this).addClass('shadowed');
});

//decoration of current page link in navigation
var getCurrentLink = function(){
  $('nav a').each(function(){
    var location = window.location.href;
    var link = this.href
    if(location == link) {
      $(this).addClass('active');
    }
  });
};
getCurrentLink();

// input animation on focus
if($('.input-wr').length > 0) {
  $(".input-wr input, .modal-cont input, textarea").focusout(function(){
    if($(this).val() != ""){
      $(this).addClass("non-empty");
    }else{
      $(this).removeClass("non-empty");
    };
  });
  $('input[type="tel"]').focusout(function(){
    if($(this).val().indexOf('_') != -1) {
      $(this).removeClass("non-empty");
    };
  });
};

// https://github.com/digitalBush/jquery.maskedinput
$('input[type="tel"]').mask("+7 (999) 999-99-99");

// fancybox http://fancyapps.com/fancybox/3/
$('.fancy').fancybox();


//
if($('.area-404').length > 0) {
  var footerCompensate = function(){
    var footerH = $('.footer').outerHeight();
    $('body').css('padding-bottom', footerH+'px');
  };
  footerCompensate();
  $(window).resize(footerCompensate);
};

//catalog grid
/*
if(window.innerWidth > 1299) {
  $('.grid').masonry({
    itemSelector: '.card',
    columnWidth: 370,
    gutter: 30
  });
} else {
  $('.grid').masonry({
    itemSelector: '.card',
    columnWidth: 350,
    gutter: 20
  });
};
*/
if($('div').is('#grid')) {
  $('#grid').imagesLoaded(function(){
    if(window.innerWidth > 1299) {
      $('#grid').masonry({
        itemSelector: '.card',
        columnWidth: 370,
        gutter: 30
      });
      $('#grid').addClass('loaded');
    } else {
      $('#grid').masonry({
        itemSelector: '.card',
        columnWidth: 350,
        gutter: 20
      });
      $('#grid').addClass('loaded');
    };
  });
};




});
