$(document).ready(function(){
  // show/hide mobile nav
  $('#btn-menu').click(function(){
    $('#mob-nav-cont').addClass('active');
    $('#overlay').fadeIn();
  });
  $('#mob-nav-close, #overlay, #mob-nav a, #mob-fav-btn').click(function(){
    $('#mob-nav-cont').removeClass('active');
    $('#overlay').fadeOut();
  });

  //  show/hide modal form
  $('#order-call').click(function(){
    $('#overlay, #modal-form-container').fadeIn();
  });
  $('#overlay, #modal-close').click(function(){
    $('#overlay, #modal-form-container').fadeOut();
  });

  //show/hide favourites
  $('#fav-btn').click(function(){
    $('#overlay-transparent').toggleClass('hidden');
    $(this).toggleClass('active');
    $('#fav-container').slideToggle();
  });
  $('#overlay-transparent').click(function(){
    $(this).toggleClass('hidden');
    $('#fav-btn').toggleClass('active');
    $('#fav-container').slideToggle();
  });

  // price bit delimiter
  $('.price').each(function(){
    var str = $(this).text();
    $(this).html(str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
  });

  //decoration of current link in navigation
  $('nav a').each(function(){
    var location = window.location.href;
    var link = this.href
    if(location == link) {
      $(this).addClass('active');
    }
  });

});
