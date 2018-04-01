$(document).ready(function(){

  //modal form
  $('#contact-message-btn').click(function(){
    $('#modal-overlay, #modal-form-container').fadeIn(200);
  });

  $('#modal-overlay, #modal-close').click(function(){
    $('#modal-overlay, #modal-form-container').fadeOut(200);
  });

});
