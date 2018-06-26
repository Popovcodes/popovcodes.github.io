// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 18,
        streetViewControl: false,
        draggable: false,
        mapTypeControl: false,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(55.7811255,37.6969864), 
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map-address-1');

    // Create the Google Map using our element and options defined above
    var map1 = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(55.7811255,37.6969864),
        map: map1,
        title: 'Большая Почтовая улица, 36, стр.1, офис 21 '
    });


    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions2 = {
        // How zoomed in you want the map to start at (always required)
        zoom: 17,
        streetViewControl: false,
        draggable: false,
        mapTypeControl: false,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(52.541899, 85.132623), 
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement2 = document.getElementById('map-address-2');

    // Create the Google Map using our element and options defined above
    var map2 = new google.maps.Map(mapElement2, mapOptions2);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(52.541899, 85.132623),
        map: map2,
        title: 'г. Бийск, улица Мамонтова, 11Д'
    });
}
