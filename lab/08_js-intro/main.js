// console.log('hello world');

// var myStudentDebt = 800;
// myStudentDebt = myStudentDebt - 100;

// var myLuckyNumbers = [ 1, 2, 3, 4];

// console.log(myLuckyNumbers);

// myLuckyNumbers[2] = 28;
// console.log(myLuckyNumbers[2]);

// function addFive(x) {
// 	return x + 5;
// }

// function add(x,y) {
// 	console.log(x + y);
// }

// addFive(10);
// add(8,9);
// add("hello" + " world ");

// var myAge = 19;

// if(myAge < 21) {
// 	console.log("can't party");
// } else {
// 	console.log("time 2 party");
// }

// var hamburgers = 0;

//LOOPS

// for (var i = 0; i < 10; i = i + 1) {
// 	//some code here
// 	hamburgers++;
// }

//TOOTSIE ROLL

// console.log("How many licks does it take to get to the center of a tootsie pop?");

// function askMrOwl(numOfLicks) {
// 	for (var licks = 1; licks <= numOfLicks; licks++) {
// 		if (licks < numOfLicks) {
// 			console.log("ahhh " + licks)
// 		} else {
// 			console.log("CRUNCH!")
// 		}
// 	}
// }

// askMrOwl(18);


// # # # #
//  # # # #
// # # # #
//  # # # # 




function makeCheckerboard(width,height) {

	var checkerboard = "";

	for (row = 0; row < height; row++) {
		if (row % 2) {
			for (column = 0; column < width; column++) {
				if (column % 2) {
					checkerboard = checkerboard + "#";
				} else {
					checkerboard = checkerboard + " ";
				}
			}
		} else {
			for (column = 0; column < width; column++) {
				if (column % 2) {
					checkerboard = checkerboard + " ";
				} else {
					checkerboard = checkerboard + "#";
				}
			}
		}

		checkerboard = checkerboard + "\n";
	}
	console.log(checkerboard);
}






