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
		var spanTres= $("<span></span>").addClass("glyphicon glyphicon-plus").attr("aria-hidden","true").attr("id", "agregar-" + contador);
		ancorTres.append(spanTres);
	};

});
