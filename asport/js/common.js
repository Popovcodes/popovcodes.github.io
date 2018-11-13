$(document).ready(function(){

  //slick.js slider   http://kenwheeler.github.io/slick/


  $('#slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false
  });
  $('#slider-prev').click(function(){
    $('#slider').slick('slickPrev');
  });
    
  $('#slider-next').click(function(){
    $('#slider').slick('slickNext');
  });

  
  var slidesCount = $("#slider").slick("getSlick").slideCount;
  $('#total-slide').text(slidesCount);

  $("#slider").on("afterChange", function(event, slick, currentSlide){
    $('#current-slide').text(currentSlide + 1);
  });

  // select styling  https://github.com/Dimox/jQueryFormStyler
  $('select').styler();


// ползунок цены
var input = $('#input-range');
var startMax = input.attr('max');
var startVal = input.val();
var startPercent = startVal/startMax*100 + '%';
$('#value').text(startVal);
$('#float').css('left', startPercent);


input.bind('input', function(){
    getRangeValue(input);
  })
.bind('change', function(){
    getRangeValue(input); /* for IE */
});

function getRangeValue(e){
  var value = $(e).val();
  $('#value').text(value);
  $('#range').attr('data-value', value);
  input.attr('value', value);
  var maxVal = $('#input-range').attr('max');
  var percent = value/maxVal*100 + '%';
  $('#float').css('left', percent);
}



  //page scroll
  // $("a[rel='Scroll2id']").mPageScroll2id({
  //   offset: 35
  // });



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

  if(document.documentElement.clientWidth > 1023) {
    // wow.js animation  http://mynameismatthieu.com/WOW/
    //new WOW().init();


    $('#top-content').addClass('visible');
    $('#back-text').addClass('visible');


    $('.to-shadow').each(function(){
      var thisParent = $(this).parents('.shadow-cont');
      $(this).clone().appendTo(thisParent).addClass('shadow');
    });
  };
});
