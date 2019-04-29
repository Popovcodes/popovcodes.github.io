$(document).ready(function(){
  //yandex map
ymaps.ready(init);
    var myMap,
        myPlacemark1,
        myPlacemark2,
        myPlacemark3;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.915791, 37.510506],
            zoom: 10
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
           //iconImageHref: 'img/common/map-pin-big.png',
           //iconImageSize: [54, 79],
           //balloonContentSize: [300, 150],
           //balloonLayout: "default#imageWithContent",
           //balloonImageHref: 'img/common/balloon-fiction.png',
           //balloonImageSize: [266, 78],
           balloonOffset: [0, -40],
           hideIconOnBalloonOpen: false,
           preset: 'islands#redDotIcon'
        });

        myPlacemark1 = new ymaps.Placemark([55.977475, 37.259731], { 
           balloonContentBody: 'г. Москва, улица, дом, офис',
           hintContent: '"SHS, г. Москва, улица, дом, офис"',
        });

        myPlacemark2 = new ymaps.Placemark([55.879560, 37.631893], { 
            balloonContentBody: 'г. Москва, улица, дом, офис',
            hintContent: '"SHS, г. Москва, улица, дом, офис"'
        });

        myPlacemark3 = new ymaps.Placemark([55.911599, 37.410237], { 
            balloonContentBody: 'г. Москва, улица, дом, офис',
            hintContent: '"SHS, г. Москва, улица, дом, офис"'
        });

        myPlacemark4 = new ymaps.Placemark([56.000198, 37.477528], { 
            balloonContentBody: 'г. Москва, улица, дом, офис',
            hintContent: '"SHS, г. Москва, улица, дом, офис"'
        });

        myPlacemark5 = new ymaps.Placemark([55.896169, 37.724721], { 
            balloonContentBody: 'г. Москва, улица, дом, офис',
            hintContent: '"SHS, г. Москва, улица, дом, офис"'
        });

        myPin
        .add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4)
        .add(myPlacemark5);
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
  /*===============================*/
});