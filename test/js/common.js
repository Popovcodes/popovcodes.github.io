$(document).ready(function(){

  // show / hide mob menu
    $('.mob-nav__btn, .mobile-nav a, .overlay, .mobile-nav__close' ).click(function(){
        $('.mobile-nav').toggleClass('active');
        $('.overlay').toggleClass('hidden')
    });


  // slick.js slider   http://kenwheeler.github.io/slick/
    $('#js-main-slider').slick({
      infinite: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 3000,
      arrows: false,
      dots: false,
    });

    $('#prev').click(function(){
      $('#js-main-slider').slick('slickPrev');
    });

    $('#next').click(function(){
      $('#js-main-slider').slick('slickNext');
    });
 });
