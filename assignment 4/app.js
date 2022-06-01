//chapter 9-11
document.write("<h1>Chaapter 9-11</h1>");
//Question 1

var city = prompt ("Enter City name");

if (city === "karachi" || "Karachi"){
    alert("Welcome to the City Of Lights")
}


//Question 2

var gender = prompt("Enter yor Gender");

if (gender === "male"){
    alert("Good Morning !, Sir");
}

else if(gender === "female"){
    alert("Good Morning !, Maam");
}

else {
    alert("Gender Not Found");
}


//Question 3

var traficlight = prompt("Enter Trafic Signal Light");

if(traficlight === "red" || traficlight === "Red"){
    alert("Must Stop");
}

if(traficlight === "yellow" || traficlight === "Yellow"){
    alert("Ready To Move");
}

if(traficlight === "green" || traficlight === "Green"){
    alert("Move Now");
}



//Question 4

var fuel = prompt("Enter Remaining Fuel In Car in Liters");

if(fuel === "0.25" || fuel === "0.25L"){
    alert("Please refill the fuel in your car");
}


//Question 5

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}


var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}


var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}

if (c === 13){
alert("condition 2 is true");
}

if (++c < 14){
alert("condition 3 is true");
}

if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}

if (false){
 alert("false")
}

if("car" < "cat"){
alert("car is smaller than cat");
}

document.write("<h1>Question 5</h1>");

//Question 6

var totalmarks = 300;
var subject1 = prompt("Enter Yor First Subject Marks");
var subject2 = prompt("Enter Yor Second Subject Marks");
var subject3 = prompt("Enter Yor Third Subject Marks");
var subject1Marks = Number(subject1)
var subject2Marks = Number(subject2)
var subject3Marks = Number(subject3)
var MarksObtained = subject1Marks + subject2Marks + subject3Marks;
var percentage = MarksObtained / totalmarks * 100;

if(percentage >=80){
    Grade = "A-one";
    Remarks = "Excellent";
}

else if(percentage >=70){
    Grade = "A";
    Remarks = "Good";
}

else if(percentage >=60){
    Grade = "B";
    Remarks = "You Need To Improve"
}

if(percentage <=60){
    Grade = "Fail";
    Remarks = "Sorry";
}


document.write("<h1>Question 6</h1>");
document.write("<h1>Mark Sheet</h1>");
document.write("<br>");
document.write("<b>Total Marks :</b>" + totalmarks);
document.write("<br>");
document.write("<b>Marks Obtained :</b>" + MarksObtained);
document.write("<br>"); 
document.write("<b>Percentage :</b>" + percentage + "%");
document.write("<br>");
document.write("<b>Grade :</b>" + Grade);
document.write("<br>");
document.write("<b>Remarks :</b>" + Remarks);



//Question 7

var number = 10;
var userinput = +prompt("Enter The Number");

if(number === userinput){
    alert("BINGO ! Correct Answer")
}

else if (userinput+1 === number){
    alert("Close Enough The Correct Answer")
}

else{
    alert("Incorrect Answer")
}


//Question 8

var num = prompt("Enter A Number To Check Is Divisible By 3");
if (num % 3 === 0){
    alert("Your Given Number Is Divisible By 3")
}

else{
    alert("Your Given Number Is Not Divisible By 3")
}


//Question 9

var num = prompt("Enter A Number");
if(num % 2 === 0 , 2 , 4 , 6 , 8 ,10){
    alert(num + "Is A Even Number");
}

else{
    alert(num + "Is A Odd Number");
}


//Question 10

var temperature = prompt("Enter The Temperature");
var T = Number (temperature)

if (T > 40){
    alert("It's Too Hot Outside");
}

else if (T > 30){
    alert("The Weather Today Is Normal");
}

else if (T > 20){
    alert("Today's Weather Is Cool");
}

else if(T > 10){
    alert("OMG! Today's Weather Is So Cool");
}


//Question 11

var a = prompt("Enter First Number");
var b = prompt("Enter second Number");
var opreator = prompt("Enter Opreator Opreation(+, -, *, /, %)");
var num1 = Number(a);
var num2 = Number(b);

if (opreator === "+"){
    alert("Your Ans Is " + (num1+num2))
}

if (opreator === "-"){
    alert("Your Ans Is " + (num1-num2))
}

if (opreator === "*"){
    alert("Your Ans Is " + (num1*num2))
}

if (opreator === "/"){
    alert("Your Ans Is " + (num1/num2))
}

if (opreator === "%"){
    alert("Your Ans Is " + (num1%num2))
}



//Chapter 12-13
//Question 1
document.write("<h1>Chapter 12-13</h1>");
var UserInput = prompt("Enter A Charactor i.e : A-Z , a-z , 0-9");
var ASCII = UserInput.charCodeAt(0);

