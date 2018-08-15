$(document).ready(function(){

  //slick.js slider   http://kenwheeler.github.io/slick/

  $('#js-slider-sertif').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    appendDots:$('.dots-cont-sertif'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
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

    $('#js-slider-letters').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: true,
      appendDots:$('.dots-cont-letters'),
      responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
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


    // select styling  https://github.com/Dimox/jQueryFormStyler
    $('select').styler();
    // masked phone input https://github.com/digitalBush/jquery.maskedinput
    $('input[type="tel"]').mask("+7 (999) 999-99-99");
    //popup images
    $('.popup').fancybox({});


});
