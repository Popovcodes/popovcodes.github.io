$(document).ready(function(){
	//yandex map
ymaps.ready(init);
    var myMap,
        myPlacemark1;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.761681, 37.611850],
            zoom: 17
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
           iconLayout: 'default#image',
           iconImageHref: 'img/icons/pin.png',
           iconImageSize: [30, 46],
        });

        myPlacemark1 = new ymaps.Placemark([55.761681, 37.611850], {});
        myPin.add(myPlacemark1);
        myMap.geoObjects.add(myPin);

        myMap.events.add('click', function() {
          myMap.behaviors
            .enable('scrollZoom')
            .enable('drag')
            .enable('multiTouch');
        });
    }
});