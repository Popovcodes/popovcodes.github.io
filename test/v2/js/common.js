$(document).ready(function(){

	// modal showing/hiding
	$('.signup_btn').click(function(){
		$('.overlay, .register_modal').fadeIn(200);
	});
	$('.login_btn').click(function(){
		$('.overlay, .auth_modal').fadeIn(200);
	});
	$('.overlay, .close_btn').click(function(){
		$('.overlay, .register_modal, .auth_modal').fadeOut(100);
	});

	//steps changing
	var st3 = function(){$('.step_3').fadeIn(1000)};
	var st2 = function(){$('.step_2').fadeIn(1000).delay(3000).fadeOut(2000, st3)};
	var st1 = function(){
		$('.step_1').delay(1000).fadeIn(1000).delay(3000).fadeOut(2000, st2);
	};
	st1();


	//show/hide password
	var showPassword = function(){
		$(this).siblings(":password").attr('type','text');
	}
	var hidePassword = function(){
		$(this).siblings(":text").attr('type','password');
	}

	$('.show_password_btn').mousedown(showPassword)
		.mouseleave(hidePassword)
		.mouseup(hidePassword);
});



