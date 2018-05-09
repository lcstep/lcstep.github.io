// As a User
// When I view the site
// I see a map

// As a User
// When I view the site
// I expect to only see NYC

// As a User
// When I view the site
// I want to see a marker on NYC

// Bonus:

// As a User
// When I view the map
// I want to see the terrain view

// More Bonus:

// As a User
// When I press a button
// I see 3 markers appear on the map

// Unbelievable, Seriously???? Bonus

// As a User
// When I view the site
// All the CitiBike NYC stations appear on the map as markers

// Hint: Make sure to use this URL: https://api.citybik.es/v2/networks/citi-bike-nyc

      function initMap() {
        var newyork = {lat: 40.7128, lng: -74.0060	};
        var newhaven = {lat: 41.3083, lng: -72.9279	};
        var madison = {lat: 41.2960, lng: -72.5754	};
        var wallingford = {lat: 41.4570, lng: -72.8231	};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: newyork,
          mapTypeId: 'terrain'
        });
        var marker = new google.maps.Marker({
          position: newyork,
          map: map
        });
        var marker2 = new google.maps.Marker({
          position: newhaven,
          map: map,
          "visible": false
        });
        var marker3 = new google.maps.Marker({
          position: madison,
          map: map,
          "visible": false
        });
        var marker4 = new google.maps.Marker({
          position: wallingford,
          map: map,
          "visible": false
        });
       
         
$.ajax({
  type: 'GET',
  url: 'https://api.citybik.es/v2/networks/citi-bike-nyc',
  success: function(citi) {
    

     var stations = citi.network.stations;
     console.log(stations);

     stations.forEach(citiMarkers);


     function citiMarkers(station) {
        
       new google.maps.Marker({
          position: {lat: station.latitude, lng: station.longitude},
          map: map
        })
      }

   
  
}
});
       
$("button").click(function() {
          marker2.setVisible(true);
          marker3.setVisible(true);
          marker4.setVisible(true); // maps API hide call
        });
      }




