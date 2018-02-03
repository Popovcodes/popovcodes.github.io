$(document).ready(function(){

	$('.preloader').fadeOut(150);

	$(window).scroll(function(){
		var st = $(this).scrollTop();
		// $('.parallax_bg').css({
		// 	'-webkit-transform' : 'translate(0%,  '+ st/10 +'%)',
		// 	'-ms-transform' : 'translate(0%,  '+ st/10 +'%)',
		// 	'transform' : 'translate(0%,  '+ st/10 +'%)'
		// });
	});
});
