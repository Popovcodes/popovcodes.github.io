$(document).ready(function(){

  //slick.js slider   http://kenwheeler.github.io/slick/

  $('#js-slider-1').slick({
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
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
         {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('#js-slider-2').slick({
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
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
         {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

   $('#calc-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      arrows: false,
      dots: true,
      appendDots:$('.calc-dots-cont'),
    });

   // set equal height of slides content (for landscapes imgs vertical centering)
    var setEqualHeight = function() {
      $(this).find('.slide').each(function(){
        var currentHeight = $(this).parents('.slick-track').outerHeight();
        $(this).height(currentHeight);
      });
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

    //popup images
    $('.popup').fancybox({});

});
