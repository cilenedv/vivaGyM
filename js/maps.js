var load = function() {
    if (navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(cargaExitosa, error);
    }
};

var cargaExitosa = function(posicion) {
    var lat = posicion.coords.latitude;
    var lon = posicion.coords.longitude;
    var latlon = new google.maps.LatLng(lat, lon);
    var mapa = document.getElementById('mapa')

    var myOptions = {
        center:latlon,zoom:14,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControl:false,
        zoomControl:false,
        streetViewControl:false,
    };
    
    var mostrarMap = new google.maps.Map(document.getElementById('mapa'), myOptions);

    var iconBase = "img/";
    var marker = new google.maps.Marker({
    position: latlon,
    map: mostrarMap,
    icon: iconBase + 'user.png'
  });
  
};

var error = function (error) {
    console.log(error);
};

$('.search1').on('click', function() {
    var address = $('.search').val();
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address}, geocodeResult);
});
 
var geocodeResult= function(results, status) {
    if (status == 'OK') {
        var mapOptions = {
            center: results[0].geometry.location,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map($(".mapa").get(0), mapOptions);
        map.fitBounds(results[0].geometry.viewport);
        var iconBase1 = "img/";
        var markerOptions = { position: results[0].geometry.location, icon: iconBase1 + 'circulo.png' }
        var marker = new google.maps.Marker(markerOptions);
        marker.setMap(map);
        
    } else {

        alert("Geocoding no tuvo éxito debido a: " + status);
    }


}

$(document).ready(load);
