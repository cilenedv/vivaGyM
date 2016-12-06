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
	});
	$("#guardar-Oferta").click(function(e){

	});


})
