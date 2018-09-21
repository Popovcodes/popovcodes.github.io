$(document).ready(function(){

$('#notice-close').click(function(){
  $('#cookies-notice').slideUp();
});

//compensate height of fixed footer
var footerCompensate = function(){
  var footerHeight = $('#footer').outerHeight();
  $('body').css('padding-bottom', footerHeight + 'px');
};
footerCompensate();
$(window).resize(footerCompensate);

// mobile navigation
$('#btn-menu').click(function(){
  $('#overlay').fadeIn();
  $('#mob-cont').addClass('active');
});

$('#mob-nav a, #overlay, #mob-close').click(function(){
  $('#overlay').fadeOut();
  $('#mob-cont').removeClass('active');
});

//overlay click events
$('#overlay').click(function(){
  $('#free-tooltip, #modal-cont').fadeOut();
  $(this).removeClass('transparent').fadeOut(0);
});

//decoration of current page link in navigation
$('nav a').each(function(){
  var location = window.location.href;
  var link = this.href
  if(location == link) {
    $(this).addClass('active');
  }
});



//modal form
$('.modal-call, #celebrate-block, .vac-btn').click(function(){
  $('#modal-cont, #overlay').fadeIn();
});
$('#modal-close').click(function(){
    $('#modal-cont, #overlay').fadeOut();
});


// masked phone input https://github.com/digitalBush/jquery.maskedinput
$('input[type="tel"]').mask("+7(999)999-99-99");


});
