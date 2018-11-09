$(window).ready(function(){

$('#lg-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: false,
  dots: false,
  vertical: true,
  verticalSwiping: true,
  asNavFor: '#sm-slider',
  responsive: [
    {
      breakpoint: 480,
      settings: {
        vertical: false,
        verticalSwiping: false,
        asNavFor: '#sm-slider'
      }
    }
  ]
});

$('#sm-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: false,
  dots: false,
  vertical: true,
  verticalSwiping: true,
  centerMode: true,
  centerPadding: '0px',
  asNavFor: '#lg-slider',
  focusOnSelect: true,
   responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false,
        asNavFor: '#lg-slider',
        focusOnSelect: true,
        centerMode: true,
      }
    }
  ]
});

$('#slider-arr-prev').click(function(){
  $('#lg-slider').slick('slickPrev');
  $('#sm-slider').slick('slickPrev');
});
  
$('#slider-arr-next').click(function(){
  $('#lg-slider').slick('slickNext');
  $('#sm-slider').slick('slickNext');
});

// табы https://github.com/jellekralt/Responsive-Tabs
$('#tabs-container').responsiveTabs({
  startCollapsed: 'tabs',
  rotate: false,
});

// fancybox http://fancyapps.com/fancybox/3/
$('[data-fancybox="gallery"]').fancybox({
  loop: true,
  toolbar: true,
  idleTime: 1000,
  hideScrollbar: false
});

});