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
        var wayland = {lat: 42.5678, lng: -77.5897	};
        var hudson = {lat: 42.2529, lng: -73.7910	};
        var rowe = {lat: 42.6934, lng: -72.8995	};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: newyork,
          mapTypeId: 'terrain'
        });
        var marker = new google.maps.Marker({
          position: newyork,
          map: map
        });
      }