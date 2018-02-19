$(document).ready(function(){

	$('.h_half').css({top: $(window).height() / 2});
	$('.v_half').css({left: $(window).width() / 2});

	$(window).mousemove(function(event){
		var w = $(window).width();
			h = $(window).height();
			CursorFromCenterX = 0.5 - event.pageX / w;
			CursorFromCenterY = 0.5 - event.pageY / h;

			$('.parallax').each(function(i,el){
				var offsetCoefficient = parseInt($(el).data('offset'));
					translation =
					'translate(' + 
					Math.round(CursorFromCenterX * offsetCoefficient) +
					'px,' +
					Math.round(CursorFromCenterY * offsetCoefficient) + 
					'px)';
					console.log(translation);

					$(el).css({'transform' : translation});
			});
	});
	
});

	

