// As a User
// When I visit the site
// I expect to see the names of the all the stations

// As a User
// When I visit the site
// I expect to see only the first fifty stations on the list

// As a User
// When I visit the site
// I expect to see fifty stations with free bikes only

// Bonus

// As a User
// I want to get data from the newer API instead: https://api.citybik.es/v2/networks/citi-bike-nyc
// So that I can get the most accurate results

// Unreal, Super Epic Bonus

// As a User
// When I select "number of free bikes" from a dropdown
// I see fifty stations where the "number of free bikes" is greater than my selection

$.ajax({
  type: 'GET',
  url: 'http://api.citybik.es/citi-bike-nyc.json',
  success: function(stations) {
    console.log(stations)
    
    
    var shortlist = stations.splice(0,50);
    
    shortlist.forEach(wrapStation);
    function wrapStation(station) {
    	// var freeBikes = station.bikes > 0;
    	// console.log(freeBikes)
    	var singles = "<li>" + station.name + "</li>"
    	console.log(singles)
    	$("#container ul").append(singles)
    }

   
  },

});


