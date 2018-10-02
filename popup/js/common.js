$(document).ready(function(){
  $('#modal-btn').click(function(){
    $('#overlay, #popup-wrap').fadeIn();
  });

  $('#popup-close, #overlay').click(function(){
    $('#overlay, #popup-wrap').fadeOut();
  });

});
