$(document).ready(function(){

  //slick.js slider   http://kenwheeler.github.io/slick/
  // each slider has been initialized separatly because of param "appendDots:$('elem')" does not work if it is identified by place in DOM structure
  $('#slider-1').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
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
  /*var setEqualHeight = function() {
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
*/

  // all sliders prev/next buttons
  $('.left-arr').click(function(){
   $(this).parents('.slider-cont').find('.slider').slick('slickPrev');
  });

  $('.right-arr').click(function(){
   $(this).parents('.slider-cont').find('.slider').slick('slickNext');
  });


  // specialists names first letters of each word styling
  $('.person-name').each(function(){
    var thisName = $(this);
    var words = thisName.text().split(' ');
    var newHtml = '';
    for (var i = 0; i<words.length; i++) {
      newHtml += '<span>' + words[i].substring(0, 1) + '</span>' + words[i].substring(1) + ' ';
    }
    thisName.html(newHtml);
  });

});
