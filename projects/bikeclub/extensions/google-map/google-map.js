// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
				// How zoomed in you want the map to start at (always required)
				zoom: 10,
				scrollwheel: false,
				mapTypeControl: false,
				streetViewControl: false,

				// The latitude and longitude to center the map (always required)
				center: new google.maps.LatLng(55.750498, 37.627987), 

				// How you would like to style the map.
				// This is where you would paste any style found on Snazzy Maps.
				styles: [{"featureType":"water","elementType":"all","stylers":[{"hue":"#7fc8ed"},{"saturation":55},{"lightness":-6},{"visibility":"on"}]},{"featureType":"water","elementType":"labels","stylers":[{"hue":"#7fc8ed"},{"saturation":55},{"lightness":-6},{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"hue":"#83cead"},{"saturation":1},{"lightness":-15},{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"hue":"#f3f4f4"},{"saturation":-84},{"lightness":59},{"visibility":"on"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbbbbb"},{"saturation":-100},{"lightness":26},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#ffcc00"},{"saturation":100},{"lightness":-35},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#ffcc00"},{"saturation":100},{"lightness":-22},{"visibility":"on"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"hue":"#d7e4e4"},{"saturation":-60},{"lightness":23},{"visibility":"on"}]}]
		};

		// Get the HTML DOM element that will contain your map
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('map');

		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);


		var neighborhoods = [
				// Main
				{lat: 55.85, lng: 37.60, title: 'Адрес 1', content: 'район, улица, дом', icon: 'pin.png'},
				{lat: 55.82, lng: 37.72, title: 'Адрес 2', content: 'район, улица, дом', icon: 'pin.png'},
				{lat: 55.74, lng: 37.81, title: 'Адрес 3', content: 'район, улица, дом', icon: 'pin.png'},
				{lat: 55.63, lng: 37.66, title: 'Адрес 4', content: 'район, улица, дом', icon: 'pin.png'},
				{lat: 55.64, lng: 37.53, title: 'Адрес 5', content: 'район, улица, дом', icon: 'pin.png'},
				{lat: 55.73, lng: 37.44, title: 'Адрес 6', content: 'район, улица, дом', icon: 'pin.png'},
				{lat: 55.83, lng: 37.47, title: 'Адрес 7', content: 'район, улица, дом', icon: 'pin.png'},
		];

		/* Info windows
		=========================*/
		infoWindow = new google.maps.InfoWindow();

		function displayMarkers() {

			 // this variable sets the map bounds and zoom level according to markers position
			 var bounds = new google.maps.LatLngBounds();

			 // For loop that runs through the info on markersData making it possible to createMarker function to create the markers
			 for (var i = 0; i < neighborhoods.length; i++){

					var latlng = new google.maps.LatLng(neighborhoods[i].lat, neighborhoods[i].lng);
					var name = neighborhoods[i].title;
					var icon = neighborhoods[i].icon;
					var content = neighborhoods[i].content;

					createMarker(latlng, name, content, icon, i * 300);

					// Marker’s Lat. and Lng. values are added to bounds variable
					bounds.extend(latlng);
			 }
			 	$(document).off('scroll');
		}


		function createMarker(latlng, title, content, icon, timeout) {

				window.setTimeout(function() {
					 var marker = new google.maps.Marker({
							map: map,
							position: latlng,
							clickable: true,
							icon: {
								url: "img/" + icon
							},
							animation: google.maps.Animation.DROP
					 });

					 google.maps.event.addListener(marker, 'click', function() {
							var infoContent = '<div id="info_container">' +
							'<h3 class="info_title">' + title + '</h3><div>' + content + '</div></div>';

							infoWindow.setContent(infoContent);
							infoWindow.open(map, marker);
					 });
				}, timeout);
		}

		

		$(document).on('scroll', function(){
			var offs = $('#contacts').offset().top - 390;
			var documentScroll = $(this).scrollTop();
			if (documentScroll > offs){
				//setTimeout(displayMarkers, 2000)
				displayMarkers();
			}
		});
		

		// Enable scroll zoom after click on map
		map.addListener('click', function() {
			 map.setOptions({
					 scrollwheel: true
			 });
		});


		// Enable scroll zoom after drag on map
		map.addListener('drag', function() {
			 map.setOptions({
					 scrollwheel: true
			 });
		});


		// Disable scroll zoom when mouse leave map
		map.addListener('mouseout', function() {
			 map.setOptions({
					 scrollwheel: false
			 });
		});


		/* Map center on resize
		=========================*/
		var getCen = map.getCenter();

		google.maps.event.addDomListener(window, 'resize', function() {
				map.setCenter(getCen);
		});
}
