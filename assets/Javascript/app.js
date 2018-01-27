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
