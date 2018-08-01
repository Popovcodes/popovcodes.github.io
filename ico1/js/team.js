$(document).ready(function(){

  // select styling  https://github.com/Dimox/jQueryFormStyler
  $('#select').styler();

  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#slider-1').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    appendDots:$('.team-dots-cont'),
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

  // sliders prev/next buttons
  $('#left-arr').click(function(){
    $('#slider-1').slick('slickPrev');
  });

  $('#right-arr').click(function(){
    $('#slider-1').slick('slickNext');
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
