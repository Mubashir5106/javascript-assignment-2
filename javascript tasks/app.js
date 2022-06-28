//Random Dice Game

var randomNumber = Math.round(Math.random() * 6 ) ;


document.write("<h1>Rnadom Dice Game</h1>")
document.write("<h1>" + randomNumber + "</h1> <br>");



//Password Generator

var str ="JGKJGjkgkjKJGJKGkjkjgJgd365ytDDfe%$365GDhdKGKJgkjgKGgJHFhjfGHGf4pJHf7rUGgFR67yuFtUI87YG67vHvUYTr76Rghc5rtyF65e65d4354Xer";
var password = "";

for(var i = 0; i < 8 ;i++){
    var random = Math.floor(Math.random() * str.length);
    var round = Math.floor[random];
    password += str [random];
}


document.write("<h1> Password Generator </h1>")
document.write("<h2>" +password + "</h2><br>");



// Head & Tails
document.write("<h1>Head & Tail Game</h1>")


var Username = prompt("Enter Your Name");

var headtail = prompt("What Do You Want? H/T " );

var HT = ["H" , "T"];

var randomnumber = Math.floor(Math.random() * HT.length);

var word = HT[randomnumber];
if(headtail === word){
    document.write(`<h1>${Username} is winner</h1>`)
}

else if(headtail ==""){
    ans("Empty Input")
}

else if(headtail !=="H"|| headtail == "F" ){
    document.write(`<h1>${Username} Neither Head or Tail </h1> `)
}

else{
    document.write(`<h1>${Username} is lose </h1>`)
}