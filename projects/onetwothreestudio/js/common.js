// preloader
$(window).on('load', function(){
	$('.preloader').delay(100).fadeOut(0);
});

$(document).ready(function() {
	

	// js-typed
	if(document.documentElement.clientWidth < 901) {
		$('#js-typed-1').html("intelligence");
		$('#js-typed-2').html("is nothing");
		$('#js-typed-3').html("without ambition");
	};


	if(document.documentElement.clientWidth > 900) {
		$('#js-typed-1').typed({
			strings: ["intelligence"],
			startDelay: 1200,
			typeSpeed: 10,
			showCursor: false,
		});
		$('#js-typed-2').typed({
			strings: ["is nothing"],
			startDelay: 2300,
			typeSpeed: 10,
			showCursor: false,
		});
		$('#js-typed-3').typed({
			strings: ["without ambition"],
			startDelay: 3200,
			typeSpeed: 25,
			showCursor: false,
		});

		if(document.documentElement.clientWidth > 768) {
			new WOW().init();

			$("html").niceScroll({
				cursorcolor: "#FA5C65",
				cursorwidth: "14px",
				zindex: 10,
				autohidemode: false,
				background: "#fff",
				cursorfixedheight: 200,
				cursorborderradius: "3px",
				cursorborder: "1px solid #000",
				horizrailenabled: false
			});

			//parallax
			$(window).scroll(function(){
				var st = $(this).scrollTop();

				$('.parallax').css({
					'background-position' : '100% ' + st/2 +'px'
				});
			});
		}
	};
});
