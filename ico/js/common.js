$(document).ready(function(){

  // mobile navigation
  $('#btn-menu, #mob-nav a, #overlay, #close' ).click(function(){
    $('.mob-cont').toggleClass('active');
    $('#overlay').toggleClass('active');
    $('section, #header, #footer').toggleClass('blur');

  });

  //header fixing
  $(window).scroll(function(){
    if(document.documentElement.clientWidth > 679) {
      var pageIsScrolled = $(window).scrollTop();
      if(pageIsScrolled > 0) {
        $('#header').addClass('sticky');
      } else {
        $('#header').removeClass('sticky');
      }
    };
  });

  //decoration of current page link in navigation
  $('nav a').each(function(){
    var location = window.location.href;
    var link = this.href
    if(location == link) {
      $(this).addClass('active');
    }
  });

  if(document.documentElement.clientWidth > 1199) {
    // wow.js animation  http://mynameismatthieu.com/WOW/
    new WOW().init();
  };
});
