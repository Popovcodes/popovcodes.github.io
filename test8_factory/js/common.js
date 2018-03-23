$(document).ready(function(){

  //header fixing
  $(window).scroll(function(){
    if(document.documentElement.clientWidth > 992) {
      var pageIsScrolled = $(window).scrollTop();
      if(pageIsScrolled > 0) {
        $('#header').addClass('fixed');
      } else {
        $('#header').removeClass('fixed');
      }
    };
  });

  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#js-main-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    vertical: true,
    adaptiveHeight: true
  });

  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#js-works-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        }
      },
      {
        breakpoint: 480,
        settings: {
          vertical: true
        }
      }
    ]
  });

  $('#worksSlider-custom-prev').click(function(){
    $('#js-works-slider').slick('slickPrev');
  });

  $('#worksSlider-custom-next').click(function(){
    $('#js-works-slider').slick('slickNext');
  });

  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#js-manufactory-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 620,
        settings: {
        }
      },
      {
        breakpoint: 480,
        settings: {
          vertical: true
        }
      }
    ]
  });

  $('#manSlider-custom-prev').click(function(){
    $('#js-manufactory-slider').slick('slickPrev');
  });

  $('#manSlider-custom-next').click(function(){
    $('#js-manufactory-slider').slick('slickNext');
  });

  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#js-testimonials-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
      },
    ]
  });

  $('#testimonial-prev').click(function(){
    $('#js-testimonials-slider').slick('slickPrev');
  });

  $('#testimonial-next').click(function(){
    $('#js-testimonials-slider').slick('slickNext');
  });

  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#js-clients-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
      },
    ]
  });

  $('#clients-prev').click(function(){
    $('#js-clients-slider').slick('slickPrev');
  });

  $('#clients-next').click(function(){
    $('#js-clients-slider').slick('slickNext');
  });

  $('#modal-btn').click(function(){
    $('#overlay, #modal-container').fadeIn(200);

  });

  $('#overlay, #modal-close').click(function(){
    $('#overlay, #modal-container').fadeOut(200);
  });

    $('.video-prev-container').fancybox();
    $('.fancybox').fancybox({});

    if(document.documentElement.clientWidth > 992) {
      new WOW().init();
    };

  if(document.documentElement.clientWidth > 768) {
    // wow.js animation  http://mynameismatthieu.com/WOW/
    // 

    //parallax and js-animation
      //parallax
      var parallax = function() {
        var pageScrolled = $(window).scrollTop();
        var windowHeight = $(window).height();
        var scrolledToWindowBottom = pageScrolled + windowHeight;

        var worksSectionPosition = $('#works-section').offset().top;
        var worksSectionVisible = scrolledToWindowBottom - worksSectionPosition;

        var manSectionPosition = $('#manufactory-section').offset().top;
        var manSectionVisible = scrolledToWindowBottom - manSectionPosition;

        if (worksSectionVisible > 0) {
          $('#leaves-l').css({"transform":  "translate(0%, "+ -worksSectionVisible/18+"%)" + "scale(-1, 1)"});
        } else {};

        if (manSectionVisible > 0) {
          $('#leaves-r').css({"transform":  "translate(0%, "+ -manSectionVisible/15 + "%)"});
        } else {};
      }

        $(window).scroll(parallax);
  };
});
    