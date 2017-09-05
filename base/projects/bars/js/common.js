// preloader 
// $(window).on('load', function(){
// 	$('.preloader').fadeOut(100);
// });

$(document).ready(function(){

	$('.preloader').fadeOut(0); //right here, in (document).ready

	if(document.documentElement.clientWidth > 768) {
		// wow.js animation  http://mynameismatthieu.com/WOW/
		new WOW().init();
	};

	// IE placeholder  https://github.com/mathiasbynens/jquery-placeholder
	$('input, textarea').placeholder();
	
	
	// scroll to top
	$(window).scroll(function(){
		if ($(this).scrollTop() > 800) {
			$('#to-top').fadeIn(2000);
		} else {
			$('#to-top').fadeOut();
		}
	});

	$("#to-top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
	});

	//timer script
	var decCache = [],
	decCases = [2, 0, 1, 1, 1, 2];

	function decOfNum(number, titles) {
		if (!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
		return titles[decCache[number]];
	}

	function timerLeft(year,month,day) {
		setInterval(function() {
			var hoursLeft = document.getElementsByClassName('timer-v-hours'),
				hoursText = document.getElementsByClassName('timer-v-hours__text'),
				minutesLeft = document.getElementsByClassName('timer-v-minutes'),
				minutesText = document.getElementsByClassName('timer-v-minutes__text'),
				secLeft = document.getElementsByClassName('timer-v-seconds'),
				secText = document.getElementsByClassName('timer-v-seconds__text'),
				dateNow = new Date().getTime(),
				dateFinish = new Date(year,month,day),
				sec = Math.floor((dateFinish - dateNow) / 1000),
				secToHours = sec % 86400,
				secToMinutes = secToHours % 3600,
				hoursNumber = Math.floor(secToHours / 3600),
				minutesNumber = Math.floor(secToMinutes / 60),
				secondsNumber = secToMinutes % 60;

			for(var i=0; i<hoursText.length; i++){
				hoursText[i].innerHTML = decOfNum(hoursNumber, ['час', 'часа', 'часов'])
			}

			for(var i=0; i<minutesText.length; i++){
				minutesText[i].innerHTML = decOfNum(minutesNumber, ['минута', 'минуты', 'минут'])
			}

			for(var i=0; i<secText.length; i++){
				secText[i].innerHTML = decOfNum(secondsNumber, ['секунда', 'секунды', 'секунд'])
			}

			//hoursText.innerHTML = decOfNum(hoursNumber, ['час', 'часа', 'часов']);
			//minutesText.innerHTML = decOfNum(minutesNumber, ['минута', 'минуты', 'минут']);
			//secText.innerHTML = decOfNum(secondsNumber, ['секунда', 'секунды', 'секунд']);

			for(var i=0; i<hoursLeft.length; i++){
				if (hoursNumber > 9) {hoursLeft[i].innerHTML = hoursNumber} else {hoursLeft[i].innerHTML = '0'+hoursNumber}
			}

			for(var i=0; i<minutesLeft.length; i++){
				if (minutesNumber > 9) {minutesLeft[i].innerHTML = minutesNumber} else {minutesLeft[i].innerHTML = '0'+minutesNumber}
			}

			for(var i=0; i<secLeft.length; i++){
				if (secondsNumber > 9) {secLeft[i].innerHTML = secondsNumber} else {secLeft[i].innerHTML = '0'+secondsNumber;}
			}

			//if (hoursNumber > 9) {hoursLeft.innerHTML = hoursNumber} else {hoursLeft.innerHTML = '0'+hoursNumber};
			//if (minutesNumber > 9) {minutesLeft.innerHTML = minutesNumber} else {minutesLeft.innerHTML = '0'+minutesNumber};
			//if (secondsNumber > 9) {secLeft.innerHTML = secondsNumber} else {secLeft.innerHTML = '0'+secondsNumber;}

		},1000)
	}
	timerLeft(2018, 08, 25);
	// end of timer script

	// slick slider  http://kenwheeler.github.io/slick/

	$('.big-pic-box').slick({
		lidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		fade: false,
		speed: 1000,
		asNavFor: '.nav-pic-box'
	});

	$('.nav-pic-box').slick({
		slidesToShow: 5,
		autoplay: true,
		slidesToScroll: 1,
		asNavFor: '.big-pic-box',
		dots: false,
		focusOnSelect: true
	});

	// modals 
	$(".callback-btn").on("click", function(){
		$(".overlay, .callback").fadeIn(150);
	});

	$(".order-form-button, .alt-order-btn").on("click", function(){
		$(".order-modal, .overlay").fadeIn(150); 
	});

	$(".overlay, .callback-close, .order-confirm, .order-cancel").on("click", function(){
		$(".overlay, .callback, .order-modal").fadeOut(0);
	});
});

