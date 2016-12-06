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

	function crearEntidad(){
		var seccion =$("<div></div>").addClass("col-lg-7 col-md-7 col-sm-7");
		$("#insert").prepend(seccion);
		var image =$("<img>").addClass("img-responsive").src("img/circulo.png");
		seccion.prepend(image);
		var divText=$("<div></div>").addClass("col-lg-10 col-md-10 col-sm-10");
		seccion.append(divText);
		var textName= $("<label></label>").text(nameEntidad).attr("for", "checkbox-" + contador)
		divText.append(textName);
		var diconoUno =$("<div></div>").addClass("col-lg-1 col-md-1 col-sm-1");
		$("#insert").append(diconoUno);
		var check =$("<div></div>").addClass("col-lg-1 col-md-1 col-sm-1")
		$("#insert").append(check);
		var box=$("<input>").attr("type", "checkbox").id("checkbox-" + contador)
		check.append(box);
		var ancorUno =$("<a></a>");
		diconoUno.append(ancorUno);
		var spanUno= $("<span></span>").addClass("glyphicon glyphicon-pencil").attr("aria-hidden","true");
		ancorUno.append(spanUno);
		var diconoDos =$("<div></div>").addClass("col-lg-1 col-md-1 col-sm-1");
		$("#insert").append(diconoDos);
		var ancorDos =$("<a></a>");
		diconoDos.append(ancorDos);
		var spanDos= $("<span></span>").addClass("glyphicon glyphicon-plus").attr("aria-hidden","true");
		ancorDos.append(spanDos);
		

		contador++;
	};

	//function saveInfo(){
	//	var atributo = $("#nameAttribute-1").val();
	// preguntar de nombre de etiquetas
	//};

	$("#guardarNuevo").click(function(){
		if(nameEntidad.length == 0){
			alert("Campo Obligatorio");
		}
		else {
			crearEntidad();
			$("#nombreEntidad") = "";
		};
	});
	$("#guardar").click(function(){
		if(nameEntidad.length == 0){
			alert("Campo Obligatorio");
		}
		else{
			crearEntidad();
			$(".crear").toggleClass("show");
		};
	});

});
