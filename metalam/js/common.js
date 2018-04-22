$(document).ready(function(){

  // mobile navigation
  $('#mob-menu-btn, .mobile-nav-container a, #mob-nav-overlay, #mob-nav-close' ).click(function(){
    $('.mobile-nav-container').toggleClass('active');
    $('.overlay').toggleClass('hidden')
  });

  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#js-areas-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    appendDots:$('.slide-notations')
  });



  $('#area-arrow-prev').click(function(){
    $('#js-areas-slider').slick('slickPrev');
  });

  $('#area-arrow-next').click(function(){
    $('#js-areas-slider').slick('slickNext');
  });

  $('#js-areas-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    var catName = $('.slick-active').find('.slide-category').html();
    $('#area-heading').html(catName);
  });

  $(".tabs-list li").on('click', function(){
    var filter = $(this).data('filter');
    $("#js-areas-slider").slick('slickUnfilter');
    
    if(filter == 'doors'){
      $("#js-areas-slider").slick('slickFilter','.doors');
    }
    else if(filter == 'tiles'){
      $("#js-areas-slider").slick('slickFilter','.tiles');
    }
    else if(filter == 'furniture'){

      $("#js-areas-slider").slick('slickFilter','.furniture');
    }
    else if(filter == 'all'){
      
      $("#js-areas-slider").slick('slickUnfilter');
    }
    
  })

   // tabs
  $('#tabs-container').responsiveTabs({
      startCollapsed: 'tabs',
      rotate: false,
  });

  //page scroll
  $('a.logo, nav a').click(function(){
    var el = $(this).attr('href');
    var dest = $(el).offset().top;
    $('html, body').animate({'scrollTop': dest}, 1000);
    return false;
  });

  $(window).scroll(function(){
    $('section[id]').each(function(){
      var id = $(this).attr('id');
      if($(this).offset().top - 200 < $(window).scrollTop()){
        $('nav a').removeClass('active');
        $('a[href="#'+id+'"]').addClass('active');
      }
      if($(window).scrollTop() < 500) {
        $('nav a').removeClass('active');
      }
    });
  });

  // modal window
  $('.order-button').on('click', function(){
    $('#modal-overlay, #modal-container').fadeIn(200);
  });
  $('#modal-overlay, .modal-close').on('click', function(){
    $('#modal-overlay, #modal-container').fadeOut(200);
  });

  //https://bkosborne.com/jquery-feature-carousel
  var carousel = $("#js-catalog-slider").waterwheelCarousel({
     flankingItems: 2,
     separation: 60,
     sizeMultiplier: 1,
     opacityMultiplier: 0.9,
     separationMultiplier: 1,
     movedToCenter: function($newCenterItem) {
      var rest = $newCenterItem.siblings('.rest').html();
      $('#rest-num').html(rest);
      var name = $newCenterItem.siblings('.name').html();
      $('#catalog-item-name').html(name);
      units();
     },
     autoPlay: 3000
  });

  var units = function(){
      var number = $('#rest-num').html();
      var reminder = number%10;
      var unitsForm;
      if (reminder == 1) {
        unitsForm = 'штука'; 
      } else if (reminder >1 && reminder <5 ) {
        unitsForm = 'штуки';
      } else {
        unitsForm = 'штук';
      }
      $('#rest-units').html(unitsForm);
  };

  $('#catalog-prev').click(function(){
    carousel.prev();
  });

  $('#catalog-next').click(function(){
    carousel.next();
  });

  $(window).resize(function(){
    carousel.reload({
      flankingItems: 2,
      separation: 60,
      sizeMultiplier: 1,
      opacityMultiplier: 0.9,
      separationMultiplier: 1,
      movedToCenter: function($newCenterItem) {
       var rest = $newCenterItem.siblings('.rest').html();
       $('#rest-num').html(rest);
       var name = $newCenterItem.siblings('.name').html();
       $('#catalog-item-name').html(name);
      },
      autoPlay: 3000
    });
  });

  //rest info block positioning
  var restInfoWidthSet = function(){
    if(document.documentElement.clientWidth > 1350) {
      var restInfoWidth = $('.catalog-arrows-container').offset().left;
      $('.rest-info-container').css('width', restInfoWidth);
    } else {
      $('.rest-info-container').css('width', 'auto');
    };
  };
  restInfoWidthSet();
  $(window).resize(restInfoWidthSet);
  
  $('#rest-close').click(function(){
    $('#rest-info-container').toggleClass('hide');
  });

  //yandex map
  /*===============================*/
    ymaps.ready(init);

    function init(){     

      var myMap = new ymaps.Map("map", {
        center: [55.43098795, 37.54451669],
        zoom: 17
      });

      myMap.controls
          .remove('geolocationControl')
          .remove('trafficControl')
          .remove('rulerControl')
          .remove('searchControl')
          .remove('typeSelector')
          .remove('fullscreenControl');

      myMap.behaviors.disable([
          'drag',
          'scrollZoom'
      ]);

    var myPlacemark = new ymaps.Placemark([55.43098795, 37.54451669],{
      hintContent: 'METALAM'
    },{
      preset: 'islands#nightCircleDotIcon'
    });
    myMap.geoObjects.add(myPlacemark);

    myMap.events.add('click', function() {
        myMap.behaviors
          .enable('scrollZoom')
          .enable('drag')
          .enable('multiTouch');
       });
    }
  /*===============================*/
});
