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

  //modal form
  $('#contact-message-btn').click(function(){
    $('#modal-overlay, #modal-form-container').fadeIn(200);
  });

  $('#modal-overlay, #modal-close').click(function(){
    $('#modal-overlay, #modal-form-container').fadeOut(200);
  });


  if(document.documentElement.clientWidth > 1200) {
    // wow.js animation  http://mynameismatthieu.com/WOW/
    new WOW().init();
  };
});
