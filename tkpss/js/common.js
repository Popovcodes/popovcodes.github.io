$(document).ready(function(){

// modal form and mobile navigation call
$('.modal-call').click(function(){
  $('#overlay, #modal-cont').fadeIn();
  $('#btn-menu').addClass('reduced').removeClass('active');
});
$('#btn-menu').click(function(){
  $('#mob-cont').toggleClass('active');
  $('#overlay').fadeToggle();
  $(this).toggleClass('active');
});
$('.mob-modal-call').click(function(){
  $('#mob-cont, #btn-menu').removeClass('active');
  $('#btn-menu').addClass('reduced');
  $('#modal-cont').fadeIn();
});
$('#overlay, #modal-close, #mob-cont a').click(function(){
  $('#overlay, #modal-cont').fadeOut();
  $('#mob-cont, #btn-menu').removeClass('active');
  $('#btn-menu').removeClass('reduced');
});

//slick.js slider   http://kenwheeler.github.io/slick/

$('.rec-slide').each(function(){
  var numThis = $(this).index() + 1;
  $(this).find('.num-this').text(numThis);
});

$('#rec-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true,
  appendDots: $('#dots-wr'),
  responsive: [
    {
      breakpoint: 1299,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
$('#rec-prev').click(function(){
    $('#rec-slider').slick('slickPrev');
});
$('#rec-next').click(function(){
    $('#rec-slider').slick('slickNext');
});

var slidesTotal = $("#rec-slider").slick("getSlick").slideCount;
$('#rec-slider .num-total').text(slidesTotal);


/**/



$('#main-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true,
  appendDots:$('.slide-dots-wr')
});
$('#main-slider-prev').click(function(){
    $('#main-slider').slick('slickPrev');
});
$('#main-slider-next').click(function(){
    $('#main-slider').slick('slickNext');
});
$('#main-slider').css('opacity', '1');

$('#sert-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1299,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
$('#sert-slider-prev').click(function(){
    $('#sert-slider').slick('slickPrev');
});
$('#sert-slider-next').click(function(){
    $('#sert-slider').slick('slickNext');
});

// fancybox http://fancyapps.com/fancybox/3/
$('.fancy').fancybox();


// input animation on focus
if($('.input-wr').length > 0) {
  $(".input-wr input, .modal-cont input, textarea").focusout(function(){
    if($(this).val() != ""){
      $(this).addClass("non-empty");
    }else{
      $(this).removeClass("non-empty");
    };
  });
  $('input[type="tel"]').focusout(function(){
    if($(this).val().indexOf('_') != -1) {
      $(this).removeClass("non-empty");
    };
  });
};

// https://github.com/digitalBush/jquery.maskedinput
$('input[type="tel"]').mask("+7 (999) 999-99-99");

// display attached file name
// var labelText = $('#attach-label').text();
var attachFile = function(){
  $('input[type=file]').change(function(e){ 
    $(this).siblings('label').html('Прикреплен файл: ' + e.target.files[0].name); 
    $(this).siblings('label').addClass("isattached");
    $(this).siblings('.unattach-btn').removeClass('hidden');
  });
};
attachFile();

// remove attached file
$('.unattach-btn').each(function(){
  var labelPrimordialText = $(this).siblings('label').text();
  $(this).after('<span class="hidden temporary">'+ labelPrimordialText +'</span>');
});
var unattachFile = function(){
  var currId = $(this).siblings('input[type=file]').attr('id');
  var labelText = $(this).siblings('.hidden.temporary').text();
  $(this).siblings('input[type=file], label').remove();
  $(this).parents('.attach-row').prepend('<input type="file" id="'+currId+'"><label for="'+ currId +'" class="attach-label">'+ labelText +'</label>');
  $(this).addClass('hidden');
  attachFile();
};
$('.unattach-btn').click(unattachFile);

// catalog pagination https://github.com/luis-almeida/jPages
if($('div').is('#pagination')){
  $("#pagination").jPages({
    containerID : "articles-list",
    perPage: 5,
  });
};

//decoration of current page link in navigation
var getCurrentLink = function(){
  $('nav a').each(function(){
    var location = window.location.href;
    var link = this.href
    if(location == link) {
      $(this).addClass('active');
    }
  });
};
getCurrentLink();

// табы https://github.com/jellekralt/Responsive-Tabs
$('#tabs-container').responsiveTabs({
  startCollapsed: 'tabs',
  rotate: false
});

//вакансии - открытие
if($('.vacancy-item').length > 0 ) {
  $('.vac-title').click(function(){
    $(this).parents('.vacancy-item').toggleClass('shown');
    $(this).parents('.vacancy-item').find('.vac-content').slideToggle();
  });
};


$('.header-nav-links li li, .mob-nav li').each(function(){
  var hasSubmenu = $(this).find('ul').length;
  if(hasSubmenu > 0) {
    $(this).addClass('hasSubmenu');
  };
});

$('.mob-nav .hasSubmenu').click(function(e){
  e.stopPropagation();
  $(this).children('ul').slideToggle().toggleClass('shown');
  if($(this).children('ul').hasClass('shown')){
    $(this).addClass('arrRotated');
  } else {
    $(this).removeClass('arrRotated');
  };
});





});
