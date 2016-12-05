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

    var marker = new google.maps.Marker({
        position:latlon,
        map:mostrarMap,
        title:"Mapa"
    });
  
};

var error = function (error) {
    console.log(error);
};



$(document).ready(load);