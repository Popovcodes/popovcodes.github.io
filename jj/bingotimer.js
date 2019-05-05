window.onload = function () {

var popupEnabled;
popupEnabled = true;
// var showDiscount = function(){
//     var setH = window.innerHeight + 'px';
//     $('#fireworks-canvas').attr('height', setH);
//     var firework = JS_FIREWORKS.Fireworks({
//         id : 'fireworks-canvas',
//         hue : 120,
//         particleCount : 200,
//         delay : 0,
//         minDelay : 20,
//         maxDelay : 40,
//         boundaries : {
//           top: 50,
//           bottom: 240,
//           left: 200,
//           right: 590
//         },
//         fireworkSpeed : 2,
//         fireworkAcceleration : 1.05,
//         particleFriction : .95,
//         particleGravity : 1.5
//     });
//     firework.start();
//     setTimeout(function(){
//       $('#disc-overlay').fadeIn();
//       $('#discount-popup-1').addClass('shown');
//     }, 5000);
//     $('.disc-close').click(function(){
//       firework.stop();
//       $('#fireworks-canvas').remove();
//     });
//   };/*showDiscount*/


var showDiscount = function(){
  if(popupEnabled == true){
    var head = $('head');
    var script = $('<script />');
    script.attr('src', 'bingoscript.js');
    head.append(script);
    setTimeout(function(){
      $('#disc-overlay').fadeIn();
      $('#discount-popup-1').addClass('shown');
    }, 5000);
  };
  $('.disc-close').click(function(){
    $('#Stage, .center-wrapper').css({'opacity':'0', 'z-index':'-10'});
  });
};/*showDiscount*/



$('#disc-agree').click(function(){
  $('#discount-popup-1').removeClass('shown');
  setTimeout(function(){
    $('#discount-popup-2').addClass('shown');
  }, 400);
});

$('#disc-refuse').click(function(){
  $('#discount-popup-1').removeClass('shown');
  setTimeout(function(){
    $('#discount-popup-3').addClass('shown');
  }, 400);
});

$('.disc-close').click(function(){
  $(this).parents('.discount-popup').removeClass('shown');
  $('#disc-overlay').fadeOut();
});

var prices = $('#prices-block');
var pricesTopEdge = $('#prices-block').offset().top;
var pricesBottomEdge = pricesTopEdge + $('#prices-block').outerHeight();
var timerStatus = 0;
var timer = 0;
var myTimer;

var startTimer = function(){
  myTimer = setInterval(function(){
    timer++;
    if(timer > 2) {
      showDiscount();
      stopTimer();
      popupEnabled = false;
    }
  }, 1000);
  timerStatus = 1;
};

var stopTimer = function(){
  myTimer = clearInterval(myTimer);
  timerStatus = 0;
  timer = 0;
};

var watchPrices = function(){
  var pageIsScrolled = $(window).scrollTop();
  var windowHeight = $(window).height();
  var scrolledToWindowBottom = pageIsScrolled + windowHeight;
  var timer = 0;
  var timerId;

  if(pageIsScrolled < pricesBottomEdge && scrolledToWindowBottom > pricesTopEdge) {
    if(timerStatus == 0) {
      startTimer();
    };
    
  } else {
      stopTimer();
  };
};

watchPrices();
$(window).scroll(watchPrices);

};