if (ASCII >= 65 && ASCII <= 90){
    alert("Given Input Is UpperCase Letter");
}
else if (ASCII >= 97 && ASCII <= 122){
    alert("Your Input Is LowerCase Letter");
}
else if (ASCII >= 48 && ASCII <= 57){
    alert("Your Input Is A Number")
}
else{
    alert("Something Went Wrong\n                                               Try Again");
}


//Question 2

var number1 = prompt("Enter First Number");
var number2 = prompt("Enter Second Number");

if(number1 > number2){
    alert(number1 + "  is greater than  " + number2)
}
else if(number1 = number2){
    alert(number1 + "  is equal to  " + number2)
}
else{
    alert(number2 + "  is greater than  " + number1)
}


//Question 3

var numbers = prompt("Enter A Number");

if(numbers > 0){
    alert("Possitive Number");
}
else if (numbers < 0){
    alert("Negative Number");
}
else if (numbers === "0") {
    alert("Zero")
}
else{
    alert("Invailed Input")
}


//Question 4

var character = prompt("Enter A Correct Vowels Letter i.e :(a-z , A-Z)");

if((character == "a") || (character == "A") || (character == "e") || character == "E" || character == "i" || character == "I" || character == "0" || character == "O" || character == "u" || character == "U"){
    alert("True")
}
else{
    alert("False")
}


//Question 5

var password = "MUBASHIR";
var Input = prompt("Enter Correct Password");

if(Input === password){
    alert("Correct! The password you entered matches the original password .");
}
else if(Input === ""){
    alert("Please Enter Your Password");
}
else{
    alert("Incorrect Password!")
}


//Question 6

var greeting;
    var hour = 13;
    if (hour < 18) {
        greeting = "Good day";
        alert(greeting)
    }
    else {
        greeting = "Good evening";
        alert(greeting)
    }
    document.write("<h1>Question 6</h1>");

 //Question 7   

 var time = 1900;
 if (time >= 0000 && time < 1700){
     alert("Good Morning!");
 }

 else if(time >= 1200 && time < 1700){
     alert("Good Afternoon!");
 }

 else if (time >= 1700 && time < 2100){
     alert("Good Morning!");
 }

 else if (time >= 2100 && time <= 2359){
     alert("Good Night")
 }
 document.write("<h1>Question 7</h1>");

 
 //Chapter 14-16
 //Question 1

 document.write("<h1>Chapter 14-16</h1>");

 var LiteralArray = [ ];
 alert("LiteralArray = [ ]");
 document.write("<h1>Question 1</h1>");

 //Question 2

var ObjectArrays = new Array();
alert("ObjectArray = new Array()");
document.write("<h1>Question 2</h1>");

//Question 3

var stringarray = ["Karachi" , "Lahore" , "Islamabad"];
document.write("<h1>Question 3</h1>");

//Question 4 

var NumberArray = [1,2,3,4,5,6];
document.write("<h1>Question 4</h1>");

//Question 5

var booleanArray = [true,false];
document.write("<h1>Question 5</h1>");
//Question 6

var mixedArray = ["a",123,"true","karachi"];
document.write("<h1>Question 6</h1>");

//Question 7

var QualificationArray = ["SSC" , "HSC" , "BSC" , "BS" , "BCOM" , "MS" , "M.Phil" , "PhD"];
document.write("<h1>Question 7</h1>");
document.write ("<h2>Qualification Array</h2>")
document.write(`<h3>1) ${QualificationArray[0]}</h3>`);
document.write(`<h3>2) ${QualificationArray[1]}</h3>`);
document.write(`<h3>3) ${QualificationArray[2]}</h3>`);
document.write(`<h3>4) ${QualificationArray[3]}</h3>`);
document.write(`<h3>5) ${QualificationArray[4]}</h3>`);
document.write(`<h3>6) ${QualificationArray[5]}</h3>`);
document.write(`<h3>7) ${QualificationArray[6]}</h3>`);
document.write(`<h3>8) ${QualificationArray[7]}</h3>`);


//Question 8

var studentnames = ["Micheal" , "John" , "Tony"];
var studentscore = [320 , 230 , 480];

var percentStd1 = studentscore[0] / 500 * 100;
var percentStd2 = studentscore[1] / 500 * 100;
var percentStd3 = studentscore[2] / 500 * 100;

document.write("<h1>Question 8</h1>");
document.write("<h2>MarkSheet<h2>")
document.write(`score of ${studentnames[0]} is ${studentscore[0]}. Percentage ${[percentStd1]}%  `);
document.write("<br>");
document.write(`score of ${studentnames[1]} is ${studentscore[1]}.  Percentage ${[percentStd2]}%  `);
document.write("<br>");
document.write(`score of ${studentnames[2]} is ${studentscore[2]}.  Percentage ${[percentStd3]}%  `);


//Question 9

var colors = ["Red" , "Yellow" , "Green"];

document.write("<h1>Question 9</h1>");
document.write(colors);

//Question 9(a)

var ColorInput = prompt("What color he/she want to add to the begining");
var colors = ["Red" , "Yellow" , "Green"];
var coloradded = colors.unshift(ColorInput);


