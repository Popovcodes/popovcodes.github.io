// preloader
$(window).on('load', function(){
  $('.preloader').delay(1200).fadeOut(0);
});

$(document).ready(function() {

// parallax
$(window).scroll(function(){
  var yPos = $(this).scrollTop();
  $('.main-img').css({
    'transform' : 'translate(0%, ' + yPos/2+'px)'
  });
});

// hidden menu
  $('.btn-menu, .hidden-menu ul a' ).click(function(){
     if($('.hidden-menu').is(':hidden')){
        $('.hidden-menu').show();
    } else {
        $('.hidden-menu').hide();
    }
});

    // page scroll 
    $("a[rel='Scroll2id']").mPageScroll2id({
    	offset: 30
    });

    // owl carousel

  // $("#owl-demo").owlCarousel({
  //       autoPlay: 3000, //Set AutoPlay to 3 seconds
  //       items : 3,
  //       itemsDesktop : [1199,3],
  //       temsDesktopSmall : [979,3]
  //   });

  // slick.js slider http://kenwheeler.github.io/slick/
  $('#js-slick').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false,
      dots: true,
      responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    
]
  });

  //tabs
  $('#responsiveTabsDemo').responsiveTabs({
    startCollapsed: 'tabs',
    rotate: true,
});

  // form validation
  $('#js-form').validate({
      rules: {
          username: {
              required: true
          },
          phone: {
              digits: true
          },
          email: {
              required: true,
              email: true
          },
          message: {
              required: true
          }
      },

      messages: {
          username: {
              required: "Это поле должно быть заполнено"
          },
          phone: {
              digits: "В этом поле могут быть только цифры"
          },
          email: {
              required: "Это поле должно быть заполнено",
              email: "Проверьте правильность заполнения этого поля"
          },
          message: {
              required: "Пожалуйста, введите Ваше сообщение"
          }
      }

  });

  // WOW.js   https://github.com/matthieua/WOW
  var wow = new WOW( {
    boxClass:    'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0,          // distance to the element when triggering the animation (default is 0)
    mobile: true,       // trigger animations on mobile devices (default is true)
    live: true,       // act on asynchronously loaded content (default is true)
    scrollContainer: null // optional scroll container selector, otherwise use window
});

if(document.documentElement.clientWidth > 768) {
      // wow.js animation  http://mynameismatthieu.com/WOW/
      new WOW().init();

      // nicescroll  https://github.com/inuyaksa/jquery.nicescroll
      $("html").niceScroll({
        cursorcolor: "#157B4E",
        cursorwidth: "14px",
        zindex: 10,
        autohidemode: false,
        background: "#D3F3DB",
        cursorfixedheight: 120,
        cursorborderradius: "10px",
        cursorborder: "1px solid #0f0"
      });
    };
});