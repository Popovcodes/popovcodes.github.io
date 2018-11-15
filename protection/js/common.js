$(document).ready(function(){

//анимация, тень заголовков
var windowWidth = function(){
  if(window.innerWidth > 1023) {
    $('#top-content, #back-text, #social-cont, #top-img-cont, #header-outer, #scroll-cont').addClass('visible');
    $('.to-shadow').each(function(){
      var thisParent = $(this).parents('.shadow-cont');
      $(this).clone().appendTo(thisParent).addClass('shadow');
    });
  };
};
windowWidth();
$(window).resize(windowWidth);

var animations = function(){
  if(window.innerWidth > 1023) {

    var pageScrolled = $(window).scrollTop();
    var windowHeight = $(window).height();
    var scrolledToWindowBottom = pageScrolled + windowHeight;

    var featPosition = $('#delivery-features').offset().top;
    var featVisible = scrolledToWindowBottom - featPosition;

    if (featVisible > 100) {
      $('.feature').addClass('visible');
    };

    var questPosition = $('#question-section').offset().top;
    var questVisible = scrolledToWindowBottom - questPosition;
    if (questVisible > 200) {
      $('.part-1, .part-2, .part-3').addClass('visible');
    };

    $('.to-shadow').each(function(){
      var thisPosition = $(this).offset().top;
      var thisVisible = scrolledToWindowBottom - thisPosition;
      if (thisVisible > 100) {
        $(this).addClass('visible');
      };
    });

  };
};
animations();
$(window).scroll(animations);

//фиксированный хедер
$(window).scroll(function(){
  var pageIsScrolled = $(window).scrollTop();
  if(window.innerWidth > 991) {
    if(pageIsScrolled > 0) {
      $('#header').addClass('fixed');
    } else {
      $('#header').removeClass('fixed');
    }
  } else {
    $('#header').removeClass('fixed');
  };
});

//slick.js slider   http://kenwheeler.github.io/slick/
$('#slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots: false
});
$('#slider-prev').click(function(){
  $('#slider').slick('slickPrev');
});
  
$('#slider-next').click(function(){
  $('#slider').slick('slickNext');
});


var slidesCount = $("#slider").slick("getSlick").slideCount;
$('#total-slide').text(slidesCount);

$("#slider").on("afterChange", function(event, slick, currentSlide){
  $('#current-slide').text(currentSlide + 1);
});

// select styling  https://github.com/Dimox/jQueryFormStyler
$('select').styler();


// ползунок цены
var input = $('#input-range');
var startMax = input.attr('max');
var startVal = input.val();
var startPercent = startVal/startMax*100 + '%';
$('#value').text(startVal);
$('#float').css('left', startPercent);
input.bind('input', function(){
    getRangeValue(input);
  })
.bind('change', function(){
    getRangeValue(input); /* for IE */
});
function getRangeValue(e){
  var value = $(e).val();
  $('#value').text(value);
  $('#range').attr('data-value', value);
  input.attr('value', value);
  var maxVal = $('#input-range').attr('max');
  var percent = value/maxVal*100 + '%';
  $('#float').css('left', percent);
}

//parallax
var parallax = function(){
  var pageScrolled = $(window).scrollTop();
  var windowHeight = $(window).height();
  var scrolledToWindowBottom = pageScrolled + windowHeight;
  var SectionPosition = $('.question-section').offset().top;
  var SectionVisible = scrolledToWindowBottom - SectionPosition;
  if (SectionVisible > 0) {
    $('.bg-img').css({"transform":  "translate(0, "+ SectionVisible/1.5 +"px)"});
  };
};
$(window).scroll(parallax);

//скролл страницы
$('nav a').click(function(){
  var el = $(this).attr('href');
  var dest = $(el).offset().top;
  $('html, body').animate({'scrollTop': dest}, 1000);
  return false;
});

$(window).scroll(function(){
  $('section[id]').each(function(){
    var id = $(this).attr('id');
    if($(this).offset().top - 200 < $(window).scrollTop()){
      $('nav a').removeClass('active');
      $('a[href="#'+id+'"]').addClass('active');
    }
  });
  lastSection();
});
var lastSection = function(){
  var pageScrolled = $(window).scrollTop();
  var windowHeight = $(window).height();
  var scrolledToWindowBottom = pageScrolled + windowHeight;
  var pageHeight = $('body').height();
  if (pageHeight - scrolledToWindowBottom < 300) {
    $('nav a').removeClass('active');
    $('nav li:last-child a').addClass('active');
  };
}

// анимация "показать в каталоге"
$('.show-product').click(function(){
  var target = $(this).attr('href');
  var targetPos = $(target).offset().top - 80;
  $('html, body').animate({'scrollTop': targetPos}, 1000);
  return false;
});

// позиция соц. иконок в хедере
var socIconsPosition = function(){
  if(window.innerWidth < 1024) {
    $('#header-social').appendTo('#header-wrapper').addClass('replaced');
  } else {
    $('#header-social').appendTo('#social-cont').removeClass('replaced');
  }
};
socIconsPosition();
$(window).resize(socIconsPosition);

// попап форма
$('.modal-call').click(function(){
  $('#modal-cont, #overlay').fadeIn();
  $('#mob-cont').removeClass('active');
});
$('#overlay, #modal-close').click(function(){
  $('#modal-cont, #overlay').fadeOut();
});

// модальное окно при клике "в корзину"
$('.buy-btn').click(function(){
  $('#buy-modal-cont, #overlay').fadeIn();
});
$('#overlay, #buy-modal-close, .cancel').click(function(){
  $('#buy-modal-cont, #overlay').fadeOut();
});

// моб меню
$('#mob-cont a, #overlay, #mob-close').click(function(){
  $('#overlay').fadeOut();
  $('#mob-cont').removeClass('active');
});

$('.btn-menu').click(function(){
  $('#overlay').fadeIn();
  $('#mob-cont').addClass('active');
});

// маска телефона https://github.com/digitalBush/jquery.maskedinput
$('input[type="tel"]').mask("+7 (999) 999-99-99");

});
