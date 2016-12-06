// function dropdown

$('.dropdown-toggle').dropdown();

// $("#editar-lista-entidades").click(function(){
// 	$(".edit-hidden").toggle();
// });

// $(".edit-hidden").click(function(){
// 	// var npList = $(".np-list").val();
//     var txt2 = $("<input></input>").attr("id","textBox").attr("type","text").attr("val"," ");
//     $(".campo-edit").empty();
//     $(".campo-edit").append(txt2);
// })

// $("#textBox").keyup(function(e) {

//     if (e.keycode == 13) {
//         // $('<div><span>' + $('#textBox').val() + '</span>&nbsp;<a href="javascript:;" onclick="$(this).parent().remove();">X</a>').appendTo();
//         $("#textBox").val("");
//     };
// })

;(function(){
	window.addEventListener("load", listaEditarEntidad);
		var edListEnt = document.getElementById("editar-lista-entidades");
		var btnEditNombre = document.querySelectorAll(".lap-editor");
		// var entradaDos = document.getElementById("dos");
		// var entradaTres = document.getElementById("tres");

		// var container = document.getElementById("container");

		// var contenedor = document.getElementById("contenedor");
		// var contenedorTodo = document.getElementById("form");
		// var tituloAndLink = document.getElementById("input");
		// var textAreaDiario = document.getElementById("textarea");
		// var botonDiario = document.getElementById("button");
		// var botonRetro = document.getElementById("buttonRetro");

		function listaEditarEntidad(){
			edListEnt.addEventListener("click", mostrarBtnEdit);
		}

		function mostrarBtnEdit(){
			// btnEditNombre.classList.remove("edit-hidden");
			var i;
    		for (i = 0; i < btnEditNombre.length; i++) {
     		   	btnEditNombre[i].classList.remove("edit-hidden");
    		}
			// btnEditNombre.addEventListener("click",campoEdit);
		}

		$(".lap-editor").click(function(){
			var contenEdit = $(this).prev();
			$(contenEdit).attr("contenteditable","true");
			// $(contenEdit).focus();
		})

		// function imprimirMeme(e){
		// 	e.preventDefault();
		// 	var imagenMeme = document.createElement("img");
		// 	imagenMeme.setAttribute("src", tituloAndLink.value);
		// 	vacios();
		// 	contenedor.insertBefore(imagenMeme, contenedor.childNodes[0]).classList.add("col-xs-12","col-sm-12","col-md-12");
		// 	botonRetro.classList.remove("ocultarElem");
		// 	contenedorTodo.classList.add("ocultarElem");
		// 	botonRetro.addEventListener("click", volver);
		// }

		// function ocultarCarruselDiario(e){
		// 	e.preventDefault();
		// 	carrusel.classList.add("ocultarElem");
		// 	contenedorTodo.classList.remove("ocultarElem");
		// 	botonDiario.addEventListener("click", imprimirDiario);			
		// }

		// function imprimirDiario(e){
		// 	e.preventDefault();
		// 	var titleDiario = document.createElement("div");
		// 	var cajaDiario = document.createElement("div");
		// 	cajaDiario.insertBefore(titleDiario, cajaDiario.childNodes[0]).innerText = tituloAndLink.value;
		// 	cajaDiario.appendChild(document.createTextNode(textAreaDiario.value));
		// 	vacios();
		// 	contenedor.insertBefore(cajaDiario, contenedor.childNodes[0]);
		// 	contenedorTodo.classList.add("ocultarElem");
		// 	botonRetro.classList.remove("ocultarElem");
		// 	botonRetro.addEventListener("click", volver);
		// }

		// function volver(){
		// 	carrusel.classList.remove("ocultarElem");
		// 	this.parentElement.firstChild.classList.add("ocultarElem");
		// 	this.classList.add("ocultarElem");
		// }
		// function contenidos(){
		// 	sectionContenedor.insertBefore(contenedor, sectionContenedor.childNodes[0]);
		// 	contenedor.insertBefore(tituloAndLink, contenedor.childNodes[0]);
		// 	contenedor.insertBefore(textAreaDiario, contenedor.childNodes[1]);
		// 	contenedor.appendChild(botonDiario).innerText = "Guardar";
		// 	tituloAndLink.classList.add("form-control");
		// 	tituloAndLink.setAttribute("autofocus", "focus");

		// 	botonDiario.classList.add("btn", "btn-secundary");
		// 	textAreaDiario.classList.add("form-control");
		// 	textAreaDiario.setAttribute("rows", "14");
		// }



})();

