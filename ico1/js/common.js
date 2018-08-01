$(document).ready(function(){

  // mobile navigation and modal form showing
  $('.btn-menu').click(function(){
    $('#overlay').removeClass('hidden');
    $('#mob-cont').addClass('active');
    $('section, #header, #footer').addClass('blur');
  });

  $('.modal-call').click(function(){
    $('#modal-cont, #overlay').removeClass('hidden');
  });

  $('#mob-nav a, #overlay, #close, #modal-close').click(function(){
    $('#modal-cont, #overlay').addClass('hidden');
    $('#mob-cont').removeClass('active');
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

  // masked phone input https://github.com/digitalBush/jquery.maskedinput
  $('input[type="tel"]').mask("+7 (999) 999-99-99");
  

  if(document.documentElement.clientWidth > 1199) {
    // wow.js animation  http://mynameismatthieu.com/WOW/
    new WOW().init();
  };
});
