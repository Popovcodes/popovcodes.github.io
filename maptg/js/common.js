$(window).ready(function(){

$('.region-list a').hover(function(){
  var thisData = $(this).data('region');
  $('#' + thisData).addClass('active');
});
$('.region-list a').mouseleave(function(){
  var thisData = $(this).data('region');
  $('#' + thisData).removeClass('active');
});

var thisTimeout;
var thisName;
$('path.region').hover(function(){
    $('#region-list-cont').stop().clearQueue();
    thisName = $(this).attr('id');
    var thisLink = $('.region-list a[data-region="'+thisName+'"]');
    var pos = thisLink.position().top;
    var contHeightHalf = $('#region-list-cont').outerHeight()/2-32;
    thisTimeout = setTimeout(function(){
      $('.region-list a').removeClass('active');
      thisLink.addClass('active');
      $('#region-list-cont').animate({'scrollTop': pos-contHeightHalf}, 400);
  }, 500);
}, function(){
  $('#region-list').stop();
  clearTimeout(thisTimeout);
  //$('.region-list a[data-region="'+thisName+'"]').removeClass('active');
});

// сокращение "район"
var divisionName = function(){
    if(window.innerWidth < 767) {
        $('.region-list a').each(function(){
            $(this).html($(this).html().replace(' район', ' р-н'));
        });
    } else {
        $('.region-list a').each(function(){
            $(this).html($(this).html().replace(' р-н', ' район'));
        });
    };
};
divisionName();
$(window).resize(divisionName);


// nicescroll  https://github.com/inuyaksa/jquery.nicescroll
var scrollStyle = function(){
  if(window.innerWidth > 1200) {
    $("#region-list-cont").niceScroll({
      cursorcolor: "#05ACFF",
      cursorwidth: "2px",
      zindex: 10,
      autohidemode: false,
      background: "#E9E9E9",
      cursoropacitymin: 1,
      cursorborder: 0,
      emulatetouch: true,
      preventmultitouchscrolling: false,
      cursordragontouch: true
    });
  };
};
scrollStyle();
$(window).resize(scrollStyle);
});

