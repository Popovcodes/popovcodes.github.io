$(document).ready(function(){
	/*скрипт калькулятора*/
//проверка на числовое значение
$('.quant-input').on('keyup', function(){
  this.value = this.value.replace(/[^0-9]/ig,'');
});

//калькулятор, +/- площадь
var squareSiblingsChange = function(){
  var newActualSquare = parseInt($('#scale-current').val());
  $('#current-minus-two').text(newActualSquare-2);
  $('#current-minus-one').text(newActualSquare-1);
  $('#current-plus-one').text(newActualSquare+1);
  $('#current-plus-two').text(newActualSquare+2);
  $('.neighbour').each(function(){
    if(parseInt($(this).text()) < 0) {
      $(this).css('opacity', '0');
    } else {
      $(this).css('opacity', '1');
    };
    if(newActualSquare > 97) {
      $(this).css('display', 'none');
    } else {
      $(this).css('display', 'inline-block');
    };

  });
};
squareSiblingsChange();

var squareIncrement = function(){
  var actualSquare = parseInt($('#scale-current').val());
  $('#scale-current').val(actualSquare+1);
  squareSiblingsChange();
  calculate();
  $('#approx-val').removeClass('calculated');
};

var squareDecrement = function(){
  var actualSquare = parseInt($('#scale-current').val());
  if(actualSquare > 0) {
    $('#scale-current').val(actualSquare-1);
    squareSiblingsChange();
  };
  calculate();
  $('#approx-val').removeClass('calculated');
};

$('#scale-minus').click(squareDecrement);
$('#scale-plus').click(squareIncrement);

var currentValue;
$('#scale-current').focus(function(){
  currentValue = parseInt($('#scale-current').val());
  $(this).val('');
});
$('#scale-current').focusout(function(){
  if($(this).val() == "") {
    $(this).val(currentValue);
    squareSiblingsChange();
    calculate();
  };
});

$('#scale-current').change(squareSiblingsChange);


//рассчет стоимости
var calculate = function(){

  var squareUnitCostDefault = 500; // Значение стоимости м2 по умолчанию (если не выбран селект)
  var chandelierUnitCost = 200; // рублей добавляет к стоимости за каждую люстру
  var spotlightsUnitCost = 150; // рублей добавляет к стоимости за каждый точечный светильник
  var spotlightsUnitCost = 120; // рублей добавляет к стоимости за каждую трубу
  var minCost = 7000; // минимально разрешенная общая сумма, рублей

  var square = parseInt($('#scale-current').val()); // площадь м2
  var squareUnitCostInput = $('#calc-select').val(); // Значение стоимости м2 из селекта
  var squareUnitCost; // Кол-во труб для расчета
  if(squareUnitCostInput == "") {
    squareUnitCost = squareUnitCostDefault; // если инпут пуст, берем по умолчанию
  } else {
    squareUnitCost = parseInt(squareUnitCostInput); // если введено число - берем из инпута
  };

  var chandelierInput = $('#chandelier-num').val(); // введенное количество люстр
  var chandelierDefault = 0; // кол-во люстр по умолчанию (если инпут пуст)
  var chandelierNum; // Кол-во люстр для расчета
  if(chandelierInput == "") {
    chandelierNum = chandelierDefault; // если инпут пуст, берем по умолчанию
  } else {
    chandelierNum = parseInt(chandelierInput); // если введено число - берем из инпута
  };

  var spotlightsInput = $('#spotlights-num').val(); // введенное количество точечных светильников
  var spotlightsDefault = 0; // кол-во точечных светильников по умолчанию (если инпут пуст)
  var spotlightsNum; // Кол-во точечных светильников для расчета
  if(spotlightsInput == "") {
    spotlightsNum = spotlightsDefault; // если инпут пуст, берем по умолчанию
  } else {
    spotlightsNum = parseInt(spotlightsInput); // если введено число - берем из инпута
  };

  var pipesInput = $('#pipes-num').val(); // введенное количество труб
  var pipesDefault = 0; // кол-во точечных труб по умолчанию (если инпут пуст)
  var pipesNum; // Кол-во труб для расчета
  if(pipesInput == "") {
    pipesNum = pipesDefault; // если инпут пуст, берем по умолчанию
  } else {
    pipesNum = parseInt(pipesInput); // если введено число - берем из инпута
  };

  var calculatedTotal = (square * squareUnitCost) + (chandelierNum * chandelierUnitCost) + (spotlightsNum * spotlightsUnitCost) + (pipesInput * spotlightsUnitCost);

  if(calculatedTotal > minCost) {
    $('#cost-calculated').text(calculatedTotal);
  } else {
    $('#cost-calculated').text(minCost);
  };
};
calculate();

$('.quant-input, #calc-select').change(function(){
  calculate();
  $('#approx-val').removeClass('calculated');
});//перерасчитать при вводе кол-ва и выборе типа
$('#scale-current').keyup(function(){
  calculate();
  $('#approx-val').removeClass('calculated');
});
$('.full-calculator-section #calculate-btn').click(function(e){//перерасчитать при нажатии кнопки "выполнить расчет" (на странице калькулятора)
  e.preventDefault();
  calculate();
  $('#approx-val').addClass('calculated');
});


/*конец скрипта калькулятора*/

});