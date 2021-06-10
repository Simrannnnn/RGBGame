var numSquares=6;
var colors= generateRandomColors(numSquares);  // array list of random 6 colors
var squares= document.querySelectorAll(".square");// selects all divs with class square and stores in variable squares
var pickedColor= pickColor(); // stores the color to be guessed value
var colorDisplay= document.getElementById("colorDisplay"); // stores the value of the color to be guessed on display screen
var messageDisplay = document.querySelector("#message");// stores the value of message to be didplaye
var h1=document.querySelector("h1");
var resetButton= document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares=3;
  colors= generateRandomColors(numSquares);
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor;
  
  for(var i=0;i<squares.length;i++){
    if(colors[i]){ 
    squares[i].style.background=colors[i];
  }
  else{
    squares[i].style.display="none";
  }
}
});

hardBtn.addEventListener("click",function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares=6;
  colors= generateRandomColors(numSquares);
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor;
  
  for(var i=0;i<squares.length;i++){
    
    squares[i].style.background=colors[i];
    squares[i].style.display="block";
}
});

resetButton.addEventListener("click", function(){ // reset button
    colors= generateRandomColors(numSquares); //again generate 6 random colors

    pickedColor = pickColor(); // again store the value of the random color to be guessed

    colorDisplay.textContent=pickedColor; // again display the value to be guessed on the scrren

    this.textContent= "New Colors";

    messageDisplay.textContent ="";

    for(var i=0;i<squares.length;i++){
      squares[i].style.background=colors[i]; // again set 6 random colors on each grid
    }
    h1.style.background="steelblue"; // again set the background of h1 same as the body
});

colorDisplay.textContent= pickedColor; //display the value to be guessed on the screen

for(var i=0;i<squares.length;i++){
    squares[i].style.background=colors[i]; //set 6 random colors on each grid

    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.background; //storing the value of the clicked color in a different variable
        if(clickedColor===pickedColor){ // checking if the clicked color and the color to be guessed matches
            messageDisplay.textContent="Correct!";
            resetButton.textContent="Play Again?"
            changeColors(clickedColor); // change the colors of all the grids to the correct color
            h1.style.background= clickedColor; // change the background of h1 same as the correct color 
        }
        else{
           this.style.backgroundColor="#232323"; //change the color of the background black if wrong
           messageDisplay.textContent="Try Again";  
        }
    });

} 

function changeColors(color){ // for changing all grids to be of same color when the value matches

    for(var i=0;i<squares.length;i++){
      squares[i].style.backgroundColor= color;
    }
}

function pickColor(){ //randomly generates the color to be guesed value
var random= Math.floor(Math.random()*colors.length);
  return colors[random];
}

function generateRandomColors(num){ // creates an array of 6 random colors
  var arr=[];
  for(var i=0;i<num;i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var r= Math.floor(Math.random()*256) // evaluates a random value for r
  var g= Math.floor(Math.random()*256) // evaluates a random value for g
  var b= Math.floor(Math.random()*256) // evaluates a random value for b
  return "rgb(" +r + ", "+ g + ", " +b +")"; // returns the random string value of rgb // here spaces after comma are important as while comparing css automotiacally adds the commas in other function
}