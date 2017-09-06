
$(document).ready(function(){

	$('.preloader').fadeOut(300);
	
	$('#slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: false,
		arrows: false,
		dots: true
	});

	$('#js-typed').typed({
		strings: ["we design"],
		startDelay: 3000,
		typeSpeed: 150,
		showCursor: false,
	});

	new WOW().init();

	$('input, textarea').placeholder();

	$("#to-top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

});

	

