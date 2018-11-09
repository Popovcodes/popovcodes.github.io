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
});