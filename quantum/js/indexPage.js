$(document).ready(function(){

  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#js-worksSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false
  });

  $('#worksSlider_prev').click(function(){
    $('#js-worksSlider').slick('slickPrev');
  });

  $('#worksSlider_next').click(function(){
    $('#js-worksSlider').slick('slickNext');
  });
  
  // show/hide searh input
  $('#searchBtn-trigger').click(function(){
    $('#search-form').addClass('active');
  });

  $('#search-close').click(function(){
    $('#search-form').removeClass('active');
  });

  //parallax
  var parallax = function() {
    var pageScrolled = $(window).scrollTop();
    var windowHeight = $(window).height();
    var scrolledToWindowBottom = pageScrolled + windowHeight;

    var aboutSectionPosition = $('#about-section').offset().top;
    var aboutSectionVisible = scrolledToWindowBottom - aboutSectionPosition;

    var contactsSectionPosition = $('#contacts-section').offset().top;
    var contactsSectionVisible = scrolledToWindowBottom - contactsSectionPosition;

    if (aboutSectionVisible > 0) {
      $('.about-glare-l-1, .about-glare-r-1').css({"transform":  "translate(0%, "+ -aboutSectionVisible/3+"px)"});
      $('.about-glare-l-2, .about-glare-r-2').css({"transform":  "translate(0%, "+ -aboutSectionVisible/2.5+"px)"});
    } else {};

    if (contactsSectionVisible > 0) {
      $('.contacts-glare-t-1, .contacts-glare-b-1').css({"transform": "translate(0%, "+ -contactsSectionVisible/4 + "px)"});
      $('.contacts-glare-t-2, .contacts-glare-b-2').css({"transform": "translate(0%, "+ -contactsSectionVisible/2.5 + "px)"});
    } else {};
  }
  $(window).scroll(parallax);

});
