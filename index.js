
var randomNumber1=Math.floor(Math.random()*6);
randomNumber1=randomNumber1+1;

var randomDice1="dice"+randomNumber1+".png"; //dice1.png
// var image1= "./images/"+ randomDice1; // ./images/.dice1.png;

document.querySelector(".img1").setAttribute("src",randomDice1);


var randomNumber2=Math.floor(Math.random()*6);
randomNumber2=randomNumber2+1;

var randomDice2="dice"+randomNumber2+".png"; //dice1.png
// var image2= "./images/"+ randomDice2; // ./images/.dice1.png;

document.querySelector(".img2").setAttribute("src",randomDice2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}else{
    document.querySelector("h1").innerHTML="Player 2 Wins";
}