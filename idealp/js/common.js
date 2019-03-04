$(document).ready(function(){

// modal form and mobile navigation call
$('.modal-call').click(function(){
  $('#overlay, #modal-cont').fadeIn();
  $('#btn-menu').addClass('reduced').removeClass('active');
});
$('#btn-menu').click(function(){
  $('#mob-cont').toggleClass('active');
  $('#overlay').fadeToggle();
  $(this).toggleClass('<activ></activ>e');
});
$('.mob-modal-call').click(function(){
  $('#mob-cont, #btn-menu').removeClass('active');
  $('#modal-cont').fadeIn();
});
$('#overlay, #modal-close, #mob-cont a').click(function(){
  $('#overlay, #modal-cont').fadeOut();
  $('#mob-cont, #btn-menu').removeClass('active');
});


//фиксированный хедер
var fixHeader = function(){
  var pageIsScrolled = $(window).scrollTop();
  if(window.innerWidth > 991) {
    if(pageIsScrolled > 0) {
      $('#header').addClass('sticky');
    } else {
      $('#header').removeClass('sticky');
    }
  } else {
    $('#header').removeClass('sticky');
  };
};
fixHeader();
$(window).scroll(fixHeader);

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
    if($(this).offset().top - 270 < $(window).scrollTop()){
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


//slick.js slider   http://kenwheeler.github.io/slick/
$('#slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1299,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
$('#slider-prev').click(function(){
    $('#slider').slick('slickPrev');
});
$('#slider-next').click(function(){
    $('#slider').slick('slickNext');
});
$('#slider').css('opacity', '1');


//
$('.bar li, .stage').each(function(){
  var ind = $(this).index();
  $(this).css({
      '-webkit-transition-delay': ind*0.4+'s',
      'transition-delay': ind*0.4+'s'
    });
});


//parallax & animation
var parallax = function(){
  var pageScrolled = $(window).scrollTop();
  var windowHeight = $(window).height();
  var scrolledToWindowBottom = pageScrolled + windowHeight;
  $('.el').each(function(){
    var elPos = $(this).offset().top;
    var elVis = scrolledToWindowBottom - elPos;
    if (elVis > 0) {
          $(this).css({"transform":  "translate(0, "+ elVis/5 +"px)"});
    };
  });

  var el5Pos = $('#el5').offset().top;
  var el5Vis = scrolledToWindowBottom - el5Pos;
  if (el5Vis > 0) {
    $('#el5').css({"transform":  "translate(0, "+ el5Vis/15 +"px)"});
  };

  var aboutLPos = $('#about-l').offset().top + $('#about-l').outerHeight();
  if (scrolledToWindowBottom + 320 > aboutLPos ) {
    $('#about-l').addClass('active');
  };

  $('.bar ul').each(function(){
    var ulPos = $(this).offset().top + $(this).outerHeight();
    var ulVis = scrolledToWindowBottom - ulPos;
    if (ulVis + 380 > 0) {
      $(this).find('li').addClass('visible');
    };
  });

  $('.stage').each(function(){
    var stagePos = $(this).offset().top + $(this).outerHeight();
    var stageVis = scrolledToWindowBottom - stagePos;
    if (stageVis + 100 > 0) {
      $(this).addClass('visible');
    };
  });

};
parallax();
$(window).scroll(parallax);



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
$('input[type="tel"]').mask("+9 (999) 999-99-99");


// unfixed background for IE, Edge
if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) 
  {
    $('#prices, #top-section').css('background-attachment', 'scroll');
    $('#about-l').addClass('non-animated');
  };

});
