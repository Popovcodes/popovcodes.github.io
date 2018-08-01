$(document).ready(function(){

  //slick.js slider   http://kenwheeler.github.io/slick/


  // specialists names first letters of each word styling
  $('.person-name').each(function(){
    var thisName = $(this);
    var words = thisName.text().split(' ');
    var newHtml = '';
    for (var i = 0; i<words.length; i++) {
      newHtml += '<span>' + words[i].substring(0, 1) + '</span>' + words[i].substring(1) + ' ';
    }
    thisName.html(newHtml);
  });

  // select styling https://github.com/FormstoneClassic/Selecter; https://formstone.it/components/dropdown/
  $("#select").selecter({
    label: 'руководители',
    mobile: false
  });

});
