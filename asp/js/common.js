$(window).ready(function(){

/* аккордеон */
  $('.accordion>li').click(function(){
    if($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).children('ul').slideUp();
    } else {
        $('.accordion>li').removeClass('active');
        $(this).addClass('active');
        $('.accordion>li>ul').slideUp();
        $(this).children('ul').slideDown();
    }
  });
  // не сворачивать при клике на подпункт
   $('.accordion>li ul').click(function(event){
       event.stopPropagation();
   });

  // всплывающее окно с формой
  $('#buy-btn').click(function(){
    $('#modal-cont, #overlay').fadeIn();
  });

  $('#overlay, #modal-close').click(function(){
    $('#modal-cont, #overlay').fadeOut();
  });
});