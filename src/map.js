var map;

function initMap() {
    var jaliscoCoast = new google.maps.LatLng(19.67, -104.67);

    map = new google.maps.Map(document.getElementById('map'), {
        center: jaliscoCoast,
        zoom: 9
    });

    var riskLayer = new google.maps.KmlLayer({
        url: 'https://raw.githubusercontent.com/Eric-Arellano/tick-risk-map-visualization/master/data/zonas-de-riesgo.kml?time=' + new Date().getTime(),
        map: map
    });
    riskLayer.setMap(map);

    // set up search box
    var input = document.getElementById('location-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds);
    });

    // respond to user selection
    var markers = [];
    searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function(marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });



}