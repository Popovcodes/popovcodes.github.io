$(document).ready(function(){
  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#js-product-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true
  });

  //features slider
  $('#js-feature-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true
  });
  
  //popup images
  $('.popup').fancybox({});
});