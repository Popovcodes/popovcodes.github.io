// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 10,
        streetViewControl: false,
        //draggable: false,
        mapTypeControl: false,


        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(55.78218909, 37.59555602), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"stylers":[{"hue":"#bbff00"},{"weight":0.5},{"gamma":0.5}]},{"elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","stylers":[{"color":"#a4cc48"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"},{"visibility":"on"},{"weight":1}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"},{"gamma":1.14},{"saturation":-18}]},{"featureType":"road.highway.controlled_access","elementType":"labels","stylers":[{"saturation":30},{"gamma":0.76}]},{"featureType":"road.local","stylers":[{"visibility":"simplified"},{"weight":0.4},{"lightness":-8}]},{"featureType":"water","stylers":[{"color":"#4aaecc"}]},{"featureType":"landscape.man_made","stylers":[{"color":"#718e32"}]},{"featureType":"poi.business","stylers":[{"saturation":68},{"lightness":-61}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"weight":2.7},{"color":"#f4f9e8"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"weight":1.5},{"color":"#e53013"},{"saturation":-42},{"lightness":28}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('main-map');

    // Create the Google Map using our element and options defined above
    var map1 = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(55.8802746, 37.4962897),
        map: map1,
        title: 'Quantum',
    });
}
