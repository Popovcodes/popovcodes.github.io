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
  $('.modal-call, .specify').click(function(){
    $('#modal-cont, #overlay').fadeIn();
    $('#overlay').css('z-index', '7');
  });

  $('#overlay, #modal-close').click(function(){
    $('#modal-cont, #overlay').fadeOut();
    $('#overlay').css('z-index', '5');
  });

  //decoration of current link in navigation
  $('nav a').each(function(){
    var location = window.location.href;
    var link = this.href;
    if(location == link) {
      $(this).addClass('active');
    }
  });
  
  // masked phone input https://github.com/digitalBush/jquery.maskedinput
    $('input[type="tel"]').mask("+7 (999) 999-99-99");
  
});
