$(document).ready(function(){

  // mobile navigation
  $('#mob-menu-btn').click(function(){
    $('#mobile-nav-container').css('right', '0px');
    $('#overlay').fadeIn(400);
  });
  $('#mob-close, .mob-nav a, #overlay').click(function(){
    $('#mobile-nav-container').css('right', '-320px');
    $('#overlay').fadeOut(400);
  });

  // modal windows
  $('#header-call-btn, #call-btn').on('click', function(){
    $('#overlay, #contact-form-container').fadeIn();
  });
  $('#overlay, #form-close').on('click', function(){
    $('#overlay, #contact-form-container').fadeOut();
  });

/*accordion */
  $('.extended h4').click(function(){
    $('.extended').find('ul').slideUp();
    if(!$(this).parents('.extended').hasClass('active')){
      $(this).parents('.extended').find('ul').slideDown();
      $('.extended').removeClass('active');
    }
    $(this).parents('.extended').toggleClass('active');
  });

  $('.extended li a').click(function(){
    $('.extended li a').removeClass('active');
    $('.categories-accordion>li').removeClass('active');
    $(this).parents('.extended').addClass('active');
    $(this).addClass('active');
    if(document.documentElement.clientWidth < 1200) {
      $(this).parents('.extended ul').slideUp();
      $('.categories-accordion>li').removeClass('active');
    };
  });

  $('.categories-accordion>li').not('.extended').click(function(){
    $('.extended li a').removeClass('active');
    $('.categories-accordion>li').removeClass('active');
    $(this).addClass('active');
  });


  // quantity and sum change for single sale pruducts
  $('.single-unit-item').each(function(){
    var defaultQuant = parseInt($(this).find('input[type="number"]').val());
    var price = parseInt($(this).find('.unit-price').html());
    var setSum = defaultQuant*price;
    $(this).find('.cost-sum').html(setSum);
  });

  $('.single-unit-item input[type="number"]').change(function(){
    var newQuant = parseInt($(this).val());
    var price = parseInt($(this).parents('.count-container').find('.unit-price').html());
    var costSum = newQuant*price;
    $(this).parents('.product-action').find('.cost-sum').html(costSum);
  });

  $('.minus').click(function(){
    var numInput = $(this).parents('.count-container').find('input[type="number"]');
    var currentQuant = parseInt(numInput.val());
    if(currentQuant> 1) {
      numInput.val(currentQuant - 1).change();
    } else {
      $.noop;
    }
  });

  $('.plus').click(function(){
    var numInput = $(this).parents('.count-container').find('input[type="number"]');
    var currentQuant = parseInt(numInput.val());
      numInput.val(currentQuant + 1).change();
  });

  // masked input
  $('input[type="tel"]').mask("8(999)999-99-99");

  //decoration of current link in navigation
  $('nav a').each(function(){
    var location = window.location.href;
    var link = this.href
    if(location == link) {
      $(this).addClass('active');
    }
  });
});
