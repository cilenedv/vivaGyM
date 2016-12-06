function validacionOferta() {
  var nombre=$("#nombreOferta").val();
  var direccion=$("#direccionOferta").val();
  var latitud=$("#latitudOferta").val();
  var longitud=$("#longitudOferta").val();
  var regexNombre = /^[a-zñáéíóúü]+$/gi;
  var regexDireccion = /^[a-zñáéíóúü]+$/gi;
  var regexLatitud=/^-?\d*\.?\d*$/;
  var regexLongitud=/^-?\d*\.?\d*$/;



 if (nombre.split(' ').join('').length == 0 || direccion.split(' ').join('').length == 0 ||  latitud.length == 0 || longitud.length==0) {
   //Si no se cumple la condicion...
   alert("Llene los todos los campos por Favor");
   return false;
 }
 else if (!regexNombre.test(nombre.split(' ').join('')) || !regexDireccion.test(direccion.split(' ').join('')) || !regexLatitud.test(latitud.split(' ').join('')) || !regexLongitud.test(longitud.split(' ').join(''))){
   alert("Ingrese datos correctos");
   return false;
 }
 else{
    alert("Oferta Creada");
 }
}
$("#guardar-Oferta").click(function(evento){
 if(validacionOferta()){
   window.location='index.html';
 }else{
   return false;
 }
});
$("#nuevo-Oferta").click(function(evento){
 if(validacionOferta()){
   window.location='index.html';
 }else{
   return false;
 }
});
$("#nuevo-Oferta").click(function(evento){
    $("#nombreOferta").val("");
    $("#direccionOferta").val("");
    $("#latitudOferta").val("");
    $("#longitudOferta").val("");
});
$("#agregar").click(function(evento){
    $("#nombreOferta").val("");
    $("#direccionOferta").val("");
    $("#latitudOferta").val("");
    $("#longitudOferta").val("");
});

/*validar zona*/
function validacionZona() {
  var nombre=$("#nombreZona").val();
  var direccion=$("#direccionZona").val();
  var latitud=$("#latitudZona").val();
  var longitud=$("#longitudZona").val();
  var regexNombre = /^[a-zñáéíóúü]+$/gi;
  var regexDireccion = /^[a-zñáéíóúü]+$/gi;
  var regexLatitud=/^-?\d*\.?\d*$/;
  var regexLongitud=/^-?\d*\.?\d*$/;


 if (nombre.split(' ').join('').length == 0 || direccion.split(' ').join('').length == 0 ||  latitud.length == 0 || longitud.length==0) {
   //Si no se cumple la condicion...
   alert("Llene los todos los campos por Favor");
   return false;
 }
 else if (!regexNombre.test(nombre.split(' ').join('')) || !regexDireccion.test(direccion.split(' ').join('')) || !regexLatitud.test(latitud.split(' ').join('')) || !regexLongitud.test(longitud.split(' ').join(''))){
   alert("Ingrese datos correctos");
   return false;
 }
 else{
    alert("Zona Creada");
 }
}
$("#guardar-Zona").click(function(evento){
 if(validacionZona()){
   window.location='index.html';
 }else{
   return false;
 }
});
$("#nuevo-Zona").click(function(evento){
 if(validacionZona()){
   window.location='index.html';
 }else{
   return false;
 }
});
$("#nuevo-Zona").click(function(evento){
    $("#nombreZona").val("");
    $("#direccionZona").val("");
    $("#latitudZona").val("");
    $("#longitudZona").val("");
});
$("#agregarZona").click(function(evento){
    $("#nombreZona").val("");
    $("#direccionZona").val("");
    $("#latitudZona").val("");
    $("#longitudZona").val("");
});

/*validar comisarias*/

function validacionComisaria() {
  var nombre=$("#nombreComisaria").val();
  var direccion=$("#direccionComisaria").val();
  var latitud=$("#latitudComisaria").val();
  var longitud=$("#longitudComisaria").val();
  var regexNombre = /^[a-zñáéíóúü]+$/gi;
  var regexDireccion = /^[a-zñáéíóúü]+$/gi;
  var regexLatitud=/^-?\d*\.?\d*$/;
  var regexLongitud=/^-?\d*\.?\d*$/;


 if (nombre.split(' ').join('').length == 0 || direccion.split(' ').join('').length == 0 ||  latitud.length == 0 || longitud.length==0) {
   //Si no se cumple la condicion...
   alert("Llene los todos los campos por Favor");
   return false;
 }
 else if (!regexNombre.test(nombre.split(' ').join('')) || !regexDireccion.test(direccion.split(' ').join('')) || !regexLatitud.test(latitud.split(' ').join('')) || !regexLongitud.test(longitud.split(' ').join(''))){
   alert("Ingrese datos correctos");
   return false;
 }
 else{
    alert("Comisaria Creada");
 }
}
$("#guardar-Comisaria").click(function(evento){
 if(validacionComisaria()){
   window.location='index.html';
 }else{
   return false;
 }
});
$("#nuevo-Comisaria").click(function(evento){
 if(validacionComisaria()){
   window.location='index.html';
 }else{
   return false;
 }
});
$("#nuevo-Comisaria").click(function(evento){
    $("#nombreComisaria").val("");
    $("#direccionComisaria").val("");
    $("#latitudComisaria").val("");
    $("#longitudComisaria").val("");
});
$("#agregarComisaria").click(function(evento){
    $("#nombreComisaria").val("");
    $("#direccionComisaria").val("");
    $("#latitudComisaria").val("");
    $("#longitudComisaria").val("");
});

/*vaidar centros comerciales*/

function validacionComercial() {
  var nombre=$("#nombreComercial").val();
  var direccion=$("#direccionComercial").val();
  var latitud=$("#latitudComercial").val();
  var longitud=$("#longitudComercial").val();
  var regexNombre = /^[a-zñáéíóúü]+$/gi;
  var regexDireccion = /^[a-zñáéíóúü]+$/gi;
  var regexLatitud=/^-?\d*\.?\d*$/;
  var regexLongitud=/^-?\d*\.?\d*$/;


 if (nombre.split(' ').join('').length == 0 || direccion.split(' ').join('').length == 0 ||  latitud.length == 0 || longitud.length==0) {
   //Si no se cumple la condicion...
   alert("Llene los todos los campos por Favor");
   return false;
 }
 else if (!regexNombre.test(nombre.split(' ').join('')) || !regexDireccion.test(direccion.split(' ').join('')) || !regexLatitud.test(latitud.split(' ').join('')) || !regexLongitud.test(longitud.split(' ').join(''))){
   alert("Ingrese datos correctos");
   return false;
 }
 else{
    alert("Comercial Creada");
 }
}
$("#guardar-Comercial").click(function(evento){
 if(validacionComercial()){
   window.location='index.html';
 }else{
   return false;
 }
});
$("#nuevo-Comercial").click(function(evento){
 if(validacionComercial()){
   window.location='index.html';
 }else{
   return false;
 }
});
$("#nuevo-Comercial").click(function(evento){
    $("#nombreComercial").val("");
    $("#direccionComercial").val("");
    $("#latitudComercial").val("");
    $("#longitudComercial").val("");
});
$("#agregarComercial").click(function(evento){
    $("#nombreComercial").val("");
    $("#direccionComercial").val("");
    $("#latitudComercial").val("");
    $("#longitudComercial").val("");
});