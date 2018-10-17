var map, infoWindow;
//These are the pins with the lats and longs
function initMap() {
	var Qudos = {lat: -33.844, lng: 151.062};
	var Inglewood = {lat: 33.961, lng: -118.352};
	var RodLaver = {lat: -37.822, lng: 144.979};
	var Yokohama = {lat: 35.512, lng:139.620};
	var DowntownLasVegas = {lat: 36.170,lng: -115.133};
	var SaltLake = {lat: 40.6576285, lng: -112.0354941};
	var RedRocks = {lat:39.6655606,lng: -105.2059085};
	var Reading = {lat:51.4639155,lng:-0.9858004};
	var Leeds = {lat:53.8656814,lng:-1.3841962};
	var RockAmSee = {lat: 47.6668961,lng: 9.2141073};
	var SzigetFest = {lat:47.5505797,lng: 19.0540044};
	
	//This is all the styling for the custom theme
	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: -34.397, lng: 150.644},
	zoom: 6,
	backgroundColor: 'black',
	styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#631b6d"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]
	});
	
		infoWindow = new google.maps.InfoWindow;
		//these place all the markers, they have event listeners to listen for the clicks on the pins
		var marker1 = new google.maps.Marker({
		position: Qudos,
		map: map,
		icon: "assets/MUSEPIN.png",
		});
		marker1.addListener('click', function() {
		infoWindow.setContent('Qudos Bank Arena - 16/12/17');
        infoWindow.open(map, marker1);
        });
		var marker2 = new google.maps.Marker({
		position: Inglewood,
		map: map,
		icon: "assets/MUSEPIN.png",
		});
		marker2.addListener('click', function() {
		infoWindow.setContent('KROQ\'S Almost Acoustic Christmas - 09/12/17');
        infoWindow.open(map, marker2);
        });
		
		var marker3 = new google.maps.Marker({
		position: RodLaver,
		map: map,
		icon: "assets/MUSEPIN.png",
		});
		marker3.addListener('click', function() {
		infoWindow.setContent('Rod Laver Arena - 18/12/17');
        infoWindow.open(map, marker3);
        });
		
		var marker4 = new google.maps.Marker({
		position: Yokohama,
		map: map,
		icon: "assets/MUSEPIN.png",
		});
		marker4.addListener('click', function() {
		infoWindow.setContent('Yokohama Arena - 13/11/17 & 14/11/17');
        infoWindow.open(map, marker4);
        });
		
		var marker5 = new google.maps.Marker({
		position: DowntownLasVegas,
		map: map,
		icon: "assets/MUSEPIN.png",
		});
		marker5.addListener('click', function() {
		infoWindow.setContent('Life Is Beautiful Festival - 23/09/17');
        infoWindow.open(map, marker5);
        });
		
		var marker6 = new google.maps.Marker({
		position: SaltLake,
		map: map,
		icon: "assets/MUSEPIN.png",
		});
		marker6.addListener('click', function() {
		infoWindow.setContent('USANA Amphitheatre - 20/09/17');
        infoWindow.open(map, marker6);
        });
		
		var marker7 = new google.maps.Marker({
		position: RedRocks,
		map: map,
		icon: "assets/MUSEPIN.png",
		});
		marker7.addListener('click', function() {
		infoWindow.setContent('Red Rocks Amphitheatre - 18/09/17');
        infoWindow.open(map, marker7);
        })
		
		var marker8 = new google.maps.Marker({
		position: Reading,
		map: map,
		icon: "assets/MUSEPIN.png",
		});
		marker8.addListener('click', function() {
		infoWindow.setContent('Reading Festival - 27/08/17');
        infoWindow.open(map, marker8);
        })
		
		var marker9 = new google.maps.Marker({
		position: Leeds,
		map: map,
		icon: "assets/MUSEPIN.png",
		});
		marker9.addListener('click', function() {
		infoWindow.setContent('Leeds Festival - 25/08/17');
        infoWindow.open(map, marker9);
        })
		
		var marker10 = new google.maps.Marker({
		position: RockAmSee,
		map: map,
		icon: "assets/MUSEPIN.png",
		});
		marker10.addListener('click', function() {
		infoWindow.setContent('Rock Am See Festival - 20/08/16');
        infoWindow.open(map, marker10);
        })
		
		var marker11 = new google.maps.Marker({
		position: SzigetFest,
		map: map,
		icon: "assets/MUSEPIN.png",
		});
		marker11.addListener('click', function() {
		infoWindow.setContent('Sziget Festival - 13/08/16');
        infoWindow.open(map, marker11);
        })

		//This is where the geolocation occurs
		if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
		var pos = {
		lat: position.coords.latitude,
		lng: position.coords.longitude
		};

		infoWindow.setPosition(pos);
		infoWindow.setContent('Your current location');
				infoWindow.open(map);
				
		}, 
		function() {
		handleLocationError(true, infoWindow, map.getCenter());
		});
		} else {
			  handleLocationError(false, infoWindow, map.getCenter());
		}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
	'Error: The Geolocation service failed.' :
	'Error: Your browser doesn\'t support geolocation.');
	infoWindow.open(map);
}
