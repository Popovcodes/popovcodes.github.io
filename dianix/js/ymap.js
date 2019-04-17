$(document).ready(function(){
ymaps.ready(init);
    var myMap,
        myPlacemark1;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.979352, 37.174633],
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

        myPlacemark1 = new ymaps.Placemark([55.979118, 37.174622], { 
           balloonContentBody: 'г. Москва, Зеленоградский АО, <br>ул. Заводская д.1-Б, 3 этаж, пав. 3',
           hintContent: 'Дианикс',
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