$(document).ready(function(){
  //yandex map
  ymaps.ready(init);
  var myMap,
      myPlacemark1,
      myPlacemark2;

  function init(){     
      myMap = new ymaps.Map("map", {
          center: [55.734674, 37.662874],
          zoom: 16
      });

      myMap.controls
          .remove('geolocationControl')
          .remove('trafficControl')
          .remove('rulerControl')
          .remove('searchControl')
          .remove('typeSelector')
          .remove('fullscreenControl');

      myMap.behaviors.disable([
          'drag',
          'scrollZoom'
      ]);

      myPin = new ymaps.GeoObjectCollection({}, {
         balloonOffset: [2, -35],
         hideIconOnBalloonOpen: false
      });

      myPlacemark1 = new ymaps.Placemark([55.734674, 37.662874], { 
         balloonContentBody: 'ул.Марксистская 34 к. 11',
         hintContent: 'Денчик Починит',
      }, {
        preset: 'islands#redDotIcon'
      });

      myPlacemark2 = new ymaps.Placemark([55.741135, 37.502786], { 
          balloonContentBody: 'ул.Барклая 8, офис 477',
          hintContent: 'Денчик Починит',
      }, {
        preset: 'islands#redDotIcon'
      });

      myPin.add(myPlacemark1).add(myPlacemark2);
      myMap.geoObjects.add(myPin);

      //myMap.setBounds(myMap.geoObjects.getBounds(), {checkZoomRange:true}).then(function(){ if(myMap.getZoom() > 10) myMap.setZoom(10);});
      myPlacemark1.balloon.open();
      myMap.events.add('click', function() {
          myMap.balloon.close();
          myMap.behaviors
                  .enable('scrollZoom')
                  .enable('drag')
                  .enable('multiTouch');
      });
  }
  /*===============================*/

  $('#address1').click(function(){
    myMap.setCenter([55.734674, 37.662874]);
    myPlacemark1.balloon.open();
  });
  $('#address2').click(function(){
    myMap.setCenter([55.741135, 37.502786]);
    myPlacemark2.balloon.open();
  });
});