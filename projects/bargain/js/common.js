// preloader templ
$(window).on('load', function(){
	$('.preloader').delay(2000).fadeOut(300);
});

$(document).ready(function(){

	// hidden menu 
	$('.mobile_menu_btn, .mobile_menu a' ).click(function(){

		if($('.mobile_menu_container').is(':hidden')){
			$('.mobile_menu_container').show();
		} else {
			console.log(32);
			$('.mobile_menu_container').hide();
		}
	});

	// scroll to top
	$(window).on ('scroll', function(){
		if ($(this).scrollTop() > 500) {
			$('#to-top').fadeIn(1000);
		} else {
			$('#to-top').fadeOut();
		}
	});

	$("#to-top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
	});

	// slick.js slider   http://kenwheeler.github.io/slick/
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		vertical: true,
		verticalSwiping: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 3000,
		arrows: true,
		rows: 3,
		dots: false,
		responsive: [
			{
				breakpoint: 620,
				settings: {
					rows: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					rows: 1,
					autoplay: false,
				}
			}
		]
	});

	// page scroll
	$("a[rel='Scroll2id']").mPageScroll2id({
		offset: 35
	});

	// IE placeholder  https://github.com/mathiasbynens/jquery-placeholder
	$('input, textarea').placeholder();

	//accordion
	$('.accordion li ul').not(':first').hide();
	$('.accordion h3:first').addClass('active');

	var getActive = function(){
		if(!$(this).hasClass('active')) {
			$('.accordion li h3').removeClass('active').next().slideUp();
			$('.circle_container').remove();
			$(this).addClass('active').next().slideDown();
			getCircle();
		}
	};
	$('.accordion li h3').click(getActive);

	var circle_html = '<div class="circle_container"><div class="semi_circle_container"><div class="semi_circle"></div>	</div><div class="full_circle"><div class="hammer_sm"></div></div></div>';
	var getCircle = function() {
		$('.circle_container').remove();
		if(document.documentElement.clientWidth > 0) {
			$('.accordion h3.active').before(circle_html);
		};
	};
	getCircle();
	$(window).resize(getCircle);

	// function for <img> "src" on desktop screens
	function changeImgSrc() {
		var changingImg = $('.adv_price img');
		if(document.documentElement.clientWidth > 768) {
			changingImg.attr('src', 'img/icon4.png');
		} else {
			changingImg.attr('src', 'img/icon4_sm.png');
		}
	}
	// end of the function declaration
	// change <img> src
	changeImgSrc();
	$(window).resize(changeImgSrc);


	// modal windows
	$('.callback_btn').on('click', function(){
		$('.overlay, .callback_modal').fadeIn(200);
	});
	$('.appoint_btn, .consult_btn').on('click', function(){
		$('.overlay, .appointment_modal').fadeIn(200);
	});
	$('.overlay, .modal_close').on('click', function(){
		$('.overlay, .callback_modal, .appointment_modal').fadeOut(200);
	});

	//sticky_menu
	var menuHeight = $('.menu_logo_line').outerHeight(true);	
	var Hoffset = menuHeight+'px';
	var stickyFunc = function(){
		if(document.documentElement.clientWidth > 620) {
			var documentScroll = $(this).scrollTop();
			console.log(Hoffset);
			if(documentScroll > 100) {
				$('#sticky_menu').addClass('sticky_menu');
				$('.top_section').css("margin-top", Hoffset); //compensation of main_menu height when it become fixed, for correct scrolling to ip
			} else {
				$('#sticky_menu').removeClass('sticky_menu');
				$('.top_section').css("margin-top", "0");
			}
		} else {
			$('#sticky_menu').removeClass('sticky_menu');
			$('.top_section').css("margin-top", "0");
		}
	}
	stickyFunc();
	$(window).scroll(stickyFunc).resize(stickyFunc);

	if(document.documentElement.clientWidth > 768) {
		// wow.js animation  http://mynameismatthieu.com/WOW/
		/*new WOW().init();*/
	};
});

// yandex map
ymaps.ready(init);
var myMap,
	placemark;

function init(){     
	myMap = new ymaps.Map("map", {
		center: [55.665140, 37.472179],
		zoom: 16
	});

	myMap.controls
		.remove('geolocationControl')
		.remove('trafficControl')
		.remove('rulerControl')
		.remove('fullscreenControl')
		.remove('typeSelector')
		.remove('searchControl');

	myMap.behaviors.disable([
		'scrollZoom'
	]);

	placemark = new ymaps.Placemark([55.664, 37.472], {
		balloonContentHeader: '<span style="color: #2F1749; font-weight: bold">Юридическая фирма "Bargain"</span>',
		balloonContentBody: 'улица Покрышкина 23',
		hintContent: ' Юридическая фирма "Bargain" '
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/pin.png',
		iconImageSize: [90, 90],
		iconImageOffset: [-45, -90]
	});

	myMap.geoObjects.add(placemark);
}