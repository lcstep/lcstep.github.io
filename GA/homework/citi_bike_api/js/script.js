// As a User
// When I visit the site
// I expect to see the names of the all the stations

// As a User
// When I visit the site
// I expect to see only the first fifty stations on the list

// As a User
// When I visit the site
// I expect to see fifty stations with free bikes only

// $.ajax({
//   type: 'GET',
//   url: 'https://api.citybik.es/citi-bike-nyc.json',
//   success: function(stations) {
//     console.log(stations)

//    stations.forEach(freeBikes)
//     function freeBikes(station) {
//       if (station.free > 0) {
//         return true
//       }
//     }
//     var hasBikes = stations.filter(freeBikes);
//     console.log(hasBikes)
//     var shortlist = hasBikes.splice(0,50);
//     console.log(shortlist)
    
    
//     shortlist.forEach(wrapStation);
//     function wrapStation(station) {
      
//       var singles = "<li>" + station.name + "</li>"

      
//       $("#container ul").append(singles)
//     }

// }
// });



// Bonus

// As a User
// I want to get data from the newer API instead: https://api.citybik.es/v2/networks/citi-bike-nyc

// So that I can get the most accurate results


$.ajax({
  type: 'GET',
  url: 'https://api.citybik.es/v2/networks/citi-bike-nyc',
  success: function(citi) {
    // console.log(citi)


    var stations = citi.network.stations;
    // console.log(stations)

    stations.forEach(freeBikes)
    function freeBikes(station) {
      if (station.free_bikes > 0) {
        return true
      }
    }
    var hasBikes = stations.filter(freeBikes);
    // console.log(hasBikes)
   
    
      $("#bikes").change(function(){
        $("#container ul").empty();
        var bikeNum = parseInt($("select").val());
        // console.log(bikeNum)

        hasBikes.forEach(neededBikes)
        function neededBikes(station){
          if (station.free_bikes > bikeNum) {
            return true
          }

        }

        var enoughBikes = hasBikes.filter(neededBikes);
        // console.log(enoughBikes);

         var shortlist = enoughBikes.splice(0,50);
        // console.log(shortlist)
         shortlist.forEach(wrapStation);
    function wrapStation(station) {
      
      var singles = "<li>" + station.name + "</li>"
      
      
      $("#container ul").append(singles);
    }
    });

    // shortlist.forEach(wrapStation);
    // function wrapStation(station) {
      
  
    // }

}
});


  
// Unreal, Super Epic Bonus

// As a User
// When I select "number of free bikes" from a dropdown
// I see fifty stations where the "number of free bikes" is greater than my selection



