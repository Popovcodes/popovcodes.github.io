$(document).ready(function(){

//
if($('.top-slider-section').length>0) {
  $('.header').addClass('white');
};

//фиксированный хедер
$(window).scroll(function(){
  var pageIsScrolled = $(window).scrollTop();
  if(window.innerWidth > 991 && window.innerWidth > 1299 ) {
    if(pageIsScrolled > 0) {
      $('#header').addClass('fixed');
    } else {
      $('#header').removeClass('fixed');
    }
  } else {
    $('#header').removeClass('fixed');
  };
});

// modal form and mobile navigation call
$('.modal-call').click(function(){
  $('#overlay, #modal-cont').fadeIn();
  $('#common-wrapper, #header, #footer').addClass('blur');
  $('#btn-menu').removeClass('active').addClass('z-reduced');
});
$('#btn-menu').click(function(){
  $('#mob-cont').toggleClass('active');
  $('#overlay').fadeToggle();
  $('#common-wrapper, #header, #footer').toggleClass('blur');
  $(this).toggleClass('active');
});
$('.mob-modal-call').click(function(){
  $('#mob-cont, #btn-menu').removeClass('active');
  $('#btn-menu').addClass('z-reduced');
  $('#modal-cont').fadeIn();
});
$('#overlay, #modal-close, #mob-cont a').click(function(){
  $('#overlay, #modal-cont').fadeOut();
  $('#common-wrapper, #header, #footer').toggleClass('blur');
  $('#mob-cont, #btn-menu').removeClass('active');
  $('#btn-menu').removeClass('z-reduced');
});




/*
//slick.js slider   http://kenwheeler.github.io/slick/
$('#main-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true,
  appendDots:$('.slide-dots-wr'),
  responsive: [
    {
      breakpoint: 1299,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
$('#main-slider-prev').click(function(){
    $('#main-slider').slick('slickPrev');
});
$('#main-slider-next').click(function(){
    $('#main-slider').slick('slickNext');
});
$('#main-slider').css('opacity', '1');
*/


//slick.js slider   http://kenwheeler.github.io/slick/
if($('#top-slider').length > 0 ){
$('#top-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 4000,
  speed: 600,
  arrows: false,
  dots: false
});
};
$('#top-slider-prev').click(function(){
    $('#top-slider').slick('slickPrev');
});
$('#top-slider-next').click(function(){
    $('#top-slider').slick('slickNext');
});
$('#top-slider').css('opacity', '1');





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

//параллакс
var parallax = function(){
  if(window.innerWidth > 1199) {
    var pageScrolled = $(window).scrollTop();
    var windowHeight = $(window).height();
    var scrolledToWindowBottom = pageScrolled + windowHeight;
    $('.prlx').each(function(){
      var elPos = $(this).offset().top;
      var elVis = scrolledToWindowBottom - elPos;
      if (elVis > 0) {
        $(this).css({"transform":  "translate(0, "+ -elVis/5 +"px)"});
      };
    });
  };
};
parallax();
$(window).scroll(parallax).resize(parallax);


//услуга, разворачивание
$('.service-title').click(function(){
  $(this).parents('.service-block').find('.service-content').slideToggle();
  $(this).toggleClass('active');
});
// 1й открыт сразу
$('.service-block').eq(0).addClass('mt');
$('.service-block').eq(0).find('.service-title').addClass('active');
$('.service-block').eq(0).find('.service-content').slideDown();

//статья, четное изображение слева
var n = 1;
$('.article-content img').each(function(){
  if(n%2 == 0) {
    $(this).addClass('even');
  };
  n++;
});


//нестандартная сетка
//https://masonry.desandro.com/
//https://masonry.desandro.com/methods.html
if($('div').is('#broken-grid')) {
  $('#broken-grid').imagesLoaded(function(){
    $('#broken-grid').masonry({
      itemSelector: '.grid-i',
      columnWidth: 275,
      gutter: 20
    });
    $('#broken-grid').addClass('loaded');
  });
};

// fancybox http://fancyapps.com/fancybox/3/
if($('.fancy').length > 0) {
  $('.fancy').fancybox({
    loop: true
  });//tpl
};

//горизонтальный скрол стилизация
// nicescroll  https://github.com/inuyaksa/jquery.nicescroll
if($('.table-wr').length > 0) {
  var scrollStyle = function(){
    $(".table-wr").niceScroll({
      cursorcolor: "#E4EAF1",
      cursorwidth: "10px",
      zindex: 3,
      autohidemode: false,
      background: "#F3F6FA",
      horizrailenabled: true,
      cursoropacitymin: 1,
      cursorborder: 0,
      emulatetouch: true,
      preventmultitouchscrolling: false,
      cursordragontouch: true
    });
  };
  scrollStyle();
};
$('.table-wr').css('opacity', '1');

// табы (адреса) https://github.com/jellekralt/Responsive-Tabs
if($('#tabs-container').length>0){
  $('#tabs-container').responsiveTabs({
    startCollapsed: 'tabs',
    rotate: false
  });
};


//decoration of current page link in navigation //tpl
var getCurrentLink = function(){
  $('nav a').each(function(){
    var location = window.location.href;
    var link = this.href;
    if(location == link) {
      $(this).addClass('active');
    };
  });
};
getCurrentLink();

// страница 404 - высота
if($('.section-404').length > 0){
  var height404 = function(){
    var windowH = window.innerHeight;
    var headerH = $('.header').outerHeight();
    var footerH = $('.footer').outerHeight();
    $('.section-404>.wrapper').css('min-height', windowH - headerH - footerH +'px');
  };
  height404();
  $(window).resize(height404);
};


});
