$(document).ready(function(){
ymaps.ready(init);
    var myMap,
        myPlacemark1;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.739747, 37.622493],
            zoom: 18
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
           //iconLayout: 'default#image',
           //iconImageHref: 'img/common/pin.png',
           //iconImageSize: [46, 64],
           //balloonContentSize: [300, 150],
           balloonOffset: [0, -40],
           hideIconOnBalloonOpen: false
        });

        myPlacemark1 = new ymaps.Placemark([55.739747, 37.622493], { 
           balloonContentBody: 'г. Москва, улица, <br>дом, офис',
           hintContent: 'SHS',
        }, {
          preset: 'islands#redDotIcon'
        });
        myPin.add(myPlacemark1);
        myMap.geoObjects.add(myPin);

        myPlacemark1.balloon.open();
        myMap.events.add('click', function() {
          myMap.behaviors
            .enable('scrollZoom')
            .enable('drag')
            .enable('multiTouch');
        });
    }
});