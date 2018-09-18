$(document).ready(function(){

//parallax
var parallax = function(){
  var pageIsScrolled = $(window).scrollTop();
  var windowHeight = $(window).height();
  var scrolledToWindowBottom = pageIsScrolled + windowHeight;
  $('#main-bg-img').css({"transform":  "translate(0%, "+ pageIsScrolled/2+"px)"});
  var togetherSectionVisible = scrolledToWindowBottom - $('.together-section').offset().top;
  if (togetherSectionVisible > 0) {
    $('#together-bg-img').css({"transform": "translate(0%, "+ togetherSectionVisible/2+"px)"});
  };
  var subscrSectionVisible = scrolledToWindowBottom - $('.subscr-section').offset().top;
  if (subscrSectionVisible > 0 ) {
    $('#subscr-bg-img').css({"transform": "translate(0%, "+ subscrSectionVisible/2+"px)"});
  }

  var addressSectionVisible = scrolledToWindowBottom - $('.address-section').offset().top;
  if (addressSectionVisible > 0 ) {
    $('#address-bg-img').css({"transform": "translate(-50%, "+ addressSectionVisible/2+"px)"});
  }


  var abonementImgVisible = scrolledToWindowBottom - $('#abonement-img').offset().top;
  if (abonementImgVisible > 300) {
    $('#abonement-img').addClass('non-rotated');
  }
};
$(window).scroll(parallax);

//accordion
$('.accord-item-title').click(function(){
  var parentLi = $(this).parents('li');
  if($(this).hasClass('open')) {
    parentLi.find('.accord-text').slideUp();
    $(this).removeClass('open');
  } else {
    $('.accord-text').slideUp();
    parentLi.find('.accord-text').slideDown();
    $(this).addClass('open');
  }
});

// price tables
var priceTables = function(){
  var mainHeight = $('#main-table').outerHeight()+$('#price-form-cont').outerHeight();
  $('#table-viewport').css('height', mainHeight);

  $('#main-prices').on('mouseenter click', function(){
    $(this).addClass('active');
    $('#addict-prices').removeClass('active');
    $('#tables-cont').css({"transform":  "translate(0%, "+ 0+"px)"});
  });
  $('#addict-prices').on('mouseenter click', function(){
    $(this).addClass('active');
    $('#main-prices').removeClass('active');
    $('#tables-cont').css({"transform":  "translate(0%, "+ -mainHeight+"px)"});
  });
};

priceTables();
$(window).resize(priceTables);

//free tarif tooltip
$('#free-tooltip-btn').click(function(){
  $('#free-tooltip').fadeToggle(400);
  $('#overlay').addClass('transparent').fadeIn();
});


//overlay click events
$('#overlay').click(function(){
  $('#free-tooltip').fadeOut();
  $(this).fadeOut();
});




// fancybox http://fancyapps.com/fancybox/3/
$('[data-fancybox="gallery"], [data-fancybox="scheme-gallery"]').fancybox({
  loop: true,
  toolbar: true,
  idleTime: 1000,
  hideScrollbar: false
});

// masked phone input https://github.com/digitalBush/jquery.maskedinput
$('input[type="tel"]').mask("+7(999)999-99-99");



/*
//parallax
var parallax = function(){
var pageScrolled = $(window).scrollTop();
var windowHeight = $(window).height();
var scrolledToWindowBottom = pageScrolled + windowHeight;
var giftsSectionPosition = $('.gifts-section').offset().top;
var giftsSectionVisible = scrolledToWindowBottom - giftsSectionPosition;
var insuranceSectionPosition = $('.insurance-section').offset().top;
var insuranceSectionVisible = scrolledToWindowBottom - insuranceSectionPosition;

if (giftsSectionVisible > 0) {
  $('.present-box-1').css({"transform":  "translate(0%, "+ -giftsSectionVisible/1 +"px)"});
  $('.present-box-2').css({"transform":  "translate(0%, "+ -giftsSectionVisible/5+"px)"});
  $('.present-box-3').css({"transform":  "translate(0%, "+ -giftsSectionVisible/21+"px)"});
} else {};

if (insuranceSectionVisible > 0) {
  $('.coin-1').css({"transform":  "translate(0%, "+ -insuranceSectionVisible/1 +"px)"});
  $('.coin-2').css({"transform":  "translate(0%, "+ -insuranceSectionVisible/3+"px)"});
  $('.coin-3').css({"transform":  "translate(0%, "+ -insuranceSectionVisible/21+"px)"});
} else {};

};
$(window).scroll(parallax);
};

*/


});
