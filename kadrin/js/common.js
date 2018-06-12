$(document).ready(function(){

  //show/hide favourites
  $('#fav-btn').click(function(){
    $('#overlay-transparent').toggleClass('hidden');
    $(this).toggleClass('active');
    $('#fav-container').slideToggle();
  });
  $('#overlay-transparent').click(function(){
    $(this).toggleClass('hidden');
    $('#fav-btn').toggleClass('active');
    $('#fav-container').slideToggle();
  });

  // price bit delimiter
  $('.price').each(function(){
    var str = $(this).text();
    $(this).html(str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
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

  //decoration of current link in navigation
    $('nav a').each(function(){
      var location = window.location.href;
      var link = this.href
      if(location == link) {
        $(this).addClass('active');
      }
    });

  if(document.documentElement.clientWidth > 768) {
    // wow.js animation  http://mynameismatthieu.com/WOW/
    // new WOW().init();
  };
});
