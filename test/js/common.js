$(document).ready(function(){

	$('nav ul').hide();
  $('nav h4').click(function(){
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });
});
