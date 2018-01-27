  var markers = [];
  
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

                function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }

            function placeMarkerAndPanTo(latLng, map) {
              var marker = new google.maps.Marker({
                position: latLng,
                map: map
              });
              map.panTo(latLng);   
              setMapOnAll(null);
             
              markers.push(marker);
              
              var lat = marker.getPosition().lat();
              var lng = marker.getPosition().lng();
                     
                     
              console.log("marker position is" ,lat ,lng); 
          
      } // map "initmap" function end
