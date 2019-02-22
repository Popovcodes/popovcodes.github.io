$(document).ready(function(){
  // mobile navigation and modal form showing
  $('.btn-menu').click(function(){
    $('#overlay').removeClass('hidden');
    $('#mob-cont').addClass('active');
    $('section, #header, #footer').addClass('blur');
  });

  $('.modal-call').click(function(){
    $('#modal-cont, #overlay').removeClass('hidden');
  });
/*19*/

  $('#mob-nav a, #overlay, #close, #modal-close, #modal-2-close').click(function(){
    $('#modal-cont, #modal-2, #overlay').addClass('hidden');
    $('#mob-cont').removeClass('active');
  });

  $('.modal-2-call').click(function(){
    $('#modal-2, #overlay').removeClass('hidden');
  });



  //header fixing
  $(window).scroll(function(){
    if(document.documentElement.clientWidth > 679) {
      var pageIsScrolled = $(window).scrollTop();
      if(pageIsScrolled > 0) {
        $('#header').addClass('sticky');
      } else {
        $('#header').removeClass('sticky');
      }
    };
  });

  //decoration of current page link in navigation
  $('nav a').each(function(){
    var location = window.location.href;
    var link = this.href
    if(location == link) {
      $(this).addClass('active');
    }
  });

  // input animation on focus
  if($('.input-wrap').length > 0) {
    $(".input-wrap input, .input-wrap textarea").focusout(function(){
      if($(this).val() != ""){
        $(this).addClass("non-empty");
      }else{
        $(this).removeClass("non-empty");
      };
    });
    $('.input-wrap input[type="tel"]').focusout(function(){
      if($(this).val().indexOf('_') != -1) {
        $(this).removeClass("non-empty");
      };
    });
  };
    
  //slick.js slider   http://kenwheeler.github.io/slick/
  if($('div').is('#js-slider')){
    $('#js-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: true,
      appendDots:$('.dots-cont-1'),
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 730,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // set equal height of news slides
    var setEqualHeight = function() {
      var tallest = 0;
      $(this).find('.item').each(function(){
        currentHeight = $(this).outerHeight();
        if(currentHeight > tallest) {
          tallest = currentHeight;
        };
      });
      $(this).find('.item').height(tallest);
      tallest = 0;
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
  };

  // анимация точек списка
  if($('.list-animated').length > 0) {
        $('.list-animated li').each(function(){
        $(this).prepend('<span class="prime"><span class="secondary"></span></span>')
        var ind = $(this).index();
        var indSixth = ind%6;
        $(this).find('.prime, .secondary').css({
          '-webkit-animation-delay': -30+indSixth+'s',
          'animation-delay': -30+indSixth+'s'
        });
    });
  };



//
  if(document.documentElement.clientWidth > 1199) {
    // wow.js animation  http://mynameismatthieu.com/WOW/
    new WOW().init();
  };

    /*2202*/
  for (var i = 0; i < 5; i++) {
    $('.country-list').append('<li class="empty"></li>');
  };
  $('.opacity').css('opacity', '1');


  // $('.list-animated li span').each(function(){
  //   var t = $(this);
  //   var now = 0;
  //   var thisText = $(this).text();
  //   t.text('');
  //   var len = thisText.length;
  //   show();
  //   function show(){
  //       t.text(t.text() + thisText.substr(now,1));
  //       now+=1;
  //       if(now<len){
  //         setTimeout(show,30);
  //       } else {
  //         t.siblings('i').css('opacity', 1);
  //       }
  //     }
  // });
// $('.list-animated li').each(function(){
//     $(this).prepend('<span class="prime"><span class="secondary"></span></span>')
//     var ind = $(this).index();
//     var indSixth = ind%6;
//     $(this).find('.prime, .secondary').css({
//       '-webkit-animation-delay': -30+indSixth+'s',
//       'animation-delay': -30+indSixth+'s'
//     });
    // $(this).find('.secondary+i').css({
    //   '-webkit-animation-delay': -28+indSixth+'s',
    //   'animation-delay': -29+indSixth+'s'
    // });

  // });


});
