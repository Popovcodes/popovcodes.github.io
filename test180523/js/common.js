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
});
