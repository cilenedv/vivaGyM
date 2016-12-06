//Validando Formulario

function validacion() {
		var nombre=$("#name").val();
		var direccion=$("#direccion").val();
    var contacto=$("#contacto").val();
		var regexNombre = /^[a-zñáéíóúü]+$/gi;
		var regexDireccion = /^[a-zñáéíóúü]+$/gi;
    var regexContacto=/^[a-zñáéíóúü]+$/gi;


  if (nombre.split(' ').join('').length == 0 || direccion.split(' ').join('').length == 0 ||  contacto.split(' ').join('').length == 0) {
    //Si no se cumple la condicion...
    alert("Llene los todos los campos por Favor");
    return false;
  }
  else if ((nombre.split(' ').join('').length<5 || nombre.split(' ').join('').length>30) || (direccion.split(' ').join('').length<5 || direccion.split(' ').join('').length>50) || (contacto.split(' ').join('').length<5 || contacto.split(' ').join('').length>30)) { 
    alert("Datos Incorrectos");
  }
  else if (!regexNombre.test(nombre.split(' ').join('')) || !regexDireccion.test(direccion.split(' ').join('')) || !regexContacto.test(contacto.split(' ').join(''))){
    alert("Ingrese datos correctos");
    return false;
  }
  if( !$("#select1").val()=='0'){
    alert("Elija una opción");
  }else{
    return false;
  }
  if( $("#select2").val()){
    alert("Elija una opción");
  }else{
    return false;
  }
  if( $("#select3").val()){
    alert("Elija una opción");
  }else{
    return true;
  }
    return true;
}

$("#guardar").click(function(evento){
  if(validacion()){
    window.location='index.html';
  }else{
    return false;
  }
});