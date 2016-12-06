// function dropdown

$('.dropdown-toggle').dropdown();

var editarLista = function(){
	$("#editar-lista-entidades").click(botonLapiz);
	$(".lap-editor").click(lapizEditor);
	$(".np-list").keypress(guardadoEditado);
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



