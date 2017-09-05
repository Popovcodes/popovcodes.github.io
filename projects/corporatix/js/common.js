$(window).on('load', function(){
	$('.preloader').delay(2000).fadeOut(300);
});

$(document).ready(function() {

	$(".menu_toggle").click(function() {
		$(".menu_wrapper").slideToggle(300);
	});
	$(window).resize(function(){
		if ($(window).width() > 768) {
			$(".menu_wrapper").removeAttr("style");
		}
	});

	$(".fancybox").fancybox();

// slick.js slider   http://kenwheeler.github.io/slick/
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true, 
		autoplaySpeed: 2500,
		speed: 2000,
		fade: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		dots: true
	});
});

