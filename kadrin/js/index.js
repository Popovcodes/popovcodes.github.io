$(document).ready(function(){

  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#js-action-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    fade: true
  });
  $('#action-prev').click(function(){
      $('#js-action-slider').slick('slickPrev');
  });
  $('#action-next').click(function(){
      $('#js-action-slider').slick('slickNext');
  });

  //popular
  $('#js-popular-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    appendDots:$('.popular-slider-cont')
  });

  //offers 
  $('#js-offer-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    appendDots:$('.offer-slider-cont')
  });


    
    



});
