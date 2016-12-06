$(document).ready(function (){
	$("#burger").click(function(e){
		e.preventDefault();
		$("#slide").slideToggle();
	});
	$(".list").click(function(e){
		e.preventDefault();
		$("#lista-entidad").toggleClass("show");
	});
	$("#cuadro").click(function(e){
		e.preventDefault();
		$(".crear").toggleClass("show");
	});
	$("#closed").click(function(e){
		e.preventDefault();
		$(".crear").toggleClass("show");
	})
	var contador=10;
	var nameEntidad = $("#nombreEntidad").val();

	//function saveInfo(){
	//	var atributo = $("#nameAttribute-1").val();
	// preguntar de nombre de etiquetas
	//};

	$("#guardarNuevo").click(function(){
		if(!$("#nombreEntidad").val().length == 0){
			crearEntidad();
			$("#nombreEntidad").val("");
			contador++;
		}
		else {
			alert("Campo Obligatorio");
		}
	});
	$("#guardar").click(function(){
		if(!$("#nombreEntidad").val().length == 0){
			crearEntidad();
			$(".crear").toggleClass("show");
		}
		else{
			alert("Campo Obligatorio");
		}
	});

	function crearEntidad(){
		var seccion =$("<div></div>").addClass("col-lg-7 col-md-7 col-sm-7");
		$("#insert").append(seccion);
		var divImg=$("<div></div>"). addClass("col-lg-2 col-md-2 col-sm-2")
		seccion.prepend(divImg);
		var image =$("<img>").addClass("img-responsive").attr("src", "img/circulo.png");
		divImg.prepend(image);
		var divText=$("<div></div>").addClass("col-lg-10 col-md-10 col-sm-10");
		seccion.append(divText);
		var textName= $("<label></label>").text($("#nombreEntidad").val()).attr("for", "checkbox-" + contador)
		divText.append(textName);
		var diconoUno =$("<div></div>").addClass("col-lg-1 col-md-1 col-sm-1");
		$("#insert").append(diconoUno);
		var ancorUno =$("<a></a>");
		diconoUno.append(ancorUno);
		var spanUno= $("<span></span>").addClass("glyphicon glyphicon-th-list list").attr("aria-hidden","true");
		ancorUno.append(spanUno);

		var check =$("<div></div>").addClass("col-lg-1 col-md-1 col-sm-1")
		$("#insert").append(check);
		var box=$("<input>").attr("type", "checkbox").attr("id", "checkbox-" + contador);
		check.append(box);

		var diconoDos =$("<div></div>").addClass("col-lg-1 col-md-1 col-sm-1");
		$("#insert").append(diconoDos);
		var ancorDos =$("<a></a>");
		diconoDos.append(ancorDos);
		var spanDos= $("<span></span>").addClass("glyphicon glyphicon-pencil").attr("aria-hidden","true");
		ancorDos.append(spanDos);

		var diconoTres =$("<div></div>").addClass("col-lg-1 col-md-1 col-sm-1");
		$("#insert").append(diconoTres);
		var ancorTres =$("<a></a>");
		diconoTres.append(ancorTres);
		var spanTres= $("<span></span>").addClass("glyphicon glyphicon-plus").attr("aria-hidden","true").attr("id", "agregar-" + contador).attr("data-target" , "#myModal-"+ contador).attr("data-toggle","modal");
		ancorTres.append(spanTres);
	};

});
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




