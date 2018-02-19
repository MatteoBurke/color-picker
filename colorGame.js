var numberOfSquares = 6;
var colors = [];
var pickedColor;
// Selectors
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
  	reset();
}

function setupModeButtons(){
	// mode button event listeners
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
	 		modeButtons[0].classList.remove("selected");
	  		modeButtons[1].classList.remove("selected");
	  		this.classList.add("selected");

	  		// the ternary way to write the commented if statement, does the same thing
	  		// if textContent is Easy, number of squares is 3 else 6
	  		this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;

	 		 // if(this.textContent === "Easy"){
	  		// 	numberOfSquares = 3;
	 		 // } else {
	  		// 	numberOfSquares = 6;
	  		// }
	 	 	reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
  		// Add click listeners to each square
  		squares[i].addEventListener("click", function(){
	  	 	// Grab colour of clicker square
	  	  	var clickedColor = this.style.backgroundColor;
	  	  	// Compare color to pickerColor variable and if the user guesses correctly display message
	  	  	// and change h1 color
	  	 	if(clickedColor === pickedColor){
	  	  		messageDisplay.textContent = "Correct!";
	  	  		resetButton.textContent = "Play Again?";
	  	  		changeColors(clickedColor);
	  	  		h1.style.backgroundColor = clickedColor;
	  	  	} else{
	  	  	// if the user guesses wrong, the square fades to background colour and message is displayed
	  	  	this.style.backgroundColor = "#232323";
	  	  	messageDisplay.textContent = "Try Again";
  	  }
  	});
  }
}

function reset(){
	// generate random colours depending on numberOfSquares variable
	colors = generateRandomColors(numberOfSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change color display to match pickedColor
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	// reset message of "try again" to nothing
	messageDisplay.textContent = "";
	// change color of squares with for loop
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
		  squares[i].style.display = "block";
		  squares[i].style.background = colors[i];
		} else {
		  squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "#steelblue";

}

// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numberOfSquares = 3;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		} 	else {
// 		    squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numberOfSquares = 6;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 		}
	
// });

// functionality of reset button, using listener
resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	// loop through all squares
	for(var i = 0; i < colors.length; i++){
		// change each color to match given color
		squares[i].style.backgroundColor = color;
	}

}

// function for picking a colour using math.floor to take off decmial numbers
// the colours is then returned
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = [];
	// repeat num times
	for(var i = 0; i < num; i++){
		// get the random color and push it into array
		arr.push(randomColor());
	}
	// return the array
	return arr;
}

function randomColor(){
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}