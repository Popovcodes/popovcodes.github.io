$(document).ready(function(){


  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#js-gallery-slider-1').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false
  });

  $('#gallery-slider-1_prev').click(function(){
    $('#js-gallery-slider-1').slick('slickPrev');
  });

  $('#gallery-slider-1_next').click(function(){
    $('#js-gallery-slider-1').slick('slickNext');
  });
 
  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#js-gallery-slider-2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false
  });

  $('#gallery-slider-2_prev').click(function(){
    $('#js-gallery-slider-2').slick('slickPrev');
  });

  $('#gallery-slider-2_next').click(function(){
    $('#js-gallery-slider-2').slick('slickNext');
  });

  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#js-gallery-slider-3').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false
  });

  $('#gallery-slider-3_prev').click(function(){
    $('#js-gallery-slider-3').slick('slickPrev');
  });

  $('#gallery-slider-3_next').click(function(){
    $('#js-gallery-slider-3').slick('slickNext');
  });

  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#js-gallery-slider-4').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false
  });

  $('#gallery-slider-4_prev').click(function(){
    $('#js-gallery-slider-4').slick('slickPrev');
  });

  $('#gallery-slider-4_next').click(function(){
    $('#js-gallery-slider-4').slick('slickNext');
  });
});

