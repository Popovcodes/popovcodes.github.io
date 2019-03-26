$(document).ready(function(){

// modal form and mobile navigation call
$('.modal-call').click(function(){
  $('#overlay, #modal-cont').fadeIn();
});

$('#overlay, #modal-close').click(function(){
  $('#overlay, #modal-cont').fadeOut();
});


// декор кнопок
$('.button').append('<span></span>');


//Слайдеры
//slick.js slider   http://kenwheeler.github.io/slick/
$('#slider-lg').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: false,
  dots: false,
  asNavFor: '#slider-sm',
});

 $('#slider-sm').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: false,
  dots: false,
  asNavFor: '#slider-lg',
  focusOnSelect: true,
  centerMode: true,
  centerPadding: '0px'
});

// slider prev/next buttons
$('#arr-prev').click(function(){
  $('#slider-lg').slick('slickPrev');
  $('#slider-sm').slick('slickPrev');
});
  
$('#arr-next').click(function(){
  $('#slider-lg').slick('slickNext');
  $('#slider-sm').slick('slickNext');
});

var slidesCount = $("#slider-lg").slick("getSlick").slideCount;
$('#total').text(slidesCount);

$("#slider-lg").on("afterChange", function(event, slick, currentSlide){
  $('#current').text(currentSlide + 1);
});

$('#slider-sm, #slider-lg').css('opacity', '1');
/**/


//видео
$('.vid-btn').click(function(e){
  e.preventDefault();
  var videoIFrame = '<iframe src="'+ $(this).attr('href') +'?rel=0&amp;showinfo=0&amp;autoplay=1&amp;" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen id="v-player"></iframe>';
  $('#overlay, #video-wrap').fadeIn();
  $('#video-inner').append(videoIFrame);
});
$('#video-close, #video-wrap, #overlay').click(function(){
  $('#v-player').remove();
  $('#overlay, #video-wrap').fadeOut();
});


//дата следующей субботы (если сегодня суббота до 22-00 - берет сегодняшнюю дату); обратный отсчет

var today = new Date();
var todayDay = today.getDay();

var finishYear;
var finishMonth;
var finishDate;
var finishHour = 22;

if (todayDay == 6 && today.getUTCHours() + 3 < finishHour) {
  finishYear = today.getFullYear();
  finishMonth = today.getMonth();
  finishDate = today.getDate();
} else {
  function getDateOfNextDay(day) {
    var date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1 + ((7 + day - date.getDay()) % 7));
  };
  var nextTime = getDateOfNextDay(5);
  var finishYear = nextTime.getFullYear();
  var finishMonth = nextTime.getMonth();
  var finishDate = nextTime.getDate();
};
$('#day').text(finishDate);
if(finishMonth == 0) {$('#month').text('января');} else 
if(finishMonth == 1) {$('#month').text('февраля');} else 
if(finishMonth == 2) {$('#month').text('марта');} else 
if(finishMonth == 3) {$('#month').text('апреля');} else 
if(finishMonth == 4) {$('#month').text('мая');} else 
if(finishMonth == 5) {$('#month').text('июня');} else 
if(finishMonth == 6) {$('#month').text('июля');} else 
if(finishMonth == 7) {$('#month').text('августа');} else 
if(finishMonth == 8) {$('#month').text('сентября');} else 
if(finishMonth == 9) {$('#month').text('октября');} else 
if(finishMonth == 10) {$('#month').text('ноября');} else 
if(finishMonth == 11) {$('#month').text('декабря');};
$('#date').addClass('shown');

//обратный отсчет

