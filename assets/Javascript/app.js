   // to do list
   //================================================
   // creating new york times search page using locations on google maps (geo api)
	// users clicks locations on map then search the state where user clicked and store in varible 
   // create a new york times query for that choosen location (semantic api) 
   // using geo api get concept (state) to create our new york times query semantic api
   // number of artices reuturned (10 by default)
   // comment every line for easy understaning 
   //=============================================================================
   // Bouns features 
   // sorting articles by date 
   // provide users location (signing in to google account)
   // dates staring and ending 
   // topics 
   // sorting atricles by popularity
  
// =============================

// - Click on MAP
// - Using google map API (Object name = google.maps.MouseEvent | property = latLng) figure out the latitude and longitude of the click location.
// - Using Reverse Geocoding API figure out the state (adminstartive level 1)where the latiude and longitude exists (Click location)
// - Query the New York Times Geo_API for the state to get the concept name (State name)
// - Query the New York Times Semantic API for the concept name (State) to get the 10 articles. 


   // this function displays map and adds functionality
      function initMap() {
       var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 35.855007, lng: -78.840645},
          zoom: 5

        });
            
        
              map.addListener('click', function(e) {
                placeMarkerAndPanTo(e.latLng, map);

              });
            }

            function placeMarkerAndPanTo(latLng, map) {
              var marker = new google.maps.Marker({
                position: latLng,
                map: map
              });
              map.panTo(latLng);   

              var lat = marker.getPosition().lat();
              var lng = marker.getPosition().lng();
                     
                     
              console.log("marker position is" ,lat ,lng); 

              var geocoder = new google.maps.Geocoder;
              var infowindow = new google.maps.InfoWindow;

              function geocodeLatLng(geocoder, map, infowindow) {
              geocoder.geocode({'location': latLng}, function(results, status) {
                if (status === 'OK') {
                  console.log(results[0]);
                  console.log(results[0].formatted_address);
                  var state;
                  getState: for (let i = 0; i < results[0].address_components.length; i++) {
                    for (let j = 0; j < results[0].address_components[i].types.length; j++) {
                      if (results[0].address_components[i].types[j] === "administrative_area_level_1") {
                        state = results[0].address_components[i].long_name;
                        getArticles(state);
                        break getState;
                      }
                    }
                  }
                  console.log(state);
                }
              });
            }
            geocodeLatLng(geocoder, map, infowindow);
            
          
      } // map "initmap" function end