document.write("<h1>Question 9(A)</h1>")
document.write("");
document.write(colors);

//Question 9(b)

var ColorInput = prompt("What color he/she want to add to the End");
var colors = ["Red" , "Yellow" , "Green"];
var coloradded = colors.push(ColorInput);

document.write("<h1>Question 9(B)</h1>")
document.write("");
document.write(colors);

//Question 9(c)

var ColorInput = prompt("What 1st color he/she want to add to the begining");
var ColorInput2 = prompt("What 2nd color he/she want to add to the begining")
var colors = ["Red" , "Yellow" , "Green"];
var coloradded = colors.unshift(ColorInput , ColorInput2);


document.write("<h1>Question 9(C)</h1>")
document.write("");
document.write(colors);

//Question 9(d)

var ColorInput = prompt("What color he/she want to add to the begining");
var colors = ["Red" , "Yellow" , "Green"];
var coloradded = colors.shift(ColorInput);

document.write("<h1>Question 9(D)</h1>")
document.write("");
document.write(colors);


//Question 9(e)

var ColorInput = prompt("What color he/she want to Delete the last color in the array");
var colors = ["Red" , "Yellow" , "Green"];
var coloradded = colors.po(ColorInput);

document.write("<h1>Question 9(E)</h1>")
document.write("");
document.write(colors);


//Question 9(f)

var colors = ["Red" , "Yellow" , "Green"];
var ColorInput = prompt("Enter a color name which do you want to add at the desire position."); 
var ColorIndexnumber = +prompt("which color do you want to add on that index? ");
colors.splice(ColorIndexnumber , 0 , ColorInput);

document.write("<h1>Question 9(F)</h1>")
document.write("")
document.write(colors);


//Question 9(g)

var colors = ["Red" , "Yellow" , "Green"];
var deleteIndex = +prompt("At which index do you want to delete color?"); 
var deletecolors = +prompt("which color do you want to delete on that index?");
var result = colors.splice(deleteIndex , deletecolors);

document.write("<h1>Question 9(g)</h1>")
document.write("")
document.write(colors);


//Question 10

var studentscores = [320 , 230 , 480 , 120];
var sortedscores = studentscores.sort()

document.write("<h1>Question 10</h1>")
document.write("Scores of student :" + studentscores);
document.write("<br>");
document.write("Ordered Scores of Students :" + studentscores);


//Question 11

var cities = ["karachi" , "lahore" , "islamabad" , "Quetta" , "peshawar"]
var selectedcities = cities.slice(1,4);

document.write("<h1>Question 11</h1>")
document.write("<b>Ciries List :</b> <br> " + cities + "<br>");
document.write("<b>Selected Cities List : </b><br> " + selectedcities );


//Question 12

var array = ["This" , "Is" , "My" , "Cat"];
document.write("<h1>Question 12</h1>")
document.write("<h2>Array</h2>");
document.write(`<h3>${array}</h3>`);

var joinarray = array.join("");

document.write("<h2>String</h2>");
document.write(`<h3>${joinarray}</h3>`);


//Question 13



var acc = ["Keyboard","mouse","printer","monitor"];
document.write("<h1>Question 13</h1>")
document.write("<h2>Devices: </h2>");
document.write(`<h2>${acc}</h2><br>`);

var firstDevice = acc.shift();
document.write(`<h2>Out: <br>  ${firstDevice}</h2>`);

var secDevice = acc.shift();
document.write(`<h2>Out: <br>  ${secDevice}</h2>`);

var thirdDevice = acc.shift();
document.write(`<h2>Out: <br>  ${thirdDevice}</h2>`);

var fourthDevice = acc.shift();
document.write(`<h2>Out: <br>  ${fourthDevice}</h2>`);

//Question 14


var acc = ["Keyboard","mouse","printer","monitor"];
document.write("<h1>Question 14</h1>")
document.write("<h2>Devices: </h2>");
document.write(`<h2>${acc}</h2><br>`);

var firstDevice = acc.pop();
document.write(`<h2>Out: <br>  ${firstDevice}</h2>`);

var secDevice = acc.pop();
document.write(`<h2>Out: <br>  ${secDevice}</h2>`);

var thirdDevice = acc.pop();
document.write(`<h2>Out: <br>  ${thirdDevice}</h2>`);

var fourthDevice = acc.pop();
document.write(`<h2>Out: <br>  ${fourthDevice}</h2>`);


//Question 15


var mobiles = ["Apple","Samsung", "Motorola", "Nokia","Sony", "Haier"];

document.write("<h1>Question 15</h1>")
document.write(`
    <select>
        <option>${mobiles[0]}</option>
        <option>${mobiles[1]}</option>
        <option>${mobiles[2]}</option>
        <option>${mobiles[3]}</option>
        <option>${mobiles[4]}</option>
        <option>${mobiles[5]}</option>
    </select>
    `)