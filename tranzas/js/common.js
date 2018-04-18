$(document).ready(function(){
  // aside navigation
  $('#top-menu-btn, .aside-nav a, #close' ).click(function(){
    $('.aside-nav-container').toggleClass('active');
  });
  //decoration of current link in navigation
    $('.header-nav a, .aside-nav a').each(function(){
      var location = window.location.href;
      var link = this.href
      if(location == link) {
        $(this).addClass('active');
      }
    });
});
