   // to do list
   //================================================
   // creating new york times search page using locations on google maps 
   // number of artices reuturned (10 by default)
	// users clicks locations on map then store lat and long, in varible 
   // create a new york times query for that choosen location 
   // query can return number of nearest locations is (max 20 by default)
   // can choose radius 
   // each query can return 10 articles 
   // comment every line for easy understaning 
   //=============================================================================
   // Bouns features 
   // sorting articles by date 
   // provide users location (signing in to google account)
   // dates staring and ending 
   // topics 
   // sorting atricles by popularity
   // 






   // this displays map
    var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 35.855007, lng: -78.840645},
          zoom: 8
        });
          var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
