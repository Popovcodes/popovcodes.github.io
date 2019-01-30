$(document).ready(function(){

var currentText = $('#version-toggler').text();
$('#version-toggler').click(function(){
  $('html, body').toggleClass('vision');
  $(this).toggleClass('active');
  if($(this).hasClass('active')) {
    $(this).text('Включить обычную версию');
  } else {
    $(this).text(currentText);
  }
});

$('#switch-lg').click(function(){
  $('html, body').addClass('lg');
  $('#switch-md').removeClass('active');
  $(this).addClass('active');
});
$('#switch-md').click(function(){
  $('html, body').removeClass('lg');
  $('#switch-lg').removeClass('active');
  $(this).addClass('active');
});

// modal form and mobile navigation call
$('.modal-call').click(function(){
  $('#overlay, #modal-cont').fadeIn();
  $('#btn-menu').addClass('reduced').removeClass('active');
});
$('#btn-menu').click(function(){
  $('#mob-cont').toggleClass('active');
  $('#overlay').fadeToggle();
  $(this).toggleClass('active');
});
$('.mob-modal-call').click(function(){
  $('#mob-cont, #btn-menu').removeClass('active');
  $('#modal-cont').fadeIn();
});
$('#overlay, #modal-close, #mob-cont a').click(function(){
  $('#overlay, #modal-cont').fadeOut();
  $('#mob-cont, #btn-menu').removeClass('active');
  $('#btn-menu').removeClass('reduced');
});

//slick.js slider   http://kenwheeler.github.io/slick/
$('#main-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true,
  appendDots:$('.slide-dots-wr'),
});
$('#main-slider-prev').click(function(){
    $('#main-slider').slick('slickPrev');
});
$('#main-slider-next').click(function(){
    $('#main-slider').slick('slickNext');
});
$('#main-slider').css('opacity', '1');


//accordion
$('.accord-title').click(function(){
  $(this).siblings('.accordion').slideToggle();
  $(this).toggleClass('active');
});


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
$('.fancy').fancybox({
  loop: true
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

// price bit delimiter
$('.price').each(function(){
  var str = $(this).text();
  $(this).html(str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
});

// price list item numeration
$('.price-item').each(function(){
  var idx = $(this).index()+1;
  if(0 < idx && idx < 10) {
    idx = '0' + idx;
  };
  $(this).prepend('<div class="item-num">'+ idx +'</div>');
});

// если ссылка .price-link - "скачать"
$('.price-link').each(function(){
  var thisStr = $(this).text();
  if(thisStr.indexOf('качать') > -1 || thisStr.indexOf('грузить') > -1 || thisStr.indexOf('хранить') > -1) {
    $(this).addClass('download').attr('download', 'download');
  };
});

// код телефонного номера синим, запрет переноса номера
$('.tel a').each(function(){
  var thisText = $(this).html();
  var regex = /(?:8..903.|8..905.|8..499.|8..495.)/gi;
  var newThisText = thisText.replace(regex, '<span class="blue"> $& </span>');
  $(this).html(newThisText)
});

//кабинет синим
$('.contacts-item, .person-i p').each(function(){
  var thisText = $(this).html();
  var regex = /(каб.{1,5}№.\d{1,}.)/gi;
  var newThisText = thisText.replace(regex, '<span class="blue bold"> $&</span>');
  $(this).html(newThisText);
});

//на моб. перенос Фамилий на новую строку по символу ";\s"
var toNewLine = function(){
  if(window.innerWidth < 1200) {
    $('.contacts-item').each(function(){
      var thisText = $(this).html();
      var regex = /:\s/gi;
      thisText = thisText.replace(regex, ':<br>');
      $(this).html(thisText);
    });
    $('.contacts-item b').each(function(){
      var thisText = $(this).html();
      var regex = /;\s/gi;
      thisText = thisText.replace(regex, ';<br>');
      $(this).html(thisText);
    });
  } else {
    $('.contacts-item').each(function(){
      var thisText = $(this).html();
      var regex = /:<br>/gi;
      thisText = thisText.replace(regex, ': ');
      $(this).html(thisText);
    });
    $('.contacts-item b').each(function(){
      var thisText = $(this).html();
      var regex = /;<br>/gi;
      thisText = thisText.replace(regex, '; ');
      $(this).html(thisText);
    });
  };
};
toNewLine();
$(window).resize(toNewLine);


});
