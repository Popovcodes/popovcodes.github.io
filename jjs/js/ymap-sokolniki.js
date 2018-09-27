$(document).ready(function(){
  //yandex map
  ymaps.ready(init);
  var myMap,
      myPlacemark1;

  function init(){     
      myMap = new ymaps.Map("map", {
          center: [55.793780, 37.676734],
          zoom: 15
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

      myPlacemark1 = new ymaps.Placemark([55.792311, 37.676699], { 
         balloonContentBody: 'Батутная арена JUST JUMP! "Сокольники" Москва, парк "Сокольники", ул. Сокольнический Вал, д.1 (м. "Сокольники")',
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