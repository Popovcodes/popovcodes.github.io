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



