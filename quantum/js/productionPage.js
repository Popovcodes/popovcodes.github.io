$(document).ready(function(){

  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#js-productSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false
  });

  $('#productSlider_prev').click(function(){
    $('#js-productSlider').slick('slickPrev');
  });

  $('#productSlider_next').click(function(){
    $('#js-productSlider').slick('slickNext');
  });
 
  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#js-product-type-slider-1').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false
  });

  $('#productTypeSlider1_prev').click(function(){
    $('#js-product-type-slider-1').slick('slickPrev');
  });

  $('#productTypeSlider1_next').click(function(){
    $('#js-product-type-slider-1').slick('slickNext');
  });

  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#js-product-type-slider-2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false
  });

  $('#productTypeSlider2_prev').click(function(){
    $('#js-product-type-slider-2').slick('slickPrev');
  });

  $('#productTypeSlider2_next').click(function(){
    $('#js-product-type-slider-2').slick('slickNext');
  });

  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#js-product-type-slider-3').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false
  });

  $('#productTypeSlider3_prev').click(function(){
    $('#js-product-type-slider-3').slick('slickPrev');
  });

  $('#productTypeSlider3_next').click(function(){
    $('#js-product-type-slider-3').slick('slickNext');
  });

  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#js-product-type-slider-4').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false
  });

  $('#productTypeSlider4_prev').click(function(){
    $('#js-product-type-slider-4').slick('slickPrev');
  });

  $('#productTypeSlider4_next').click(function(){
    $('#js-product-type-slider-4').slick('slickNext');
  });

});

