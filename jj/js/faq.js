$(document).ready(function(){

//accordion
$('.faq-accord-title').click(function(){
  var parentLi = $(this).parents('li');
  if($(this).hasClass('open')) {
    parentLi.find('.answer-cont').slideUp();
    $(this).removeClass('open');
  } else {
    $('.answer-cont').slideUp();
    parentLi.find('.answer-cont').slideDown();
    $('.faq-accord-title').removeClass('open');
    $(this).addClass('open');
  };
});



});