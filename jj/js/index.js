$(document).ready(function(){

//page scroll
$('nav a').click(function(){
  //var el = $(this).attr('href');
  var anchor = $(this).attr('href').split('#').pop();
  var dest = $('#'+anchor).offset().top;
  $('html, body').animate({'scrollTop': dest}, 1000);
  return false;
});
$(window).scroll(function(){
  $('[id ^= nav-').each(function(){
    var id = $(this).attr('id');
    if($(this).offset().top - 200 < $(window).scrollTop()){
      $('nav a').removeClass('active');
      $('a[href$="#'+id+'"]').addClass('active');
    }
    if($(window).scrollTop() < 500) {
      $('nav a').removeClass('active');
    }
  });
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

    var redLineVisible = scrolledToWindowBottom - $('#red-line').offset().top;
    if (redLineVisible > 0 ) {
      $('#red-line').css({"transform": "rotate(-7deg) translate(0%, "+ -redLineVisible/1.8+"px)"});
    };

    var blueLineVisible = scrolledToWindowBottom - $('#blue-line').offset().top;
    if (blueLineVisible > 0 ) {
      $('#blue-line').css({"transform": "rotate(8deg) translate(0%, "+ -blueLineVisible/4+"px)"});
    };

    // flying objects
    $('[id ^= fig-').each(function(){
      var thisPosition = $(this).offset().top;
      var coefX = $(this).attr('data-coefX');
      var coefY = $(this).attr('data-coefY');
      var thisVisible = scrolledToWindowBottom - thisPosition;
      var rotate = 360/thisVisible*80/coefX;
      if(thisVisible > 0) {
        $(this).find('img').css({"left": thisVisible/coefX, "bottom": thisVisible/coefY, "transform": "rotate("+ rotate*2.5 +"deg)", "filter": "hue-rotate("+ rotate*3 +"deg)"})
      };
    });

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
  }
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

//free tarif tooltip
$('#free-tooltip-btn').click(function(){
  $('#free-tooltip').fadeToggle(400);
  $('#overlay').addClass('transparent').fadeIn();
});

var clickOnPriceTable = 0;
$('.price-table').click(function(){
  clickOnPriceTable = clickOnPriceTable + 1;
  if (clickOnPriceTable > 1) {
    $('#modal-cont, #overlay').fadeIn();
    $('#overlay').removeClass('transparent');
    $('#free-tooltip').fadeOut(0);
    clickOnPriceTable = 0;
  }
});

// fancybox http://fancyapps.com/fancybox/3/
$('[data-fancybox="gallery"], [data-fancybox="scheme-gallery"]').fancybox({
  loop: true,
  toolbar: true,
  idleTime: 1000,
  hideScrollbar: false
});

});
