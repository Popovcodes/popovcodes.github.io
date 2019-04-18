$(document).ready(function(){

// модальные окна и меню

$('#btn-menu').click(function(){
  $('#fullscreen-menu').addClass('active');
});
$('#full-close, #fullscreen-menu a').click(function(){
  $('#fullscreen-menu').removeClass('active');
});

$('.recall-call').click(function(){
  $('#overlay, #call-modal-cont').fadeIn();
});
$('.master-call').click(function(){
  $('#overlay, #master-modal-cont').fadeIn();
});

$('#overlay, .modal-close').click(function(){
  $('#overlay, .modal-cont').fadeOut();
});

//окно вакансии
$('.vac-i').click(function(){
  $('.vac-wr, #overlay').fadeIn();
});
$('.vac-close, #overlay').click(function(){
  $('.vac-wr, #overlay').fadeOut();
});

//подбор цвета
if($('.colorpicker').length>0) {
function setTop(color){
  $('.fillTop').css('fill', color);
};
$('#colorpicker-top').farbtastic(setTop);
function setBottom(color){
  $('.fillBottom').css('fill', color);
};
$('#colorpicker-bottom').farbtastic(setBottom);
};

//слайдеры
//slick.js slider   http://kenwheeler.github.io/slick/
if($('.slider').length>0) {
$('#top-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  arrows: false,
  dots: true,
  appendDots:$('#top-slider-dots')
});
$('#top-slider').css('opacity', '1');

//слайдер каталога
$('#catalog-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1910,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

$('#catalog-slider').css('opacity', '1');
$('#cat-slider-prev').click(function(){
  $('#catalog-slider').slick('slickPrev');
});
$('#cat-slider-next').click(function(){
  $('#catalog-slider').slick('slickNext');
});


//
$('#single-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true,
  appendDots:$('#dots')
});

$('#single-slider-prev').click(function(){
  $('#single-slider').slick('slickPrev');
});
$('#single-slider-next').click(function(){
  $('#single-slider').slick('slickNext');
});
$('#single-slider').css('opacity', '1');

//
$('#adv-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

$('#adv-slider-prev').click(function(){
  $('#adv-slider').slick('slickPrev');
});
$('#adv-slider-next').click(function(){
  $('#adv-slider').slick('slickNext');
});
$('#adv-slider').css('opacity', '1');


var setEqualHeight = function(){

    var maxH = 0;
    $('.slider .text-wr').each(function(){
        var thisH = $(this).outerHeight();
        if(thisH > maxH) {
            maxH = thisH;
        };
    });
    $('.slider .text-wr').css('height', maxH + 'px');//tpl

};
setEqualHeight();
$(window).resize(setEqualHeight);
};// /if($('.slider').length>0)

//метка "Хит продаж"
$('.card[data-hit="1"]').append('<div class="hit-mark">Хит продаж</div>');


// select styling  https://github.com/Dimox/jQueryFormStyler
if($('select').length>0){
  $('#calc-select').styler({
    selectSmartPositioning: false
  });
  $('.prices-selects-block select').styler({
    selectSmartPositioning: false
  });


};
// доп стили textarea
$("textarea").focusout(function(){
  if($(this).val() != ""){
    $(this).addClass("non-empty");
  }else{
    $(this).removeClass("non-empty");
  };
});

// табы https://github.com/jellekralt/Responsive-Tabs
if($('#tabs-container').length>0){
  $('#tabs-container').responsiveTabs({
    startCollapsed: 'tabs',
    rotate: false
  });
};
// fancybox http://fancyapps.com/fancybox/3/
if($('.fancy').length>0){
  $('.fancy').fancybox({
    loop: true
  });
};

// таблицы с ценами
$('.table-title-wr').click(function(){
  $(this).next('.price-table-wr').slideToggle();
  $(this).toggleClass('active');
  if($(this).hasClass('active')){
    $(this).find('.shown-state').text('Свернуть');
  } else {
    $(this).find('.shown-state').text('Развернуть');
  };
});

//корректировка позиции фонового изображения
if($('.full-calculator-section').length > 0 ){
  $('.top-section').addClass('calc-top-section');
};
if($('.advantages-section').length > 0 || $('.about-text-section').length > 0){
  $('.top-section').addClass('about-top-section');
};
if($('.sert-section').length > 0 || $('.sert-i').length > 0){
  $('.top-section').addClass('sert-top-section');
};
if($('.text-section').length > 0 || $('.article-section').length > 0){
  $('.top-section').addClass('article-top-section');
};
if($('.info-section').length > 0){
  $('.top-section').addClass('info-top-section');
};
if($('.vac-section').length > 0){
  $('.top-section').addClass('vac-top-section');
};
if($('.services-section').length > 0){
  $('.top-section').addClass('services-top-section');
};
if($('.full-calculator-section').length > 0){
  $('.footer').css('z-index', '1');
};
if($('.testimonials-section').length > 0){
  $('.top-section').addClass('testim-top-section');
};
if($('.gallery-section').length > 0){
  $('.top-section').addClass('gallery-top-section');
};
if($('.products-section').length > 0){
  $('.top-section').addClass('products-top-section');
};
if($('.lights-catalog-section').length > 0){
  $('.top-section').addClass('lights-catalog-top-section');
};


// https://github.com/digitalBush/jquery.maskedinput
$('input[type="tel"]').mask("+7 (999) 999-99-99");

//параллакс
var parallax = function(){
  if(window.innerWidth > 1199) {
    var pageScrolled = $(window).scrollTop();
    var windowHeight = $(window).height();
    var scrolledToWindowBottom = pageScrolled + windowHeight;
    $('.prlx1').each(function(){
      var elPos = $(this).offset().top;
      var elVis = scrolledToWindowBottom - elPos;
      if (elVis > 0) {
        $(this).css({"transform":  "translate(0, "+ -elVis/5 +"px)"});
      };
    });
    $('.prlx2').each(function(){
      var elPos = $(this).offset().top;
      var elVis = scrolledToWindowBottom - elPos;
      if (elVis > 0) {
        $(this).css({"transform":  "translate(0, "+ -elVis/12 +"px)"});
      };
    });
    $('.prlx3').each(function(){
      var elPos = $(this).offset().top;
      var elVis = scrolledToWindowBottom - elPos;
      if (elVis > 0) {
        $(this).css({"transform":  "translate(0, "+ -elVis/30 +"px)"});
      };
    });

  };

};// /var = parallax
parallax();
$(window).scroll(parallax).resize(parallax);


//выделение текущей ссылки
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


//Горизонтальный скрол меню

// $('#horizontal-scroll').on('mousewheel', function(e){
//   e.preventDefault();
//   $('#horizontal-scroll').scrollLeft(0.3 * e.deltaY);
// });
if($('.services-nav-section').length > 0) {
document.getElementById("horizontal-scroll")
  .addEventListener('wheel', function(e) {
      if (e.deltaMode == e.DOM_DELTA_PIXEL) {
      var modifier = 0.3;
    } else if (e.deltaMode == e.DOM_DELTA_LINE) {
      var modifier = parseInt(getComputedStyle(this).lineHeight);
    } else if (e.deltaMode == e.DOM_DELTA_PAGE) {
      var modifier = this.clientHeight;
    };
    if (e.deltaY != 0) {
      this.scrollLeft += modifier * e.deltaY;
      e.preventDefault();
    };
});
};
//горизонтальный скрол стилизация
// nicescroll  https://github.com/inuyaksa/jquery.nicescroll
if($('#horizontal-scroll').length > 0) {
  var scrollStyle = function(){
    if(window.innerWidth > 767) {
      $("#horizontal-scroll").niceScroll({
        cursorcolor: "#ee0e09",
        cursorwidth: "6px",
        zindex: 3,
        autohidemode: false,
        background: "#ddd",
        horizrailenabled: true,
        cursoropacitymin: 1,
        cursorborder: 0,
        emulatetouch: true,
        preventmultitouchscrolling: false,
        cursordragontouch: true
      });
    };
  };
  scrollStyle();
};
$('.services-nav-section').css('opacity', '1');

if($('.services-nav-section').length > 0) {
var showScrollIcon = function(){
  setTimeout(function(){
    if((window.innerWidth > 1024) && $('#ascrail2000-hr').css('display') == 'block') {
      $('#horizontal-scroll').hover(function(){
        $('#scroll-wr').addClass('shown');
      });
      $('#horizontal-scroll').mouseleave(function(){
        $('#scroll-wr').removeClass('shown');
      });
    } else {
      $('#scroll-wr').removeClass('shown');
      $('#horizontal-scroll').unbind();
    };
  },1000);
};
  showScrollIcon();
  $(window).resize(showScrollIcon);
};

// catalog pagination https://github.com/luis-almeida/jPages
if($('#pagination').length > 0){
  $("#pagination").jPages({
    containerID : "paginationPage",
    perPage: 9,
  });
  $("#pagination").jPages({
    containerID : "paginationPage-6perPage",
    perPage: 6,
  });
};

//IE fixes //tpl
if (document.documentMode) {
    $('.calc-data > span').css('max-width', '180px');
};


//
$('.top-img').css('opacity', '1');


});
