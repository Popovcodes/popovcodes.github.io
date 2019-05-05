$(document).ready(function(){
	// fancybox http://fancyapps.com/fancybox/3/
	$('.fancy').fancybox({
	  loop: true,
	  toolbar: true,
	  idleTime: 1000,
	  hideScrollbar: false
	});

	$('.design-i input[type="radio"]').change(function(){
		$('.design-label').text('Выбрать');
		$('.design-i input[type="radio"]:checked+.design-label').text('Отличный выбор!');
	});

	$('.sert-text').off('keyup');
	$('.sert-text').keyup(function() {
    if (this.value.length > 300)
        this.value = this.value.substr(0, 300);
	});


//параллакс
var fliesObj = function(){
	var pageIsScrolled = $(window).scrollTop();
	var windowHeight = $(window).height();
	var scrolledToWindowBottom = pageIsScrolled + windowHeight;

	if(pageIsScrolled < 1000 ) {
		$('#fg1').css({"transform": "translate("+pageIsScrolled/1+"px, "+-pageIsScrolled/5+"px)"});
		$('#fg2').css({"transform": "translate("+pageIsScrolled/3+"px, "+-pageIsScrolled/6+"px)"});
		$('#fg3').css({"transform": "translate("+pageIsScrolled/6+"px, "+-pageIsScrolled/7+"px)"});
		$('#fg4').css({"transform": "translate("+pageIsScrolled/9+"px, "+-pageIsScrolled/8+"px)"});
	};
	$('.lime-line').each(function(){
	  var thisPosition = $(this).offset().top;
	  var thisVisible = scrolledToWindowBottom - thisPosition;
	  if(thisVisible > 0 && thisVisible < windowHeight) {
	    $(this).css({"transform": "rotate(-7deg) translateY("+thisVisible/5+"px)"});
	  };
	});
	$('.lime-line2').each(function(){
	  var thisPosition = $(this).offset().top;
	  var thisVisible = scrolledToWindowBottom - thisPosition;
	  if(thisVisible > 0 && thisVisible < windowHeight) {
	    $(this).css({"transform": "rotate(12deg) translateY("+thisVisible/4+"px)"});
	  };
	});
	$('.red-line2').each(function(){
	  var thisPosition = $(this).offset().top;
	  var thisVisible = scrolledToWindowBottom - thisPosition;
	  if(thisVisible > 0 && thisVisible < windowHeight) {
	    $(this).css({"transform": "rotate(-5deg) translateY("+ -thisVisible/3+"px)"});
	  };
	});

	if(window.innerWidth > 100 ) {
		$('.fly img').each(function(){
			var coef = $(this).attr('data-coef');
			var thisPosition = $(this).offset().top;
      		var thisVisible = scrolledToWindowBottom - thisPosition;
      		if(thisVisible > 0 && thisVisible < windowHeight) {
        		$(this).css({"left": thisVisible/coef+"px"});
      		};
		});
	};//1199





};
fliesObj();
$(window).scroll(fliesObj).resize(fliesObj);












});