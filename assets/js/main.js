function initMap() {
	var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;


	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
		center: {lat: -9.1191427, lng: -77.0349046},
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl: false
	});
	directionsDisplay.setMap(map);

	function buscar(){
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
		}
	}


	document.getElementById("encuentrame").addEventListener("click", buscar);

	var latitud, longitud;
	var funcionExito = function(posicion) {
		latitud = posicion.coords.latitude;
		longitud = posicion.coords.longitude;

		var miUbicacion = new google.maps.Marker({
			position: {lat:latitud, lng:longitud},
			animation: google.maps.Animation.DROP,
			map: map
		});

		map.setZoom(15);
		map.setCenter({lat:latitud, lng:longitud});
	}

	var funcionError = function (error) {
		alert("Tenemos un problema con encontrar tu ubicación");
	}


		var start = document.getElementById('origen').value;
		var end = document.getElementById('destino').value;
	 	var searchorigen = new google.maps.places.SearchBox(origen);
		var searchdestino = new google.maps.places.SearchBox(destino);

		var direcciones = new google.maps.DirectionServices;
		var request = {
	    origin:start,
	    destination:end,
	    travelMode: 'DRIVING'
	  	};
	  
	  	directionsService.route(request, function(response, status) {
	    if (status == 'OK') {
	      directionsDisplay.setDirections(response);
	    }
	  });
	

	/* BUSCADOR */
		
		var searchorigen = new google.maps.places.SearchBox(origen);
		var searchdestino = new google.maps.places.SearchBox(destino);

		
  
};
