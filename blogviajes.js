$(function(){
	$("section article div p:first-child").on("click", function(){
		$(this).parent().toggleClass("anima");
	});
})