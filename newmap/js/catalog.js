$(window).ready(function(){

  //ползунки цены
  var maxVal = 1300;
  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: maxVal,
      step: 10,
      values: [ 0, maxVal ],
      slide: function( event, ui ) {
        $( "#price-from" ).val( ui.values[ 0 ] );
        $( "#price-to" ).val( ui.values[ 1 ] );
      }
    });
    $( "#price-from" ).val($( "#slider-range" ).slider( "values", 0 ));
    $( "#price-to" ).val($( "#slider-range" ).slider( "values", 1 ));
  } );

  // Изменение местоположения ползунка при вводе данныхх в первый элемент input
  $("input#price-from").change(function(){
    var value1=$("input#price-from").val();
    var value2=$("input#price-to").val();
      if(parseInt(value1) > parseInt(value2)){
      value1 = value2;
      $("input#price-from").val(value1);
    }
    $("#slider-range").slider("values",0,value1);
  });

  // Изменение местоположения ползунка при вводе данных во второй элемент input
  $("input#price-to").change(function(){
    var value1=$("input#price-from").val();
    var value2=$("input#price-to").val();
    if(parseInt(value1) > parseInt(value2)){
      value2 = value1;
      $("input#price-to").val(value2);
    }
    $("#slider-range").slider("values",1,value2);
  });

  // Сброс фильтров
  $('#filter-reset').click(function(){
    $('#price-from').val(0).change();
    $('#price-to').val(maxVal).change();
    $('#filter-form input[type="checkbox').prop('checked', false);
    $('#available-1').prop('checked', true);
  });

});