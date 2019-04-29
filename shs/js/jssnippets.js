$(document).ready(function(){
    console.log(hello);
});


//анимация при скролле
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



//scroll to top
$(window).on ('scroll', function(){
  if ($(this).scrollTop() > 800) {
    $('#to-top').fadeIn(2000);
  } else {
    $('#to-top').fadeOut();
  }
});
$("#to-top").click(function () {
  $("body, html").animate({
    scrollTop: 0
  }, 800);
});

// select styling  https://github.com/Dimox/jQueryFormStyler
$('select').styler();



// fancybox http://fancyapps.com/fancybox/3/
$('.fancy').fancybox();//tpl



//кол-во слайдов
var slidesCount = $("#slider").slick("getSlick").slideCount;
$('#total-slide').text(slidesCount);
$("#slider").on("afterChange", function(event, slick, currentSlide){
  $('#current-slide').text(currentSlide + 1);
});


//тень заголовков
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

// price bit delimiter
$('.price span').each(function(){
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
$('.tel').each(function(){
  var thisText = $(this).html();
  var regexNowrap = /\d.{1,3}\d{3}.{1,3}\d{2,3}.\d{2,3}.\d{2,3}/gi;
  var regexBlue = /(?:8..903.|8..905.|8..499.)/gi;
  var thisTextNowrap = thisText.replace(regexNowrap, '<span class="nowrap"> $&</span>');
  var newThisText = thisTextNowrap.replace(regexBlue, '<span class="blue"> $& </span>');
  $(this).html(newThisText)
});

//кабинет синим
$('.contacts-item').each(function(){
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



//decoration of current page link in navigation
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

//куки cookies
<script src="//yandex.st/jquery/cookie/1.0/jquery.cookie.min.js"></script>
if (!$.cookie('was')) {
	console.log('еще не был');
};
$.cookie('was', true, {
    expires: 365
});
