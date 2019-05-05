$(document).ready(function(){
	var docLocation = window.location.href;
	var myLocation;
	// if(window.location.href.indexOf('utm_source=yandex') > -1 || window.location.href.indexOf('utm_source=google') > -1 || window.location.href.indexOf('utm_source=facebook') > -1 || window.location.href.indexOf('utm_source=vk.com') > -1) {
  if(window.location.href.indexOf('300') > -1 || window.location.href.indexOf('utm_source=google') > -1 || window.location.href.indexOf('utm_source=facebook') > -1 || window.location.href.indexOf('utm_source=vk.com') > -1) {
		myLocation = 1;
	} else {
		myLocation = 0;
	};

var promDiscount = function(){
  $('#prom-overlay').fadeIn(800);
  $('#prom-wrap, .p-1, .p-2, .p-3, .p-4, #prom-btn').addClass('shown');
  setTimeout(function(){
    $('#prom-wrap .prom-e').removeClass('start');
    $('#prom-close').addClass('shown');
  }, 2000);
  
};/*showDiscount*/



$('#prom-close').click(function(){
  $('#prom-overlay, #prom-wrap').fadeOut();
});


$('#prom-btn').click(function(){
  $('#prom-wrap, #prom-close').fadeOut();
  setTimeout(function(){

    $('#prom-popup').addClass('shown');
  }, 400);
});

$('.disc-close').click(function(){
  $('#prom-overlay, #prom-wrap, #prom-popup').fadeOut();
});


// if (!$.cookie('was') && myLocation == 1) {
if (myLocation == 1) {
  setTimeout(promDiscount, 2000);
} else {
  $.noop;
};


//Проверка на прошлые посещения
if(!$.cookie('was')) {
	console.log('Это первый визит!');
} else {
	console.log('Это НЕ первый визит!');
};

//Проверка на URL этой страницы
console.log('URL этой страницы:'+ window.location.href);
if(window.location.href.indexOf('utm_source=yandex') > -1 || window.location.href.indexOf('utm_source=google') > -1 || window.location.href.indexOf('utm_source=facebook') > -1 || window.location.href.indexOf('utm_source=vk.com') > -1) {
	console.log('URL в списке к показу попап!');
} else {
	console.log('URL НЕ в списке к показу попап!');
};

//Итог проверки
if((window.location.href.indexOf('utm_source=yandex') > -1 || window.location.href.indexOf('utm_source=google') > -1 || window.location.href.indexOf('utm_source=facebook') > -1 || window.location.href.indexOf('utm_source=vk.com') > -1) && !$.cookie('was')) {
	console.log('Попап будет показан!');
} else {
	console.log('Попап не будет показан!');
};


$.cookie('was', true, {
    expires: 365
});

});
