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
		var image =$("<img>").addClass("img-responsive").attr("src", "img/schooolbus.png");
		divImg.prepend(image);
		var divText=$("<div></div>").addClass("col-lg-10 col-md-10 col-sm-10");
		seccion.append(divText);
		var textName= $("<label></label>").text($("#nombreEntidad").val()).attr("for", "checkbox-" + contador)
		divText.append(textName);
		var diconoUno =$("<div></div>").addClass("col-lg-1 col-md-1 col-sm-1");
		$("#insert").append(diconoUno);
		var ancorUno =$("<a></a>").attr("id","list-"+contador);
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
	// lista
	$(".list").click(function(){
		$(".container-lista-entidades").toggleClass("show");
		$("#slide").toggleClass("reducir");
	});
	$('.dropdown-toggle').dropdown();
	editarLista();
});

// function dropdown

// function dropdown

$('.dropdown-toggle').dropdown();

var editarLista = function(){
	$("#editar-lista-entidades").click(botonLapiz);
	$(".lap-editor").click(lapizEditor);
	$(".np-list").keypress(guardadoEditado);
	$(".np-list").keypress(horaEditar);
	$(".np-list").keypress(fechaEditar);
	$(".save").click(salirEdicion);	
}

$(document).ready(editarLista);

var botonLapiz = function(){
	var btnEditNombre = $(".lap-editor");
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
	$("#horaEditada").text(fecha);
}

var fechaEditar = function(){
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
	$("#fechaEditar").text(date);
}

var salirEdicion = function(){
	$(".lap-editor").addClass("edit-hidden");
}

// $("#guardar-btn").click(function(){
// 	alert("click");
// 	var nombre=$("#name").val();
// 	var direccion=$("#direccion").val();
// 	var ubicacion=$("#select2").val();
// 	var contacto=$("#contacto").val();

// 	localStorage.setItems("name",nombre);
// 	localStorage.setItems("direccion",direccion);
// 	localStorage.setItems("ubicacion",ubicacion);
// 	localStorage.setItems("contacto",contacto);

// 	var guardarData=function () {
// 	var div =document.createElement("div");
// 	var contenedor=document.getElementById("data-save");
// 	contenedor.appendChild(div);
// 	}
// });



