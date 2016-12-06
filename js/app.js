// function dropdown

$('.dropdown-toggle').dropdown();

var editarLista = function(){
	$("#editar-lista-entidades").click(botonLapiz);
	$(".lap-editor").click(lapizEditor);
	$(".np-list").keypress(guardadoEditado);
	$(".np-list").keypress(horaEditar);
	$(".np-list").keypress(fechaEditar);	
}

$(document).ready(editarLista);

var botonLapiz = function(){
	var btnEditNombre = $(".lap-editor").toggle();
	var i;
    for (i = 0; i < $(btnEditNombre).length; i++) {
      	$(btnEditNombre)[i].classList.remove("edit-hidden");
   	}
}

var lapizEditor = function(){
	var contenEdit = $(this).prev();
		$(contenEdit).attr("contenteditable","true");
		$(contenEdit).focus();
		$(contenEdit).parent().addClass("inputCajaEdit");
}

var guardadoEditado = function(e){
	if (e.which != 13) {
		return true;
	}
	else{
		$(this).attr("contenteditable","false");
		$(this).parent().removeClass("inputCajaEdit");	
	}
}

var horaEditar = function(){
	var fecha = new Date().toLocaleTimeString();
	// var hora = fecha.getHours();
	// var minuto = fecha.getMinutes();
	// if (minuto < 10) {
	// minuto = "0" + minuto;
	// 		}
	// var horaImprimible = hora + " : " + minuto;
	$("#horaEditada").text(fecha);
    // contenedor.insertBefore(horario, contenedor.childNodes[0]).classList.add("horaBox");
}

var fechaEditar = function(){
	// $.date = function(dateObject) {
    	var d = new Date();
    	var day = d.getDate();
    	var month = d.getMonth() + 1;
    	var year = d.getFullYear();
    	if (day < 10) {
        	day = "0" + day;
    	}
    	if (month < 10) {
        	month = "0" + month;
    	}
    	var date = day + "/" + month + "/" + year;
		// return date;
	// }
	$("#fechaEditar").text(date);
}

