$(document).ready(function(){

  $('.header-nav a').each(function(){
    var location = window.location.href;
    var link = this.href
    if(location == link) {
      $(this).addClass('active');
    }
  });

  //main page slider
  $('.js-index-slider').bxSlider({
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
  });


  //active list items styling
  $('.sizes-list li, .choose-size__list li').click(function(){
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
  });

  //input range
  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 1200,
      step: 10,
      values: [ 100, 1100 ],
      slide: function( event, ui ) {
        $( "#price-from" ).val( ui.values[ 0 ] );
        $( "#price-to" ).val( ui.values[ 1 ] );
      }
    });
    $( "#price-from" ).val($( "#slider-range" ).slider( "values", 0 ));
    $( "#price-to" ).val($( "#slider-range" ).slider( "values", 1 ));
  } );

  // Изменение местоположения ползунка при вводиде данных в первый элемент input
  $("input#price-from").change(function(){
    var value1=$("input#price-from").val();
    var value2=$("input#price-to").val();
      if(parseInt(value1) > parseInt(value2)){
      value1 = value2;
      $("input#price-from").val(value1);
    }
    $("#slider-range").slider("values",0,value1);
  });

  // Изменение местоположения ползунка при вводиде данных в второй элемент input
  $("input#price-to").change(function(){
    var value1=$("input#price-from").val();
    var value2=$("input#price-to").val();

    if(parseInt(value1) > parseInt(value2)){
      value2 = value1;
      $("input#price-to").val(value2);
    }
    $("#slider-range").slider("values",1,value2);
  });


  //preloader
  // $(window).on('load', function(){
  //   $('.preloader').delay(1000).fadeOut(300);
  // });

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

  //IE placeholder  https://github.com/mathiasbynens/jquery-placeholder
  // $('input, textarea').placeholder();

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

  if(document.documentElement.clientWidth > 768) {
    // wow.js animation  http://mynameismatthieu.com/WOW/
    // new WOW().init();
  };
});
