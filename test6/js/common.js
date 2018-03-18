$(document).ready(function(){

  //sidebar navigation show/hide
   $('.mobile-menu-btn, .mobile-nav a, .overlay, .close' ).click(function(){
     $('.mobile-nav-container').toggleClass('active');
     $('.overlay').toggleClass('hidden')
       });

  //mobile menu accordion
  $('.accordion').hide();
  $('.extended-link').click(function(){
    if($(this).siblings('.accordion').is(':hidden')) {
      $(this).siblings('.accordion').slideDown();
      $(this).next().css('transform' , 'rotate(0deg)');

    } else {
      $(this).siblings('.accordion').slideUp();
      $(this).next().css('transform' , 'rotate(-90deg)');
    }
  })

  //parallax and js-animation
  var parallax = function() {
    var pageScrolled = $(window).scrollTop();
    var windowHeight = $(window).height();
    var scrolledToWindowBottom = pageScrolled + windowHeight;
  }

    $(window).scroll(parallax);
});
