$(document).ready(function(){


var ua = detect.parse(navigator.userAgent);
var bf = ua.browser.family;
var browserGroup = 0;
if (bf=='Chrome' || bf=='Firefox'|| bf=='Opera' || bf=='Edge') {
  browserGroup = 1;
} else {
  browserGroup = 0;
};
alert('your browser is ='+bf+'=, your browser group is '+browserGroup);

//page scroll
$('nav a').click(function(){
  var anchor = $(this).attr('href').split('#').pop();
  var dest = $('#'+anchor).offset().top;
  $('html, body').animate({'scrollTop': dest}, 1000);
  return false;
});
$(window).scroll(function(){
  $('.nav-anchor').each(function(){
    var id = $(this).attr('id');
    console.log(id);
    if($(this).offset().top - 200 < $(window).scrollTop()){
      $('nav a').removeClass('active');
      $('a[href="#'+id+'"]').addClass('active');
    }
    if($(window).scrollTop() < 500) {
      $('nav a').removeClass('active');
    }
  });
});

//scroll on anchors buttons click
$('.scroll-i').click(function(e){
    e.preventDefault();
    var anchorId = $(this).attr('href');
    var anchorDest = $('#'+anchorId).offset().top - 65;
    $('html, body').animate({'scrollTop': anchorDest}, 1000);
    return false;
});

//parallax
var parallax = function(){
  if(document.body.clientWidth > 1199 ) {
    var pageIsScrolled = $(window).scrollTop();
    var windowHeight = $(window).height();
    var scrolledToWindowBottom = pageIsScrolled + windowHeight;
    $('#main-bg-img').css({"transform":  "translate(0%, "+ pageIsScrolled/2+"px)"});
    var togetherSectionVisible = scrolledToWindowBottom - $('.together-section').offset().top;
    if (togetherSectionVisible > 0) {
      $('#together-bg-img').css({"transform": "translate(0%, "+ togetherSectionVisible/3+"px)"});
    };
    var subscrSectionVisible = scrolledToWindowBottom - $('.subscr-section').offset().top;
    if (subscrSectionVisible > 0 ) {
      $('#subscr-bg-img').css({"transform": "translate(0%, "+ subscrSectionVisible/5+"px)"});
    }

    var addressSectionVisible = scrolledToWindowBottom - $('.address-section').offset().top;
    if (addressSectionVisible > 0 ) {
      $('#address-bg-img').css({"transform": "translate(-50%, "+ addressSectionVisible/3+"px)"});
    }

    var abonementImgVisible = scrolledToWindowBottom - $('#abonement-img').offset().top;
    if (abonementImgVisible > 300) {
      $('#abonement-img').addClass('non-rotated');
    }

    // flying objects
    $('.figure').each(function(){
      var thisPosition = $(this).offset().top;
      var coefX = $(this).attr('data-coefX');
      var coefY = $(this).attr('data-coefY');
      var thisVisible = scrolledToWindowBottom - thisPosition;
      if(thisVisible > 0) {

        if(browserGroup == 0) {
          $(this).find('img').css({"left": thisVisible/coefX, "bottom": thisVisible/coefY});
        } else if(browserGroup == 1) {

          var rotate = 360/thisVisible*80/coefX;
          $(this).find('img').css({"left": thisVisible/coefX, "bottom": thisVisible/coefY, "transform": "rotate("+ rotate*2.5 +"deg)"});
          
          $('.eq-img-cont').each(function(){
            var eqItemPosition = $(this).offset().top;
            var eqItemVisible = scrolledToWindowBottom - eqItemPosition;
            if(eqItemVisible > 0) {
              $(this).parents('li').css({"transform":  "translate(0%, "+ -eqItemVisible/18+"%)"});
            };
          });

          $('.feat-img-cont').each(function(){
            var featItemPosition = $(this).offset().top;
            var featItemVisible = scrolledToWindowBottom - featItemPosition;
            if(featItemVisible > 0) {
              $(this).parents('li').css({"transform": "translate(0%, "+ -featItemVisible/30+"%)"});
            };
          });

          var redLineVisible = scrolledToWindowBottom - $('#red-line').offset().top;
          if (redLineVisible > 0 ) {
            $('#red-line').css({"transform": "rotate(-7deg) translate(0%, "+ -redLineVisible/1.8+"px)"});
          };

          var blueLineVisible = scrolledToWindowBottom - $('#blue-line').offset().top;
          if (blueLineVisible > 0 ) {
            $('#blue-line').css({"transform": "rotate(8deg) translate(0%, "+ -blueLineVisible/4+"px)"});
          };

          $('.abonement-img').css('transition', 'transform 1.2s cubic-bezier(0.53, 1.83, 0.36, 0.93)');
          $('#blue-line').css({'transition': 'transform 4s cubic-bezier(0.21, 1.83, 0.63, 0.74)', 'box-shadow': '10px 10px 3px rgba(0, 0, 0, 0.2)'});
          $('#red-line').css({'transition': 'transform 2s cubic-bezier(0.21, 1.83, 0.63, 0.74)', 'box-shadow': '10px 10px 3px rgba(0, 0, 0, 0.2)'});
          $('.equip-list li, .features-list li').css('transition', 'transform 1s cubic-bezier(0.53, 1.9, 0.35, 0.89)');
          $('.figure img').css('transition', 'left 2s cubic-bezier(0.53, 1.9, 0.35, 0.89), bottom 2s cubic-bezier(0.53, 1.9, 0.35, 0.89)');

        };
      };
    });
  };
};

parallax();
$(window).scroll(parallax).resize(parallax);

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
  var mainTableHeight = $('#main-table').outerHeight();
  var addTableHeight = $('#add-table').outerHeight();

  var setHeight;
  if (mainTableHeight >= addTableHeight) {
    setHeight = mainTableHeight;
  } else {
    setHeight = addTableHeight;
  }
  $('#table-viewport, .price-table-cont').css('height', setHeight);
  $('#main-prices').on('mouseenter click', function(){
    $(this).addClass('active');
    $('#addict-prices').removeClass('active');
    $('#tables-cont').css({"transform":  "translate(0%, "+ 0+"px)"});
  });
  $('#addict-prices').on('mouseenter click', function(){
    $(this).addClass('active');
    $('#main-prices').removeClass('active');
    $('#tables-cont').css({"transform":  "translate(0%, "+ -setHeight+"px)"});
  });
};
priceTables();
$(window).resize(priceTables);

//free tarif tooltip and form call after 2 click on table
var clickOnPriceTable = 0;
$('.price-table').click(function(){
  clickOnPriceTable = clickOnPriceTable + 1;
  if (clickOnPriceTable > 1) {
    $('#modal-cont, #overlay').fadeIn(0);
    $('#overlay').removeClass('transparent');
    $('#free-tooltip').fadeOut(0);
    clickOnPriceTable = 0;
  };
});

$('#free-tooltip-btn').click(function(e){
  e.stopPropagation();
  $('#free-tooltip').fadeToggle(400);
  $('#overlay').addClass('transparent').fadeIn();
});

//form call after 2 click on table
var clickOnGalleryLink = 0;
$('.eq-img-cont').click(function(){
    clickOnGalleryLink = clickOnGalleryLink + 1;
    if (clickOnGalleryLink > 1) {
        $('#modal-cont, #overlay').delay(2000).fadeIn(0);
        $('#overlay').removeClass('transparent');
        clickOnGalleryLink = 0;
    };
});

// fancybox http://fancyapps.com/fancybox/3/
$('[data-fancybox="gallery"], [data-fancybox="scheme-gallery"]').fancybox({
  loop: true,
  toolbar: true,
  idleTime: 1000,
  hideScrollbar: false
});

});
