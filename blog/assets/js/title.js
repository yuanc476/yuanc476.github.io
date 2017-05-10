$(document).ready(function() {
	if (window.innerWidth > 760) {

		$("body").mousemove(function(e){
			$("body").css('background-position',(e.pageX - 200)+'px '+(e.pageY - 200)+'px');
		});

	}
});