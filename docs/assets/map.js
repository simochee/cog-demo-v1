function initMap() {
    var opts = {
        zoom: 16,
        center: new google.maps.LatLng(33.9540708, 131.2764096),
        disableDefaultUI: true
    };
    var map = new google.maps.Map(document.getElementById('mapCanvas'), opts);
}