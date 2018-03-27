$(document).ready(function(){

  // mobile navigation
  $('#mob-nav-btn, .mob-nav-cont a, .overlay, #mob-nav-close' ).click(function(){
    $('.mob-nav-cont').toggleClass('active');
    $('.overlay').toggleClass('hidden')
  });

  //https://bxslider.com/options/
  var aboutSlider = $('#js-aboutSlider').bxSlider({
    speed: 3000,
    autoHover: true,
    pager: false,
    auto: false,
    controls: false
  });

  $('#aboutSlider_prev').click(function(){
    aboutSlider.goToPrevSlide();
  })

  $('#aboutSlider_next').click(function(){
    aboutSlider.goToNextSlide();
  })

  // show/hide searh input
  $('#searchBtn-trigger').click(function(){
    $('#search-form').addClass('active');
  });

  $('#search-close').click(function(){
    $('#search-form').removeClass('active');
  });

  //parallax
  // var parallax = function() {
  //   var pageScrolled = $(window).scrollTop();
  //   var windowHeight = $(window).height();
  //   var scrolledToWindowBottom = pageScrolled + windowHeight;

  //   var aboutSectionPosition = $('#about-section').offset().top;
  //   var aboutSectionVisible = scrolledToWindowBottom - aboutSectionPosition;

  //   var contactsSectionPosition = $('#contacts-section').offset().top;
  //   var contactsSectionVisible = scrolledToWindowBottom - contactsSectionPosition;

  //   if (aboutSectionVisible > 0) {
  //     $('.about-glare-l-1, .about-glare-r-1').css({"transform":  "translate(0%, "+ -aboutSectionVisible/3+"px)"});
  //     $('.about-glare-l-2, .about-glare-r-2').css({"transform":  "translate(0%, "+ -aboutSectionVisible/2.5+"px)"});
  //   } else {};

  //   if (contactsSectionVisible > 0) {
  //     $('.contacts-glare-t-1, .contacts-glare-b-1').css({"transform": "translate(0%, "+ -contactsSectionVisible/4 + "px)"});
  //     $('.contacts-glare-t-2, .contacts-glare-b-2').css({"transform": "translate(0%, "+ -contactsSectionVisible/2.5 + "px)"});
  //   } else {};
  // }

  $(window).scroll(parallax);


  if(document.documentElement.clientWidth > 1200) {
    // wow.js animation  http://mynameismatthieu.com/WOW/
    new WOW().init();
  };
});
