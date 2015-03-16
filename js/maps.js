            // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 17,
					scrollwheel: false,
					
                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(55.7496907,37.537322),

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: []
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);
				  
/* 				var image = new google.maps.MarkerImage('img/marker.png',      
					new google.maps.Size(178, 58),      
					new google.maps.Point(0,0),      
					new google.maps.Point(0, 32));
				
				var shadow = new google.maps.MarkerImage('img/marker.png',      
					new google.maps.Size(178, 58),
					new google.maps.Point(0,0),
					new google.maps.Point(0, 32));
				 
				  var shape = {
					coord: [1, 1, 1, 20, 18, 20, 18 , 1],
					type: 'poly'
				  }; */
				  
                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(55.7495563,37.5373005),
                    map: map,
                    title: 
					'г. Москва, Пресненская набережная, 12, ММДЦ "Москва-Сити" Башня Федерация'
                });
            }
			