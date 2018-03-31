$(document).ready(function(){

  // mobile navigation
  $('#mob-nav-btn, #overlay, #mob-nav-close, .mob-nav-cont a' ).click(function(){
    $('.mob-nav-cont').toggleClass('active');
    $('#overlay').toggleClass('hidden')
  });

  // show/hide searh input
  $('#searchBtn-trigger').click(function(){
    $('#search-form').addClass('active');
  });

  $('#search-close').click(function(){
    $('#search-form').removeClass('active');
  });


  if(document.documentElement.clientWidth > 1200) {
    // wow.js animation  http://mynameismatthieu.com/WOW/
    new WOW().init();
  };
});
