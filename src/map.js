var jaliscoCoast = {lat: 19.67, lng: -104.67};
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: jaliscoCoast,
        zoom: 9
    });
}