// preloader
$(window).on('load', function(){
	$('.preloader').delay(1000).fadeOut(300);
});

$(document).ready(function(){

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
		startDelay: 2000,
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

	

