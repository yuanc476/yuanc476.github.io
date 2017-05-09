$(document).ready(function() {
	if (window.innerWidth > 760) {

		$("body").mousemove(function(e){
			$("body").css('background-position',(e.pageX - 250)+'px '+(e.pageY - 250)+'px');
		});
		
	}

});