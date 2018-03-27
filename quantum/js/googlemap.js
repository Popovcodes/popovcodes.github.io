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
        styles: [{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"geometry","stylers":[{"color":"#004600"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"saturation":"62"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"gamma":"1.81"},{"lightness":"100"},{"saturation":"100"},{"color":"#00ff0b"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"saturation":"-100"},{"lightness":-33},{"weight":"2.53"},{"gamma":0.8},{"color":"#061d00"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":30},{"saturation":30}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"lightness":"-32"},{"saturation":"48"},{"color":"#000000"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":20}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":20},{"saturation":-20}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},{"saturation":-30}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"lightness":"24"},{"saturation":"100"},{"color":"#39ff00"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":25},{"lightness":25}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#2bff00"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"weight":"4.46"}]},{"featureType":"transit","elementType":"geometry.fill","stylers":[{"saturation":"100"},{"lightness":"12"},{"color":"#148400"}]},{"featureType":"water","elementType":"all","stylers":[{"lightness":-20}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"lightness":"-100"},{"color":"#001a03"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"weight":"1.70"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#2bff00"}]}]
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
