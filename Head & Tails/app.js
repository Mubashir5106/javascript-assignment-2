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