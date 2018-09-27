$(document).ready(function(){

// slick slider
$('#js-big-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: false,
  asNavFor: '#js-small-slider'
});

$('#js-small-slider').slick({
  infinite: true,
  slidesToShow: 15,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: false,
  asNavFor: '#js-big-slider',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1320,
      settings: {
        slidesToShow: 10,
      }
    },
    {
      breakpoint: 1205,
      settings: {
        slidesToShow: 7
      }
    }
  ]
});

//set equal height of slides
var setEqualHeight = function(){
  var highest = 0;
  $('#js-big-slider img').each(function(){
    var thisHeight = $(this).outerHeight();
    if(thisHeight > highest) {
      highest = thisHeight;
    };
  });
  $('#js-big-slider img').height(highest);
  highest = 0;
};
setEqualHeight();
$(window).resize(setEqualHeight);

$('#slider-outer').css('opacity', '1');

//  slider prev/next buttons
$('#slider-prev').click(function(){
  $('#js-big-slider').slick('slickPrev');
  $('#js-small-slider').slick('slickPrev');
});
  
$('#slider-next').click(function(){
  $('#js-big-slider').slick('slickNext');
  $('#js-small-slider').slick('slickNext');
});

//show form after 30 sec
$('#modal-cont, #overlay').delay(30000).fadeIn();


});
