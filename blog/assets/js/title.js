$(document).ready(function() {
	$("body").mousemove(function(e){
		$("body").css('background-position',(e.pageX - 250)+'px '+(e.pageY - 250)+'px');
	});
});