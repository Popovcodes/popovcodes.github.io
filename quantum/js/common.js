$(document).ready(function(){

  // mobile navigation
  $('#mob-nav-btn, .mob-nav-cont a, #overlay, #mob-nav-close' ).click(function(){
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

  //decoration of current link in navigation
  $('nav a').each(function(){
    var location = window.location.href;
    var link = this.href
    if(location == link) {
      $(this).addClass('active');
    }
  });

  if(document.documentElement.clientWidth > 1200) {
    // wow.js animation  http://mynameismatthieu.com/WOW/
    new WOW().init();
  };
});