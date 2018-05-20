$(document).ready(function(){

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

/*accordion */
  $('.extended h4').click(function(){
    $('.extended').find('ul').slideUp();
    if(!$(this).parents('.extended').hasClass('active')){
      $(this).parents('.extended').find('ul').slideDown();
      $('.extended').removeClass('active');
    }
    $(this).parents('.extended').toggleClass('active');
  });

  $('.extended li a').click(function(){
    $('.extended li a').removeClass('active');
    $('.categories-accordion>li').removeClass('active');
    $(this).addClass('active');
  });

  $('.categories-accordion>li').not('.extended').click(function(){
    $('.extended li a').removeClass('active');
    $('.categories-accordion>li').removeClass('active');
    $(this).addClass('active');
  });


  // quantity and sum change for single sale pruducts
  $('.single-unit-item').each(function(){
    var defaultQuant = parseInt($(this).find('input[type="number"]').val());
    var price = parseInt($(this).find('.unit-price').html());
    var setSum = defaultQuant*price;
    $(this).find('.cost-sum').html(setSum);
  });

  $('.single-unit-item input[type="number"]').change(function(){
    var newQuant = parseInt($(this).val());
    var price = parseInt($(this).parents('.count-container').find('.unit-price').html());
    var costSum = newQuant*price;
    $(this).parents('.product-action').find('.cost-sum').html(costSum);
  });

  $('.minus').click(function(){
    var numInput = $(this).parents('.count-container').find('input[type="number"]');
    var currentQuant = parseInt(numInput.val());
    if(currentQuant> 1) {
      numInput.val(currentQuant - 1).change();
    } else {
      $.noop;
    }
  });

  $('.plus').click(function(){
    var numInput = $(this).parents('.count-container').find('input[type="number"]');
    var currentQuant = parseInt(numInput.val());
      numInput.val(currentQuant + 1).change();
  });




  if(document.documentElement.clientWidth > 768) {
    // wow.js animation  http://mynameismatthieu.com/WOW/
    // new WOW().init();
  };
});
