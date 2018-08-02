$(document).ready(function(){
	//yandex map
  /*===============================*/
    ymaps.ready(init);

    function init(){     

      var myMap = new ymaps.Map("map", {
        center: [55.727136, 37.469359],
        zoom: 12
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

    var myPlacemark = new ymaps.Placemark([55.745, 37.469359],{
      hintContent: 'I.D.E.A. legal group'
    },{
      iconLayout: 'default#image',
      iconImageHref: '../img/commonImgs/map-pin.png',
      iconImageSize: [56, 80],
      iconImageOffset: [-0, -0]
    });
    myMap.geoObjects.add(myPlacemark);

    myMap.events.add('click', function() {
        myMap.behaviors
          .enable('scrollZoom')
          .enable('drag')
          .enable('multiTouch');
       });
    }
  /*===============================*/
});