jQuery("document").ready(function($) {
 $(window).scroll(function(){
 if($(this).scrollTop()>108) {
    $("header").addClass('scroll');
    $("main").addClass('scroll');
   }
     else {$("header").removeClass('scroll'); 
     $("main").removeClass('scroll'); 
   }
 })
});

$('select').styler({
   selectSearch: true,
});

/*prevent select heading replacing with text of selected item*/
$('.select-invisible').styler('destroy');
$('.select-invisible').styler({
    onFormStyled: function(){
      var initText = $('.select-invisible').data('placeholder');
      $('.jq-selectbox__select-text').html(initText);
    },
    onSelectClosed: function(){
      var replaceText =  $(this).data('placeholder');
      $('.jq-selectbox__select-text').html(replaceText);
    }
});

$('.choose-country-toggle').click(function (event) {
	event.preventDefault();
	$(this).closest('.choose-country-wrap').toggleClass('active');
});

$('.feedback-toggle').click(function (event) {
	event.preventDefault();
	$(this).closest('.feedback-wrap').toggleClass('active');
});

$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
	$(this)
	.addClass('active').siblings().removeClass('active')
	.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

$('.accordeon-title').click(function (event) {
	event.preventDefault();
	$(this).toggleClass('active');
	$(this).next('.accordeon-content').slideToggle();
});

$('.account-summary .reset-btn').click(function (event) {
	event.preventDefault();
	$('.account-summary .number-r').text('0');
});

$('.show-tel').click(function (event) {
	event.preventDefault();
});

$('.see-more-btn').click(function (event) {
	event.preventDefault();
	var filterContentHeight = $(this).prev('.filter-content').height();
	if (filterContentHeight <= 110) {
		$(this).prev('.filter-content').css('max-height', '10000px');
		$(this).text("свернуть");
		$(this).addClass('active');
	} else {
		$(this).prev('.filter-content').css('max-height', '110px');
		$(this).text("показать больше");
		$(this).removeClass('active');
	}
});

var top_show = 150;
var delay = 1000; 
$(document).ready(function() {
$(window).scroll(function () { 
  if ($(this).scrollTop() > top_show) $('#top').fadeIn();
  else $('#top').fadeOut();
});
$('#top').click(function () { 
  $('body, html').animate({
    scrollTop: 0
  }, delay);
});
});

$('.price-filter-input-wrap input').keypress(function(event){
	$('.price-filter button').addClass('active');
	var key, keyChar;
	if(!event) var event = window.event;
	
	if (event.keyCode) key = event.keyCode;
	else if(event.which) key = event.which;

	if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
	keyChar=String.fromCharCode(key);
	
	if(!/\d/.test(keyChar))	return false;

});

$('.price-filter button').click(function (event) {
	$(this).removeClass('active');
});

$('.operative-information > .close').click(function (event) {
	event.preventDefault();
	$(this).closest('.operative-information').remove();
});

$('.cat-bc > .delete').click(function (event) {
	event.preventDefault();
	$(this).closest('.cat-bc').remove();
});

$('.tag .delete').click(function (event) {
	event.preventDefault();
	$(this).closest('.tag').remove();
});

$('.file > .delete').click(function (event) {
	event.preventDefault();
	$(this).closest('.file').remove();
});

$('.delivery-price-create-ads-item > .delete').click(function (event) {
	event.preventDefault();
	$(this).closest('.delivery-price-create-ads-item').remove();
});


$('.home-banner-gallery').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.geography-companies-gallery').slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.commercial-services-slider').slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

$("#contentbox").keyup(function() {
	var maxLength=$(this).attr("maxlength");
	var box=$(this).val();
	var count= maxLength - box.length;
	$('#count').html(count);
});

$('.price-form input').keypress(function(event){
	$(this).closest('.price-form').addClass('active');
	var key, keyChar;
	if(!event) var event = window.event;
	
	if (event.keyCode) key = event.keyCode;
	else if(event.which) key = event.which;

	if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
	keyChar=String.fromCharCode(key);
	
	if(!/\d/.test(keyChar))	return false;
});

$('.price-form button').click(function(event){
	$(this).closest('.price-form').removeClass('active');
	$(this).closest('.price-form').find('.convert-price').hide();
});

$('.paid-services-item label').click(function () {
	var v = $(this).closest('.paid-services-item').find('.price-num').text();
	var nv = parseInt(v);
	var c = $(this).prev('input[type="checkbox"]').prop('checked');
	var s = $('.all-price-num').text();
	var ns = parseInt(s);
	if (!c) {
		$('.all-price-num').text(ns + nv);
	} else {
		$('.all-price-num').text(ns - nv);
	}
});

$('#density').keypress(function(event){
	var key, keyChar;
	if(!event) var event = window.event;
	
	if (event.keyCode) key = event.keyCode;
	else if(event.which) key = event.which;

	if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
	keyChar=String.fromCharCode(key);
	
	if(!/\d/.test(keyChar))	return false;
});

$(document).ready(function() {
    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal-close, #overlay');
    var modal = $('.modal-div');

     open_modal.click( function(event){
         event.preventDefault();
         var div = $(this).attr('href');
         overlay.fadeIn(400, 
             function(){
                 $(div)
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '50%'}, 200);
         });
     });

	 close.click( function(){ 
            modal 
             .animate({opacity: 0, top: '45%'}, 200, 
                 function(){ 
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); 
                 }
             );
     });

   /*new scripts from apr 22 2018*/
   /*calendar*/
   $('.datetime').datetimepicker({
    timepicker:false,
    mask:'99.99.9999',format:'d.m.Y',
    dayOfWeekStart: 1
   });
   $.datetimepicker.setLocale('ru');
   $('#filter-reset').click(function(){
      $('.datetime').val('');
   });
   

   /*show filter dropdown*/
   $('.action-select, .filter-select').click(function(){
      $(this).parent('.control-block').siblings().removeClass('active').find('.control-dropdown').slideUp(0);
      $(this).parent('.control-block').toggleClass('active').find('.control-dropdown').delay(200).slideToggle(0);
   });

   $('#filter-reset, #actions-reset').click(function(){
      event.preventDefault();
      var uu = $(this).parents('.control-dropdown').find('input:checkbox').prop('checked', false);
   });

   /*check all ads*/
   $('#check-all').click(function(){
      if($(this).prop('checked')) {
        $('.check-ad-item').prop('checked', true);
      } else {
        $('.check-ad-item').prop('checked', false);
      }
   });
   var checkedStatus = function(){
      var adsTotalNum = $('.check-ad-item').length;
      var adsCheckedNum = $('.check-ad-item:checked').length;
      $('#check-all').prop('indeterminate', false);
      if (adsTotalNum == adsCheckedNum) {
        $('#check-all').prop('checked', true);
      } else if (adsCheckedNum == 0) {
        $('#check-all').prop('checked', false);
      } else {
        $('#check-all').prop('indeterminate', true);
      }
   };
   $('.check-ad-item').change(checkedStatus);

});

