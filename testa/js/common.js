$(document).ready(function(){

  $(".mainSlider .owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      mouseDrag: true,
      nav: true,
      navText: false,
      dots: true,
      center: true,
      margin: 20,
      fallbackEasing: 'ease-out',
      smartSpeed: 500,
      responsive : {
        768 : {
          items: 1
        }
      }
    });
});
