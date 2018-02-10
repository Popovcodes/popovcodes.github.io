$(document).ready(function(){

  // page scroll
    $("a[rel='Scroll2id']").mPageScroll2id({
    	offset: 35
    });

  //sticky_menu
	var stickyFunc = function(){

			if($(this).scrollTop() > 200) {
				$('.desktop_nav a').css({"padding": "5px 30px"});
			} else {
				$('.desktop_nav a').css({"padding": "20px 30px"});
			}
	}
	stickyFunc();
	$(window).scroll(stickyFunc).resize(stickyFunc);

  // show / hide mob menu
  $('.mob_nav_btn, .mob_nav a, .overlay, .mob_close_btn' ).click(function(){
      $('.mob_nav_container').toggleClass('active');
      $('.overlay').toggleClass('hidden')
  });

  if(document.documentElement.clientWidth > 768) {
  		// wow.js animation  http://mynameismatthieu.com/WOW/
  		new WOW().init();
  	};

  $('.nav_link').click(function(){
    $('.nav_link').removeClass('active');
    $(this).addClass('active');
  });

});
