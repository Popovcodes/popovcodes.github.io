$(document).ready(function(){

	$('nav ul').slideUp();
  $('nav h4').click(function(){
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });
});
