  var markers = [];
  
   // this function displays map and adds functionality
      function initMap() {
       var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 35.855007, lng: -78.840645},
          zoom: 5

        }); // map object end

              map.addListener('click', function(e) {
                placeMarkerAndPanTo(e.latLng, map);

              }); // click function end
            }

                function setMapOnAll(map) {
        for (let i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        } // loop end

      } // setMapOnAll function end 

            function placeMarkerAndPanTo(latLng, map) {

              var marker = new google.maps.Marker({
                position: latLng,
                map: map
              }); // marker object end
              
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
                  //console.log(results[0]);
                  //console.log(results[0].formatted_address);
                  var state;
                  getState: for (let i = 0; i < results[0].address_components.length; i++) {
                    for (let j = 0; j < results[0].address_components[i].types.length; j++) {
                      if (results[0].address_components[i].types[j] === "administrative_area_level_1") {
                        state = results[0].address_components[i].long_name;
                        getArticles(state);
                        break getState;

                      } // if statement end
                    } // for loop end
                  } // for loop end

                  console.log(state);
                } // if statement end
              }); // geocoder.geocode function end
            } // geocodeLatLng function end

      
                
                  //console.log(state);

            geocodeLatLng(geocoder, map, infowindow);
            

      } // map "initmap" function end
         


function getArticles(state) {

  var conceptName;
  //var state = "New York";
  var urlGeo = "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/semantic/v2/geocodes/query.json";
  urlGeo += '?' + $.param({
    'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
    'name': state,
    'feature_class': "A"
  });
  $.ajax({
    url: urlGeo,
    method: 'GET'
  }).done(function(result) {
    //console.log(result);
    conceptName = result.results[0]["concept_name"];
    console.log(conceptName);
    for (let i = 0; i < conceptName.length; i++) {
      if (conceptName[i] === " ") {
        conceptName = conceptName.slice(0, i) + "%20" + conceptName.slice(i+1);
      }
    }
    var urlSem = "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/semantic/v2/concept/name/nytd_geo/" + conceptName;
    urlSem += '?' + $.param({
    'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
    'fields': "article_list"
    });
    console.log(urlSem);
    $.ajax({
      url: urlSem,
      method: 'GET'
    }).done(function(result) {


      //console.log(result);

      $("#well-section").empty();
      renderArticles(result.results[0].article_list.results);

      console.log("urlSem result is ", result);

    }).fail(function(err) {
      throw err;
    });
  }).fail(function(err) {
    throw err;
  });


}


  function renderArticles(arr) {
    for (let i = 0; i < arr.length; i++) {
      var panel = $("<div>");
      panel.attr("class", "panel");
      var heading = $("<div>");
      heading.attr("class", "panel-heading");
      panel.append(heading);
      var link = $("<a>");
      link.attr("href", arr[i].url);
      link.attr("target", "_blank");
      heading.append(link);
      var title = $("<strong>");
      title.attr("class", "panel-title");
      title.text(arr[i].title);
      link.append(title);
      var body = $("<div>");
      body.attr("class", "panel-body");
      body.text(arr[i].body);
      panel.append(body);
      $("#well-section").append(panel);
    }
  }
$("#clear").on("click", function() {

  $("#well-section").empty();
});