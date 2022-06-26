//Chapter 21-23 
// Question 1
var firstname = prompt("Enter Your First Name");
var lastname = prompt("Enter Your Last Name");

var result = (firstname + " " + lastname);

document.write("<h1>Question 1</h1>");
document.write("Welcome " + result);

document.write(result + "<br>");

//Question 2

var favphone = prompt("What is Your Favourite Mobile Phone Model");
var length = favphone.length

document.write("<h1>Question 2</h1>");
document.write("My Favourite Phone is : <b> " + favphone + "  </b>" + "<br>" + "Length Of String is :<b>" + length + "</b><br/>")

//Question 3

var str = "Pakistani";
var val = str.indexOf("n");

document.write("<h1>Question 3</h1>");
document.write("String :" + str + "<br/> " + "Index Of 'n': " + val + "<br/>");

//Question 4

var str = "Hello World";
var val = str.lastIndexOf('l');

document.write("<h1>Question 4</h1>");
document.write("String :" + str + "<br/> " + "Index Of 'l': " + val + "<br/>");

//Question 5

var thirdIndex = "Pakistani";
var str = thirdIndex.charAt(3);

document.write("<h1>Question 5</h1>");
document.write("String :" + thirdIndex + "<br/> " + "Charactor At Index 3 : " + str + "<br/>");

//Question 6

var firstname = prompt("Enter Your First Name");
var lastname = prompt("Enter Your Last Name");

var result = (firstname.concat(lastname));

document.write("<h1>Question 6</h1>");
document.write("Welcome " + result);

document.write(result + "<br>");

//Question 7

var City = "Hyderabad";
var ReplacCity = City.replace("Hyderabad" , "Islamabad");

document.write("<h1>Question 7</h1>");
document.write("City : " + City + "<br/>" +  "After Replacement : " + ReplacCity + "<br/>" );


//Question 8

var message = "Ali and Sami are best friends. They play cricket and football together.";

var replace = message.replace(/and/g , "&")

document.write("<h1>Question 8</h1>");
document.write("Current Message  : " + message + "<br>" + "After replacement: " + replace + "<br/>");

//Question 9

var stringNumber = "472";
var numberToString = +stringNumber;

document.write("<h1>Question 9</h1>");
document.write("Value : " + stringNumber + "<br>" + "Type :  " + typeof (stringNumber) + "<br>");
document.write("Value : " + numberToString + "<br>" + "Type :  " + typeof (numberToString) + "<br/>");

//Question 10

var UserIpnut = prompt("Enter a Letter or Word")

var UpperLetterWord = UserIpnut.toLocaleUpperCase();

document.write("<h1>Question 10</h1>");
document.write("UserInput : " + UserIpnut + "<br>" + "Upper Case  :  " + UpperLetterWord + "<br/>");


//Question 11


var userInput1 = prompt("Enter a Word");
document.write("<h1>Question 11</h1>");
document.write("UserInput : " + userInput1 + "<br/>");

var userInput1 = userInput1.split('');
for(i = 0; i < userInput1.length;i++){
    userInput1[i] = userInput1[i].charAt(0).toUpperCase()+userInput1[i].slice(1) + " ";
    

    document.write(userInput1[i] + "<br/>")
}


//Question 12

var num = 35.36;
document.write("Number : " + num + "<br/>");
var Strings = '' + num;
var removingdot = Strings.replace(".","");

document.write("<h1>Question 12</h1>");
document.write("Result : " + removingdot + "<br>");



//Question 13


//ASCI code of "!" is = 33
//ASCI code of "," is = 44
//ASCI code of "." is = 46
//ASCI code of "@" is = 64


if(flag === false){
    alert("Valid Password")
}
var userPass = prompt("Enter a name : ")
var flag = false
var splitPass = userPass.split('');

for(i=0; i<splitPass.length; i++){

    if(  (splitPass[i]==="!") || ( splitPass[i]===",") || ( splitPass[i]===".")|| ( splitPass[i]==="@")  ){

        flag = true;
        alert("Please enter a valid username");
    }
}
if(flag===false){

    alert("Valid password")
}


//Question 14

var a = ["cake", "pastry","cookie","chips" , "juice" , "sweets" , "tofies" ,"choclates", "buiscuits" , "sandwitch" ,"pizza" , "coldrinks" , "icecream"];
var snaks = prompt("Enter Items You Want").toLowerCase();

if(a.indexOf(snaks) !== -1){
    document.write("<h1>Question 14</h1>");
    document.write(snaks + " is <b>avalaible</b> at index " + a.indexOf(snaks))
}
else{
    document.write("We are sorry " + snaks + "is <b>not available</b> in our bakery");
}


//Question 15

var pass = prompt("Enter a Password")
var a = ["A", "B" , "C" , "D" , "E" , "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ];
var b = [ "a" , "b" , "c" , "d" , "e" , "f", "g","h","i" ,"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var c = ["0","1","2" ,"3","4","5","6","7","8","9","10"];

var isNumber = false;
var isAlpha = false;
var isInvalid = false;

if (c.indexOf(pass[0]) !== -1){
  alert ("number is not allowed")
}

else if(pass.length < 6){
   alert("Password should be at least 6")
}

else {
 for (i = 0; i < pass.length; i++){

  if(a.indexOf(pass[i]) !== -1){
   isAlpha = true;
}

else if(b.indexOf(pass[i]) !== -1){
   isAlpha = true
}

 else if(c.indexOf(pass[i]) !== -1){
  isNumber = true


}

else{
      isInvalid = true
}

 }
 
if (isNumber && isAlpha && !isInvalid){
    alert("correct answer!")
  }else{
     alert("password is wrong/special characters are not allowed")
  }
  

 }



//Question 16

var university = "University Of Karachi";

var splitvalues = university.split('').join("<br>");

document.write("<h1>Question 16</h1>");
document.write(splitvalues);


//Question 17

var userinput = "Pakistan";
var lastcharactor = (userinput.length)-1

document.write("<h1>Question 17</h1>");
document.write("User Input : " + userinput + "<br>");
document.write("Last Charactor : " + userinput[lastcharactor] + "<br>");


//Question 18

var a = "The quick brown fox jumps over the lazy dog";

var lowest = a.toLowerCase();
var splitedvalue = lowest.split(" ");
var countstring = 'the';

var count = 0;
for (var i = 0; i < splitedvalue.length; i++){
    

if (countstring==(splitedvalue[i]))
    count++;
}


document.write("<h1>Question 18</h1>");
document.write("Text : " + a + "<br>");
document.write("There are " + count + "occurrence(s) of the word 'the' " + "<br>")



