$(document).ready(function(){

  // mobile navigation
  $('#btn-menu, #mob-nav a, #overlay, #close' ).click(function(){
    $('.mob-cont').toggleClass('active');
    $('#overlay').toggleClass('active');
    $('section, #header, #footer').toggleClass('blur');

  });

  //header fixing
  $(window).scroll(function(){
    if(document.documentElement.clientWidth > 679) {
      var pageIsScrolled = $(window).scrollTop();
      if(pageIsScrolled > 0) {
        $('#header').addClass('sticky');
      } else {
        $('#header').removeClass('sticky');
      }
    };
  });

  //decoration of current page link in navigation
  $('nav a').each(function(){
    var location = window.location.href;
    var link = this.href
    if(location == link) {
      $(this).addClass('active');
    }
  });

  // masked phone input https://github.com/digitalBush/jquery.maskedinput
  $('input[type="tel"]').mask("+7 (999) 999-99-99");


  // news slider
  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#slider-1').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    appendDots:$('.dots-cont-1'),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#slider-2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    appendDots:$('.dots-cont-2'),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#slider-3').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    appendDots:$('.dots-cont-3'),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#slider-4').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    appendDots:$('.dots-cont-4'),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#slider-5').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    appendDots:$('.dots-cont-5'),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#slider-6').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    appendDots:$('.dots-cont-6'),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#slider-7').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    appendDots:$('.dots-cont-7'),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#slider-8').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    appendDots:$('.dots-cont-8'),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#slider-9').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    appendDots:$('.dots-cont-9'),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#slider-10').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    appendDots:$('.dots-cont-10'),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#slider-11').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    appendDots:$('.dots-cont-11'),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  // set equal height of news slides
  var setEqualHeight = function() {
    var tallest = 0;
    $(this).find('.item').each(function(){
      currentHeight = $(this).outerHeight();
      if(currentHeight > tallest) {
        tallest = currentHeight;
      };
    });
    $(this).find('.item').height(tallest);
    tallest = 0;
  };
  $('.slider').each(setEqualHeight);
  $(window).resize(function(){
    $('.slider').each(setEqualHeight);
  });


  // all sliders prev/next buttons
  $('.left-arr').click(function(){
   $(this).parents('.slider-cont').find('.slider').slick('slickPrev');
  });

  $('.right-arr').click(function(){
   $(this).parents('.slider-cont').find('.slider').slick('slickNext');
  });


  // specialists names first letters of each word styling
  $('.person-name').each(function(){
    var thisName = $(this);
    var words = thisName.text().split(' ');
    var newHtml = '';
    for (var i = 0; i<words.length; i++) {
      newHtml += '<span>' + words[i].substring(0, 1) + '</span>' + words[i].substring(1) + ' ';
    }
    thisName.html(newHtml);
  });








  //main page slider
/*  $('.js-index-slider').bxSlider({
    mode: 'vertical',
    pagerCustom: '.js-index-slider__pager',
    controls: false,
    auto: true
  });
  // product preview slider
  $('.product-item__slider').bxSlider({
    pagerCustom: '.product-item__colors',
    controls: false
  });
  //product page slider
  $('.js-product-view-slider').bxSlider({
    pagerCustom: '.js-product-view-pager',
    controls: false,
    auto: true
  });*/



  //slick.js slider   http://kenwheeler.github.io/slick/
  // $('#slider').slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: true,
  //   dots: true,
  //   responsive: [
  //     {
  //       breakpoint: 620,
  //       settings: {
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //       }
  //     }
  //   ]
  // });

  //page scroll
  // $("a[rel='Scroll2id']").mPageScroll2id({
  //   offset: 35
  // });


  //scroll to top
  // $(window).on ('scroll', function(){
  //   if ($(this).scrollTop() > 800) {
  //     $('#to-top').fadeIn(2000);
  //   } else {
  //     $('#to-top').fadeOut();
  //   }
  // });

  // $("#to-top").click(function () {
  //   $("body, html").animate({
  //     scrollTop: 0
  //   }, 800);
  // });

  // modal windows
  // $('.callback_btn').on('click', function(){
  //   $('.overlay, .callback_modal').fadeIn(200);
  // });
  // $('.appoint_btn, .consult_btn').on('click', function(){
  //   $('.overlay, .appointment_modal').fadeIn(200);
  // });
  // $('.overlay, .modal_close').on('click', function(){
  //   $('.overlay, .callback_modal, .appointment_modal').fadeOut(200);
  // });

  if(document.documentElement.clientWidth > 1199) {
    // wow.js animation  http://mynameismatthieu.com/WOW/
    new WOW().init();
  };
});
