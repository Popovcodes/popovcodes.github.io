$(document).ready(function(){
  //yandex map
  ymaps.ready(init);
  var myMap,
      myPlacemark1;

  function init(){     
      myMap = new ymaps.Map("map", {
          center: [55.708403, 37.638027],
          zoom: 14
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
         balloonOffset: [0, -35],
         hideIconOnBalloonOpen: false,
          //balloonPanelMaxMapArea: '300000'

      });

      myPlacemark1 = new ymaps.Placemark([55.705446, 37.638972], { 
         balloonContentBody: 'Батутная арена JUST JUMP! "Автозаводская" Москва, ул. Автозаводская, влад. 18, ТРК "Ривьера" (м. "Автозаводская")',
         hintContent: '',
      }, {
        preset: 'islands#redDotIcon'
      });

      
      myPin.add(myPlacemark1);
      myMap.geoObjects.add(myPin);

      //myMap.setBounds(myMap.geoObjects.getBounds(), {checkZoomRange:true}).then(function(){ if(myMap.getZoom() > 10) myMap.setZoom(10);});
      //myPlacemark1.balloon.open();
      myMap.events.add('click', function() {
          myMap.balloon.close();
          myMap.behaviors
                  .enable('scrollZoom')
                  .enable('drag')
                  .enable('multiTouch');
      });
  }
});