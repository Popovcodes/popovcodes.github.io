$(document).ready(function(){

  // show / hide mob menu
  $('.mob_menu_btn, .mob_nav a, .overlay, .mob_close_btn' ).click(function(){
      $('.mob_nav_container').toggleClass('active');
      $('.overlay').toggleClass('hidden')
  });


  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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
        }
      }
    ]
  });

  $('#slider-nav').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    asNavFor: '#slider',
    focusOnSelect: true,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
        }
      }
    ]
  });

});
