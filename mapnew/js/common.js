$(window).ready(function(){

$('.region-list a').hover(function(){
  var thisData = $(this).data('region');
  $('#' + thisData).addClass('active')
});
$('.region-list a').mouseleave(function(){
  var thisData = $(this).data('region');
  $('#' + thisData).removeClass('active');
});

$('path').hover(function(){
  var thisName = $(this).attr('id');
  console.log(thisName);
  $('.region-list a[data-region="'+thisName+'"]').addClass('active');
});
$('path').mouseleave(function(){
  var thisName = $(this).attr('id');
  console.log(thisName);
  $('.region-list a[data-region="'+thisName+'"]').removeClass('active');
});


});

