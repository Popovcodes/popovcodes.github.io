$(document).ready(function(){

  // skill level
  var levelCalc = function(){
    var itemsTotal = $('.skills-list input[type="checkbox"]').length;
    var itemsChecked = $('.skills-list input[type="checkbox"]:checked').length;
    var percent = ((itemsChecked / itemsTotal)*100).toFixed(1);
    var dialDegree = -90 + percent*1.8;
    $('#nums').html(percent);
    $('#hand-container').css('transform', 'rotate('+ dialDegree +'deg)');
  };
  levelCalc();
  $('.skills-list input[type="checkbox"]').change(levelCalc);

  // type animation
  $('#name-val').typed({
      strings: ["Попов Александр"],
      startDelay: 1000,
      typeSpeed: 50,
      showCursor: false,
    });


  $('#date-val').typed({
      strings: ["05.12.1989"],
      startDelay: 4000,
      typeSpeed: 50,
      showCursor: false,
    });


  $('#loc-val').typed({
      strings: ["Луганск"],
      startDelay: 6000,
      typeSpeed: 50,
      showCursor: false,
    });

  $('#cont-val').typed({
      strings: ["alexvernoy@gmail.com"],
      startDelay: 8000,
      typeSpeed: 50,
      showCursor: false,
    });

  });


