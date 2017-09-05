//preloader
$(window).on('load', function(){
	$('.preloader').delay(750).fadeOut(500);
});

$(document).ready(function(){

	$(window).scroll(function(){
		var st = $(this).scrollTop();
		$('.parallax_bg').css({
			'-webkit-transform' : 'translate(0px,  '+ st/1.5 +'px)',
			'-ms-transform' : 'translate(0px,  '+ st/1.5 +'px)',
			'transform' : 'translate(0px,  '+ st/1.5 +'px)'
		});
	});
});

	

