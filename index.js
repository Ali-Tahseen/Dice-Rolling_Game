var source=["dice6.png", "dice5.png", "dice4.png", "dice3.png", "dice2.png", "dice1.png"];
var output = [];

var player_1_name = prompt("Enter your player-1 name?");
document.querySelector(".player1").innerHTML = player_1_name;
var player_2_name = prompt("Enter your player-2 name?");
document.querySelector(".player2").innerHTML = player_2_name;
// var matches = prompt("Enter how many matches do you want to play?");
// var i = 0;


function game(output){


var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1);
var randomNumber_1 = source[randomNumber1];

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2);
var randomNumber_2 = source[randomNumber2];


document.querySelector(".img1").setAttribute("src", randomNumber_1);
document.querySelector(".img2").setAttribute("src", randomNumber_2);

if(randomNumber_1 > randomNumber_2){
  document.querySelector("h1").innerHTML = player_1_name + " wins!🚩";
}
else if(randomNumber_2 > randomNumber_1){
  document.querySelector("h1").innerHTML = "🚩" +player_2_name + " wins!";
}
else if(randomNumber_1 === randomNumber_2){
  document.querySelector("h1").innerHTML = "Draw!"
}
}



//     var number0fPeople = names.length;
//     var randomPersonPosition = Math.floor(Math.random()*number0fPeople);
//     var randomPerson = names[randomPersonPosition];

//     return randomPerson + " is going to buy lunch today."
