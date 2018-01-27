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
              console.log("marker position is" ,marker.position);  
      } // map "initmap" function end
