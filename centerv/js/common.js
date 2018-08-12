$(document).ready(function(){

    // mobile navigation and modal form showing
    $('.btn-menu').click(function(){
      $('#overlay').fadeIn();
      $('#mob-cont').addClass('active');
    });



    $('#mob-nav a, #overlay, #close').click(function(){
      $('#overlay').fadeOut();
      $('#mob-cont').removeClass('active');
    });


  //slick.js slider   http://kenwheeler.github.io/slick/
  // testimonial slider
  $('#testimonials-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    appendDots:$('#dots-cont'),
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  });

  // testimonials slider prev/next buttons
  $('#slide-prev').click(function(){
    $('#testimonials-slider').slick('slickPrev');
  });
    
  $('#slide-next').click(function(){
    $('#testimonials-slider').slick('slickNext');
  });

  // modal slider
  $('.slider-lg').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    vertical: true,
    verticalSwiping: true,
    asNavFor: '.slider-sm',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          vertical: false,
          verticalSwiping: false,
          asNavFor: '.slider-sm'
        }
      }
    ]
  });

   $('.slider-sm').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: '.slider-lg',
    focusOnSelect: true,
     responsive: [
      {
        breakpoint: 991,
        settings: {
          vertical: false,
          verticalSwiping: false,
          asNavFor: '.slider-lg',
          focusOnSelect: true,
          centerMode: true,
        }
      }
    ]
  });

  // modal slider prev/next buttons
  $('#modal-prev').click(function(){
    $('.slider-lg').slick('slickPrev');
    $('.slider-sm').slick('slickPrev');
  });
    
  $('#modal-next').click(function(){
    $('.slider-lg').slick('slickNext');
    $('.slider-sm').slick('slickNext');
  });

  //popup images
  $('.popup').fancybox({
    touch:false,
  });

  $('.slider-call').fancybox({
    touch:false,
  });

  //page smooth scroll
  $("a[rel='Scroll2id']").mPageScroll2id({});


  if(document.documentElement.clientWidth > 1300) {
    // wow.js animation  http://mynameismatthieu.com/WOW/
    new WOW().init();
  };
});
