$(document).ready(function(){

  // mobile navigation
  $('#mob-nav-btn, .mob-nav-cont a, #overlay, #mob-nav-close' ).click(function(){
    $('.mob-nav-cont').toggleClass('active');
    $('#overlay').toggleClass('hidden')
  });

  // show/hide searh input
  $('#searchBtn-trigger').click(function(){
    $('#search-form').addClass('active');
  });

  $('#search-close').click(function(){
    $('#search-form').removeClass('active');
  });

  //decoration of current link in navigation
  $('nav a').each(function(){
    var location = window.location.href;
    var link = this.href
    if(location == link) {
      $(this).addClass('active');
    }
  });

  if(document.documentElement.clientWidth > 1200) {
    // wow.js animation  http://mynameismatthieu.com/WOW/
    new WOW().init();
  };

  //sticky_menu
    // var menuHeight = $('.menu_logo_line').outerHeight(true);  
    // var Hoffset = menuHeight+'px';
    var stickyLogo = '<a href="index.html" class="sticky-logo"><img src="img/logo-static.png" alt="image"></a>'

    var stickyStyleSet = function(){
      $('.headerNav').addClass('sticky');
    }

    var stickyLogoSet = function(){
      if($('.sticky-logo').length) {
        $.noop;
      } else {
        $('.headerNav_list').before(stickyLogo);
        $('.sticky-logo').animate({opacity: '1'}, 1000);
      }
    }

    var stickyNav = function(){
      //var headerNavOffset = $('.headerNav').offset().top;
      if(document.documentElement.clientWidth > 620) {
        var documentScroll = $(this).scrollTop();
         if(documentScroll >= 50) {
          $('.headerNav').addClass('sticky');
          stickyLogoSet();
        } else {
          $('.headerNav').removeClass('sticky');
          $('.sticky-logo').remove();
        }
      } else {
        //$('.headerNav').css({'position': 'relative'});
      }
    }
    stickyNav();
    $(window).scroll(stickyNav).resize(stickyNav);




});