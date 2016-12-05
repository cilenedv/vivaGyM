$(document).ready(function (){
	$("#burger").click(function(e){
		e.preventDefault();
		$("#slide").slideToggle();
	});

	$(".list").click(function(e){
		e.preventDefault();
		$("lista-entidad").toggleClass("show");
	})
})