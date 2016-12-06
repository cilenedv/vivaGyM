// function dropdown

$('.dropdown-toggle').dropdown();

;(function(){
	window.addEventListener("load", listaEditarEntidad);
		var edListEnt = document.getElementById("editar-lista-entidades");
		var btnEditNombre = document.querySelectorAll(".lap-editor");

		function listaEditarEntidad(){
			edListEnt.addEventListener("click", mostrarBtnEdit);
		}

		function mostrarBtnEdit(){
			// btnEditNombre.classList.remove("edit-hidden");
			var i;
    		for (i = 0; i < btnEditNombre.length; i++) {
     		   	btnEditNombre[i].classList.remove("edit-hidden");
    		}
		}

})();

var editarLista = function(){
	$(".lap-editor").click(lapizEditor);
}

$(document).ready(editarLista);

var lapizEditor = function(){
	var contenEdit = $(this).prev();
		$(contenEdit).attr("contenteditable","true");
		$(contenEdit).focus();
		$(contenEdit).parent().addClass("inputCajaEdit");
}
	$(".np-list").keypress(function(e){
		$(this).attr("contenteditable","false");
		$(this).parent().removeClass("inputCajaEdit");
		$(this).next().remove();	
		return e.which != 13;
	});
	// 
// $(".lap-editor").ready(function(){
// 	$(".lap-editor").click(function(){
// 		var contenEdit = $(this).prev();
// 		$(contenEdit).attr("contenteditable","true");
// 		$(contenEdit).focus();
// 		$(contenEdit).parent().addClass("inputCajaEdit");
// 		$(contenEdit).keypress(clickEditado);
// 	});
// 			// $(contenEdit).keypress(function(e){
// 			// 	if (e.keycode == 13) {
// 			// 		$(this).removeAtrr("contenteditable");
// 			// 		$(this).parent().removeClass("inputCajaEdit");
// 			// 	}
// 			// })
// })
// 		var clickEditado = function(e){
// 			if (e.keycode == 13) {
// 				$(this).removeAtrr("contenteditable");
// 				$(this).parent().removeClass("inputCajaEdit");
// 			}
// 		}



