$(document).ready(function(){

  // brands and services navigation tabs
  $('.tab-list>li>span').click(function(){
    var parentLi = $(this).parents('li');
    if(parentLi.hasClass('active')) {
        parentLi.removeClass('active');
        parentLi.find('.dropdown').fadeOut();
        $('#overlay').fadeOut().removeClass('transparent');
      } else {
        $('.tab-list>li.active').find('.dropdown').fadeOut();
        $('.tab-list>li.active').removeClass('active');
        parentLi.addClass('active');
        parentLi.find('.dropdown').fadeIn();
        $('#overlay').fadeIn().addClass('transparent');
      }
  });

  $('.brands-list-cont li:first-child').addClass('active');

  var showFirstTabs = function(){
    $('.brands-list-cont li.active').each(function(){
      var firstTabId = $(this).find('a').attr('href');
      $(this).parents('.dropdown').find(firstTabId).fadeIn();
    });
  };
  showFirstTabs();

  $('.brands-list-cont li').click(function(e){
    e.preventDefault();
    if(!$(this).hasClass('active')) {
      $(this).parents('.dropdown').find('.tab').fadeOut();
      $(this).parents('.dropdown').find('.brands-list-cont li.active').removeClass('active');
      $(this).addClass('active');
      var newTabId = $(this).find('a').attr('href');
      $(newTabId).fadeIn();
    };
  });

  $('.works-list-cont a, #overlay, #btn-menu').click(function(){
    $('.tab-list > li').removeClass('active');
    $('.dropdown').slideUp();
    $('#overlay').fadeOut().removeClass('transparent');
  });

  // mobile navigation
  $('.btn-menu').click(function(){
    $('#overlay').fadeIn();
    $('#overlay').css('z-index', '7');
    $('#mob-cont').addClass('active');
  });

  $('#mob-nav a, #overlay, #close').click(function(){
    $('#overlay').fadeOut();
    $('#overlay').css('z-index', '5');
    $('#mob-cont').removeClass('active');
  });

  // modal form
  $('.modal-call').click(function(){
    $('#modal-cont, #overlay').fadeIn();
    $('#overlay').css('z-index', '7');
  });

  $('#overlay, #modal-close').click(function(){
    $('#modal-cont, #overlay').fadeOut();
    $('#overlay').css('z-index', '5');
  });

  //parallax
  var parallax = function(){
    var pageScrolled = $(window).scrollTop();
    $('.quick-buttons-section>img').css({"transform":  "translate(-50%, "+ pageScrolled/3 +"px)"});
    var windowHeight = $(window).height();
    var scrolledToWindowBottom = pageScrolled + windowHeight;
    var workSectionPosition = $('.work-section').offset().top;
    var workSectionVisible = scrolledToWindowBottom - workSectionPosition;

    if (workSectionVisible > 0) {
      $('.work-section>img').css({"transform":  "translate(-50%, "+ workSectionVisible/5 +"px)"});
    };
  };
  $(window).scroll(parallax);

  //decoration of current page link in navigation
  var getCurrentLink = function(){
    $('.hidden-wrap a, .footer-bottom a, .accordion-cont a').each(function(){
      $(this).removeClass('active');
      var location = window.location.href;
      var link = this.href
      if(location == link) {
        $(this).addClass('active');
      }
    });
  };
  getCurrentLink();
  
  // masked phone input https://github.com/digitalBush/jquery.maskedinput
    $('input[type="tel"]').mask("+7 (999) 999-99-99");


  // modal windows
  // $('.callback_btn').on('click', function(){
  //   $('.overlay, .callback_modal').fadeIn(200);
  // });
  // $('.appoint_btn, .consult_btn').on('click', function(){
  //   $('.overlay, .appointment_modal').fadeIn(200);
  // });
  // $('.overlay, .modal_close').on('click', function(){
  //   $('.overlay, .callback_modal, .appointment_modal').fadeOut(200);
  // });


  if(document.documentElement.clientWidth > 767) {
    // wow.js animation  http://mynameismatthieu.com/WOW/
    // new WOW().init();
    // animated counter https://github.com/bfintal/Counter-Up
    $('.counter').counterUp({
      time: 1400
    });
  };
});
