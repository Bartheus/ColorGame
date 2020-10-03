var colors = []; //generateRandomColors(6);

var numSquares = 6;
var pickedColor; //= pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init ();


function init (){
		
		for (var i=0; i< modeButtons.length; i++) {
		
		modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

		/*if(this.textContent === "Easy"){
			numSquares = 3;
		}
		else {
			numSquares =6;
		}*/
		
		reset();

		//figur out how many squeres to show
		//pick new colors
		// pick a new picked color
		//uptade page to reflect changes

	});
}

for (var i = 0; i<squares.length; i++) {
	/*add initial colors to squares
	squares[i].style.backgroundColor = colors[i];*/

	//add click listreners to squares 

	squares[i].addEventListener("click", function(){
	// grab color of clicked square
	var clickedColor = this.style.backgroundColor;
	//compare color to picked Color
	if(clickedColor === pickedColor) {
		messageDisplay.textContent = "Correct!";
		resetButton.textContent = "PLAY AGAIN";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
	}
	else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";
	}
	});
}
	reset();
}


function reset() {
	//generate all  new colors 
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor =pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0 ; i < squares.length ; i++) {
		
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else {
			squares[i].style.display= "none";
		}
	}
	//changin backgroung of h1 to standard
	h1.style.backgroundColor = "steelblue";

}
/*var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	//generete new colors 
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	//pick a new picked color
	pickedColor = pickColor();
	//showing new picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";

	//hide 3 squares at the bottom
	for (var i = 0 ; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");

	numSquares = 6;
	colors = generateRandomColors(numSquares);
	//pick a new picked color
	pickedColor = pickColor();
	//showing new picked color
	colorDisplay.textContent = pickedColor;
	//setting message display to empty string 
	messageDisplay.textContent = "";
	//settin text of button to new colors imitatiuon of rexeting game
	resetButton.textContent = "New Colors";
	//hide 3 squares at the bottom
	for (var i = 0 ; i < squares.length; i++){
	
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		
	}

});

*/


resetButton.addEventListener("click", function(){
	reset();
	/*
	generate all  new colors 
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor =pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";

	messageDisplay.textContent = "";
	//change colors of squares
	for(var i =0 ; i < squares.length ; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	//changin backgroung of h1 to standard
	h1.style.backgroundColor = "steelblue";
     */
});



//colorDisplay.textContent = pickedColor;



function changeColors(color) {
	//loop through all squares
	for( var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//add random colors to array
	//reapeat num times 
	for( var i = 0; i < num; i++){

		//get random color and push into array
		arr.push(randomColor())


	}
	//return thath array
	return arr;
}

function randomColor(){
	//pick a "red" frrom 0  -255 
	var r = Math.floor(Math.random() * 256);
	//pick a "green" frrom 0  -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" frrom 0  -255
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}