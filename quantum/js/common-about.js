$(document).ready(function(){

  // mobile navigation
  $('#mob-nav-btn, .mob-nav-cont a, .overlay, #mob-nav-close' ).click(function(){
    $('.mob-nav-cont').toggleClass('active');
    $('.overlay').toggleClass('hidden')
  });

  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#js-about-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 890,
        settings: {
        }
      },
      {
        breakpoint: 480,
        settings: {
          }
        },
        {
          breakpoint: 375,
          settings: {
          }
      }
    ]
  });

  $('#about-slider-prev').click(function(){
    $('#js-about-slider').slick('slickPrev');
  });

  $('#about-slider-next').click(function(){
    $('#js-about-slider').slick('slickNext');
  });
 
  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#js-clients-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            }
          },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
      }
    ]
  });

  $('#clients-arow-prev').click(function(){
    $('#js-clients-slider').slick('slickPrev');
  });

  $('#clients-arow-next').click(function(){
    $('#js-clients-slider').slick('slickNext');
  });





  // show/hide searh input
  $('#searchBtn-trigger').click(function(){
    $('#search-form').addClass('active');
  });

  $('#search-close').click(function(){
    $('#search-form').removeClass('active');
  });

  //parallax
  // var parallax = function() {
  //   var pageScrolled = $(window).scrollTop();
  //   var windowHeight = $(window).height();
  //   var scrolledToWindowBottom = pageScrolled + windowHeight;

  //   var aboutSectionPosition = $('#about-section').offset().top;
  //   var aboutSectionVisible = scrolledToWindowBottom - aboutSectionPosition;

  //   var contactsSectionPosition = $('#contacts-section').offset().top;
  //   var contactsSectionVisible = scrolledToWindowBottom - contactsSectionPosition;

  //   if (aboutSectionVisible > 0) {
  //     $('.about-glare-l-1, .about-glare-r-1').css({"transform":  "translate(0%, "+ -aboutSectionVisible/3+"px)"});
  //     $('.about-glare-l-2, .about-glare-r-2').css({"transform":  "translate(0%, "+ -aboutSectionVisible/2.5+"px)"});
  //   } else {};

  //   if (contactsSectionVisible > 0) {
  //     $('.contacts-glare-t-1, .contacts-glare-b-1').css({"transform": "translate(0%, "+ -contactsSectionVisible/4 + "px)"});
  //     $('.contacts-glare-t-2, .contacts-glare-b-2').css({"transform": "translate(0%, "+ -contactsSectionVisible/2.5 + "px)"});
  //   } else {};
  // }

  //$(window).scroll(parallax);


  if(document.documentElement.clientWidth > 1200) {
    // wow.js animation  http://mynameismatthieu.com/WOW/
    new WOW().init();
  };
});

