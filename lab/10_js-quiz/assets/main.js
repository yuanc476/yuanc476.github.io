// ----------------------------------------------
function makeCheckerboard(width, height) {
	var checkerboard = "";
	for (row = 0; row < height; row++) {
		if (row % 2) {
			for (column = 0; column < width; column++) {
				if (column % 2) {
					checkerboard = checkerboard + " ";
				} else {
					checkerboard = checkerboard + "#";
				}
			}
		} else {
			for (column = 0; column < width; column++) {
				if (column % 2) {
					checkerboard = checkerboard + "#";
				} else {
					checkerboard = checkerboard + " ";
				}
			}
		}

		checkerboard = checkerboard + "\n";
	}
	console.log(checkerboard);
}
// ----------------------------------------------

// ----------------------------------------------
function makePyramid(height) {
	var pyramid = "";
	for (row = 0; row < height; row ++) {
		if (row == 1) {
			pyramid = "#";
		} else if (row == 2) {
			pyramid = "##";
		} else if (row == 3) {
			pyramid = "###";
		} else if (row == 4) {
			pyramid = "####";
		} else if (row == 5) {
			pyramid = "#####";
		}
	}
	console.log(pyramid)
}




//Checkerboard Button
// ----------------------------------------------
	var checkerboardBtn = document.getElementById("checkerboardBtn");

	checkerboardBtn.addEventListener("click", function(event){
		makeCkeckerboard(6,6);
	});
// ----------------------------------------------
