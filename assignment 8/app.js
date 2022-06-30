//Chapyter 26-30
//Question 1
var number = +prompt("Enter A Possitive Value");

document.write("<h1>Chapter 26-30</h1>")
document.write("<h1>Question 1</h1>")
document.write("<b>Number : " + number + "</b><br>" );
document.write("<b>Round Of Value : " + Math.round(number) + "</b><br>");
document.write("<b>Floor Value : " + Math.floor(number) + "</b><br>");
document.write("<b>Ceil Value : " + Math.ceil(number) + "</b><br>");

//Question 2

var number = +prompt("Enter A Negative Floating Value");

document.write("<h1>Question 2</h1>")
document.write("<b>Number : " + number + "</b><br>" );
document.write("<b>Round Of Value : " + Math.round(number) + "</b><br>");
document.write("<b>Floor Value : " + Math.floor(number) + "</b><br>");
document.write("<b>Ceil Value : " + Math.ceil(number) + "</b><br>");

//Question 3
document.write("<h1>Question 3</h1>")


var number = prompt("Enter A Absolute Value");
if(number < 0){
    var absolutenum = number * -1;
    document.write("<b>The Absolute value of : " + number + " Is " + absolutenum +"</b><br>" );

}
else{
    document.write("<b>The Absoulute Value Of : " + number + " Is " + number + "</b><br>")
}

//Question 4

var randomNumber = Math.round(Math.random() * 6 ) ;

document.write("<h1>Question 4</h1>")
document.write("<h2>Rnadom Dice Game</h2>")
document.write("<b> Random Dice value is : " + randomNumber + "</b><br>");

//Question 5

document.write("<h1>Question 5</h1>")

for (i = 1; i < 3; i++) {
    var HT = ["Heads","Tails"] 
    var randomNumber = Math.floor(Math.random() * HT.length);
    var word = HT[randomNumber];
    document.write( "<b>" + randomNumber+1 + "</b><br>" + "<b>Random coin value : " + word + "</b><br>")

}


//Question 6

var randomNumber = Math.round(Math.random() * 100 ) ;

document.write("<h1>Question 6</h1>")
document.write("<b> Random  value Between 0 to 100 is  : " + randomNumber + "</b><br>");


//Question 7

userInput = prompt("Enter your weight in kilogram");
document.write("<h1>Question 7</h1>")
document.write("<b>" + parseFloat(userInput)+" Kilogram </b><br>");

//Question 8

var randomNumber = Math.round(Math.random() * 10 +1 ) ;
var userInput = +prompt("Guess A Number");

if(userInput === randomNumber){
    alert("Congratulation ! You Win .");
}
else{
    alert("Try Again")
}
