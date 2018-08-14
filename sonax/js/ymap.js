$(document).ready(function(){
	//yandex map
ymaps.ready(init);
    var myMap,
        myPlacemark1,
        myPlacemark2,
        myPlacemark3;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.753638, 37.620609],
            zoom: 13
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
           iconImageHref: 'img/common/map-pin-big.png',
           iconImageSize: [54, 79],
           balloonContentSize: [300, 150],
           //balloonLayout: "default#imageWithContent",
           //balloonImageHref: 'img/common/balloon-fiction.png',
           //balloonImageSize: [266, 78],
           balloonOffset: [-230, -30],
           hideIconOnBalloonOpen: false
        });

        myPlacemark1 = new ymaps.Placemark([55.766836, 37.606800], { 
           balloonContentBody: '<ul class="balloon"><li class="pin-adress">Москва, ул. Название Улицы, д. 1, стр. 1</li><li class="pin-phone">+7(800)555-35-35</li><li class="pin-mail">loremipsum1@mail.ru</li></ul>',
           hintContent: '"SONAX"',
        });

        myPlacemark2 = new ymaps.Placemark([55.752801, 37.625854], { 
            balloonContentBody: '<ul class="balloon"><li class="pin-adress">Москва, ул. Название Улицы, д. 2, стр. 2</li><li class="pin-phone">+7(800)555-35-36</li><li class="pin-mail">loremipsum2@mail.ru</li></ul>',
            hintContent: '"SONAX"'
        });

        myPlacemark3 = new ymaps.Placemark([55.741147, 37.585762], { 
            balloonContentBody: '<ul class="balloon"><li class="pin-adress">Москва, ул. Название Улицы, д. 3, стр. 3</li><li class="pin-phone">+7(800)555-35-37</li><li class="pin-mail">loremipsum3@mail.ru</li></ul>',
            hintContent: '"SONAX"'
        });

        myPin.add(myPlacemark1).add(myPlacemark2).add(myPlacemark3);
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
});