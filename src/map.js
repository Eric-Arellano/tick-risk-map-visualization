var map;

function initMap() {
    var jaliscoCoast = new google.maps.LatLng(19.67, -104.67);

    map = new google.maps.Map(document.getElementById('map'), {
        center: jaliscoCoast,
        zoom: 9
    });

    // set up search box
    var input = document.getElementById('location-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

}