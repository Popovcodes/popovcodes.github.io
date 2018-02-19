
$(document).ready(function(){
	$(window).scroll(function(){
		var st = $(this).scrollTop();

		$('.header_text_1').css({
			"transform":  "translate(0%, "+ st/2+"%)"
		});

		$('.header_text_2').css({
			"transform":  "translate(0%, "+ st/3+"%)"
		});




		$('.sect_1 .bg').css({
			"transform":  "translate(0%, "+ st/20+"%)"
		});

		$('.sect_3 .bg').css({
			"transform":  "translate(0%, "+ -st/35+"%)"
		});
	});


	$(window).scroll(function(){
		console.log($(window).scrollTop());
		console.log($('.sect_3').scrollTop());
	});
	
});

	