function timerLeft(year,month,day,hours) {
  setInterval(function() {

      var today = new Date();
      var todayDay = today.getDay();
      var dateNow = today.getTime();
      var dateFinish = new Date(year,month,day,hours);

      var sec = Math.floor((dateFinish - dateNow) / 1000);
      var secToHours = sec % 86400;
      var secToMinutes = secToHours % 3600;
      var daysNumber = Math.floor(sec / 86400);
      var hoursNumber = Math.floor(secToHours / 3600);
      var minutesNumber = Math.floor(secToMinutes / 60);
      var secondsNumber = secToMinutes % 60;

      if(daysNumber < 10) {$('#days-left').text('0' + daysNumber);} else {$('#days-left').text(daysNumber);};
      if(daysNumber > 4 && daysNumber < 21) {$('#seconds-units').text('дней');} else if(daysNumber%10 == 1) {$('#days-units').text('день');} else if(daysNumber%10 > 1 && daysNumber%10 < 5) {$('#days-units').text('дня');} else {$('#days-units').text('дней');};

      if(hoursNumber < 10) {$('#hours-left').text('0' + hoursNumber);} else {$('#hours-left').text(hoursNumber);};
      if(hoursNumber > 4 && hoursNumber < 21) {$('#seconds-units').text('часов');} else if(hoursNumber%10 == 1) {$('#hours-units').text('час');} else if(hoursNumber%10 > 1 && hoursNumber%10 < 5) {$('#hours-units').text('часа');} else {$('#hours-units').text('часов');};

      if(minutesNumber < 10) {$('#minutes-left').text('0' + minutesNumber);} else {$('#minutes-left').text(minutesNumber);};
      if(minutesNumber > 4 && minutesNumber < 21) {$('#minutes-units').text('минут');} else if(minutesNumber%10 == 1) {$('#minutes-units').text('минуту');} else if(minutesNumber%10 > 1 && minutesNumber%10 < 5) {$('#minutes-units').text('минуты');} else {$('#minutes-units').text('минут');};

      if(secondsNumber < 10) {$('#seconds-left').text('0' + secondsNumber);} else {$('#seconds-left').text(secondsNumber);};
      if(secondsNumber > 4 && secondsNumber < 21) {$('#seconds-units').text('секунд');} else if(secondsNumber%10 == 1) {$('#seconds-units').text('секунду');} else if(secondsNumber%10 > 1 && secondsNumber%10 < 5) {$('#seconds-units').text('секунды');} else {$('#seconds-units').text('секунд');};

      if(secondsNumber < 0){$('.countdown-block').css('display','none');}

  },1000)
}
timerLeft(finishYear, finishMonth, finishDate, finishHour);
$('.countdown-block').css('opacity','1');




// Скрол до карты
$('#map-link').click(function(){
  var mapOffset = $('#map').offset().top;;
  $('html, body').animate({'scrollTop': mapOffset}, 1000);
  return false;
});


// https://github.com/digitalBush/jquery.maskedinput
$('input[type="tel"]').mask("+7 (999) 999-99-99");

$('.figure img').each(function(){
  var tt = $(this).parents('.figure').attr('id');
  $(this).attr('title', tt);
});

//
// Летающие элементы
var flies = function(){
  if(window.innerWidth > 767 ) {

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


    var line1Visible = scrolledToWindowBottom - $('#line-1').offset().top;
    if (line1Visible > 0 && line1Visible < windowHeight) {
      $('#line-1').css({"transform": "rotate(-10deg) translate(0%, "+ -line1Visible/1.8+"px)"});
    };

    var line2Visible = scrolledToWindowBottom - $('#line-2').offset().top;
    if (line2Visible > 0 && line2Visible < windowHeight) {
      $('#line-2').css({"transform": "rotate(-20deg) translate(0%, "+ -line2Visible/4+"px)"});
    };

    var line3Visible = scrolledToWindowBottom - $('#line-3').offset().top;
    if (line3Visible > 0 && line3Visible < windowHeight) {
      $('#line-3').css({"transform": "rotate(-17deg) translate(0%, "+ -line3Visible/3+"px)"});
    };

    var line4Visible = scrolledToWindowBottom - $('#line-4').offset().top;
    if (line4Visible > 0 && line4Visible < windowHeight) {
      $('#line-4').css({"transform": "rotate(30deg) translate(0%, "+ -line4Visible/2+"px)"});
    };

    var line5Visible = scrolledToWindowBottom - $('#line-5').offset().top;
    if (line5Visible > 0 && line5Visible < windowHeight) {
      $('#line-5').css({"transform": "rotate(-14deg) translate(0%, "+ -line5Visible/2+"px)"});
    };

    var line6Visible = scrolledToWindowBottom - $('#line-6').offset().top;
    if (line6Visible > 0 && line6Visible < windowHeight) {
      $('#line-6').css({"transform": "rotate(-12deg) translate(0%, "+ -line6Visible/6+"px)"});
    };

    if(window.innerWidth > 991) {
      $('.animated').each(function(){
        var thisPosition = $(this).offset().top;
        var thisHeight = $(this).height();
        var thisVisible = scrolledToWindowBottom - thisPosition - thisHeight;
        if(thisVisible > 0) {
          $(this).addClass('shown');
        };
      });
    }

  };
};
flies();
$(window).scroll(flies).resize(flies);

});
