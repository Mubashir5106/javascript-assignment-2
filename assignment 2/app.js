//Chapter 3
//Question 1

var age = "I am 17 year old"
alert(age)

//Question 2
var num = "You have visited this page 14 times";
alert(num)

//Question 3

var birthYear = "2005"
document.write("<h2>Chapter 3</h2>")
document.write("<h3>Question 3</h3>")
document.write("My birth year is" + " " + birthYear + "<br>" + "Data type of my declared variable is" + " " + typeof (birthYear));
 


//Question 4

var visitorName = "Mubashir Ahmed";
    var productTitle = "Rolex Watch";
    var productQty = "1";
    var storeName = "Rolex";
    alert(visitorName + " " + "ordered " + productQty + " " + productTitle + " " + "on " + storeName + " Watches store");


//Chapter 4
//Question 1
    var name ,age, qualification ;
   
//Question 2
    // Legal varaibles 
    var myname = "Mubashir Ahmed";
    var myName = "Mubashir Ahmed";
    var my_name = "Mubashir Ahmed";
    var _my_name = "Mubashir Ahmed";
    var $my_name = "Mubashir Ahmed"


    // Illlegal varaibles 

    //  var @myname =   "Mubashir Ahmed";
    //  var 123myName = "Mubashir Ahmed";
    //  var my name =   "Mubashir Ahmed";
    //  var month&year = "Mubashir Ahmed";
    //  var birth-year = "2005";


//Question 3    
//Fill in the blank
document.write("<h2>Rules for naming JS variables</h2>");
    document.write("a) Variable names can only contain number,$,_. and letter <b> For example : $my_1stVariable.</b> <br>");
    document.write("b) Variable must begin with a letter, $ or _. <b> For example : $name,_name or name.</b> <br>");
    document.write("c) Variable names are case sensitive.<br>");
    document.write("d) Variable names should not be JS keywords.");



//Chapter 5
//Question 1

var num1 = 3
var num2 = 5
alert(num1 + num2)

//Question 2
// Repeat task 1

var num1 = 34;
    var num2 = 45;
    var subNumbers = num1 - num2;
    var mulNumbers = num1 * num2;
    var divNumbers = num1 / num2;
    var Module = num1 % num2;


    document.write("<h2>Chapter 5</h2>")
    document.write("<h3>Question 2</h3>")
    document.write("Subtraction of " + num1 + " and " + num2 + " is " + subNumbers + "<br>");
    document.write("Multiplication of " + num1 + " and " + num2 + " is " + mulNumbers + "<br>");
    document.write("Division of " + num1 + " and " + num2 + " is " + divNumbers + "<br>");
    document.write("Reminder of " + num1 + " and " + num2 + " is " + Module + "<br>");
//Question 3

var number1;
document.write("<h2>Chapter 5</h2>")
document.write("<h3>Chapter 3</h3>")
document.write("Value after variable declaration is:" + number1 + "<br>");


number1 = 5;
document.write("Value after variable declaration is:" + number1 + "<br>");


number1++
document.write("Initial value: " + number1 + "<br>");


number1 = number1 + 7;
document.write("Value after addition is:" + number1 + "<br>");

number1--;
document.write("Value after decrement is:" + number1 + "<br>");

number1 = number1 % 3;
document.write("The remainder is : " + number1 + "<br>");



//Question 4
var p = "Totalcost to buy a ticket is"
var ticketPrice = 600;
var numberOfTickets = 5;
var result = p + ticketPrice * numberOfTickets;
alert(result)


//Queston 5
var tableNumber = 4;
document.write("<h2>Chapter 5</h2>")
    document.write("<h3>Table of 4 </h3>")
    document.write("4x1= " + 4 * 1 + "<br>" + "4x2= " + 4 * 2 + "<br>" + "4x3= " + 4 * 3 + "<br>" + "4x4= " + 4 * 4 + "<br>" + "4x5= " + 4 * 5 + "<br>" + "4x6= " + 4 * 6 + "<br>" + "4x7= " + 4 * 7 + "<br>" + "4x8= " + 4 * 8 + "<br>" + "4x9= " + 4 * 9 + "<br>" + "4x10= " + 4 * 10 + "<br>")
    document.write('<h2 style="text-align:center;"><a href="index.html"></a></h2>');



//Question 6
var Celsius = 25;
var fahrenheit = 70;

c = (fahrenheit - 32) * 5 / 9;
f = (Celsius * 9 / 5) + 32;

document.write("<h2>Chapter 5</h2>")
document.write("<h3>Question 6</h3>")
document.write(Celsius + "<sup>o</sup>C is " + f + "<sup>o</sup>C");
document.write("<br>");
document.write(fahrenheit + "<sup>o</sup>F is " + c + "<sup>o</sup>C ");
document.write('<h2 style="text-align:center;"><a href="index.html"></a></h2>');

 

//Question 7
var item1 = 4000;
var item2 = 2500;
var item1Qty = 5;
var item2Qty = 2;
var shippingCharges = 800;


var priceViaQtyItem1 = item1 * item1Qty;
var priceViaQtyItem2 = item2 * item2Qty;

var priceCal = priceViaQtyItem1 + priceViaQtyItem2;

var totalCost = priceViaQtyItem1 + priceViaQtyItem2 + shippingCharges;


document.write("<h2>Chapter 5</h2>")
document.write("<h3>Your Order</h3>");

document.write("PRODUCT ----------------------------- SUBTOTAL");
document.write("<br>");
document.write("AI Watch (item1)  × " + item1Qty + " ----------------- " + priceViaQtyItem1 + "PKR");
document.write("<br>");
document.write("Mac Book (item2)  × " + item2Qty + " ----------------- " + priceViaQtyItem2 + "PKR");
document.write("<br>");
document.write("Subtotal " + " ---------------------------------- " + priceCal + "PKR");
document.write("<br>");
document.write("Total cost of your order is :  " + " --------- " + totalCost + "PKR");
document.write('<h2 style="text-align:center;"><a href="index.html"></a></h2>')



//Question 8
var TotalMarks = 980
var MarksObtained = 804
var Percentage = TotalMarks / MarksObtained * 100 ;

document.write("<h2>Chapter 5</h2>")
document.write("<h3>Mark Sheet</h3>");
document.write("TotalMarks : " + TotalMarks + "<br>MarksObtained : " + MarksObtained + "<br>Percentage : " + Percentage + "%")
 

//Question 9
var OneUSD = 200.00
var OneRiyal = 51.65

var PKR2USD = OneUSD * 10
var PKR2Riyal = OneRiyal * 10
var totalCost = PKR2USD + PKR2Riyal ;


document.write("<h2>Chapter 5</h2>")
document.write("<h3>Currency In Pakistan</h3>")
document.write("Total Currency In PKR :" + totalCost);

//Question 10
var SingleExpression = 5 * 10 / 2;


document.write("<h2>Chapter 5</h2>")
document.write("<h3>Single Expression</h3>");
document.write("Single Expression Calculation is :" + SingleExpression);

//Question 11
var CurrentYear = 2022;
var birthYear = 2005;

var MyAge = CurrentYear - birthYear;
document.write("<h2>My Age Calculator</h2>")
document.write("Current Year :" + CurrentYear + "<br>My Birth Year :" + birthYear);
document.write("<br>")


//Question 12
var radius = 20;
var pi = 3.142;
var cf = 2 * pi * radius;
var area = pi * radius * radius;


document.write("<h2>Chapter 5</h2>")
document.write("<h3>The Geometrizer</h3>");
document.write('Radius of Circle is : ' + radius);
document.write("<br>");
document.write('The Circumference of Circle is : ' + cf);
document.write("<br>");
document.write('The Area of Circle is : ' + pi);

//Question 13
var favouritesnack = "OREO";
var currentage = 17;
var maximunage = 75;
var ammountofsnackperday = 6;
var agecalculate = maximunage - currentage;
var totalsnack = agecalculate * ammountofsnackperday;



document.write("<h2>Chapter 5</h2>")
document.write("<h3>The Lifetime Supply Calculator:</h3>")
document.write("Favourite Snack :" + favouritesnack);
document.write("<br>");
document.write("Current Age :" + currentage);
document.write("<br>");
document.write("Maximum Age :" + maximunage);
document.write("<br>");
document.write("Ammount Of Snack Per Day :" + ammountofsnackperday);
document.write("<br>")
document.write("You Will Need " + totalsnack + " " + favouritesnack +  "to last you until the ripe old age of " + maximunage);
document.write("<br>")
document.write("<br>")
document.write("<br>")











//Chapter 6-9
//Question 1
var a = 10

document.write("<h2>Chapter 6-9</h2>")
document.write("<h3>Question 1</h3>")
document.write("Result :");
document.write("<br>");
document.write("Value Of a is :" + a);
document.write("<br>");
document.write("-------------------------------------------------------");
document.write("<br><br>")


++a;
document.write("The value of ++a is :" + a);
document.write("<br>");
document.write("Now The value of a is :" +a);
document.write("<br>");
document.write("<br>")





document.write("The value of a++ is : " + a);
    document.write("<br>");
    a++;
    document.write("Now the value of a : " + a);
    document.write("<br>");
    document.write("<br>");




    --a;
    document.write("The value of --a is : " + a);
    document.write("<br>");
    document.write("Now the value of a : " + a);
    document.write("<br>");
    document.write("<br>");


    document.write("The value of a-- is : " + a);
    document.write("<br>");
    a--;
    document.write("Now the value of a : " + a);
    document.write("<br>");


// Question 2 


var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//   1  -  0  +  1  +  1
//   1 + 1 + 1
//   3


document.write("<h2>Chapter 6-9</h2>")
document.write("Explaination");
document.write("<br>");
document.write("------------------------------------------");
document.write("<br>");
document.write("--a is the pre decrement of a, current value of a is 2 after decrement --a =  1  <br>");
document.write("--b is the pre decrement of b, current value of b is 0 after decrement --b =  0  <br>");
document.write("++b is the pre increment of b, current value of b is 1 after increment ++b =  1  <br>");
document.write("++b is the post decrement of b, it will decrease the value after call the varibale current value of b is 1 after decrement  b-- =  1");


document.write("<br>");
document.write("Current value of a is : 1");
document.write("<br>");
document.write("Current value of b is : 1");


document.write("<br>");
document.write("Result : " + result);





// Question 3



var name = prompt("Enter your name : ");
document.write("Welcome " + name);



// Question 4


var tableNo = prompt("Enter a number : ");
document.write(tableNo + "x1= " + tableNo * 1 + "<br>" + tableNo + "x2= " + tableNo * 2 + "<br>" + tableNo + "x3= " + tableNo * 3 + "<br>" + tableNo + "x4= " + tableNo * 4 + "<br>" + tableNo + "x5= " + 4 * 5 + "<br>" + tableNo + "x6= " + tableNo * 6 + "<br>" + tableNo + "x7= " + tableNo * 7 + "<br>" + tableNo + "x8= " + tableNo * 8 + "<br>" + tableNo + "x9= " + tableNo * 9 + "<br>" + tableNo + "x10= " + tableNo * 10 + "<br>")




// Question 5




var nameSub1 = prompt("Enter a your subject name : ");
var subMarks1 = parseInt(prompt("Enter Obtained marks of this subject"));

var nameSub2 = prompt("Enter a your subject name : ");
var subMarks2 = parseInt(prompt("Enter Obtained marks of this subject"));

var nameSub3 = prompt("Enter a your subject name : ");
var subMarks3 = parseInt(prompt("Enter Obtained marks of this subject"));

var nameSub4 = prompt("Enter a your subject name : ");
var subMarks4 = parseInt(prompt("Enter Obtained marks of this subject"));

var nameSub5 = prompt("Enter a your subject name : ");
var subMarks5 = parseInt(prompt("Enter Obtained marks of this subject"));


var eachmarks = 100;
var eachpercentage1 = subMarks1 / eachmarks * 100;
var eachpercentage2 = subMarks2 / eachmarks * 100;
var eachpercentage3 = subMarks3 / eachmarks * 100;
var eachpercentage4 = subMarks4 / eachmarks * 100;
var eachpercentage5 = subMarks5 / eachmarks * 100;

var totalMarksStd = 500;
var obtainedMarks = subMarks1 + subMarks2 + subMarks3 + subMarks4 + subMarks5;
var Percentage = obtainedMarks / totalMarksStd * 100;
document.write(`<table>
<tr>  
    <th>Subjects</th>  
    <th>Total Marks</th>  
    <th>Obtained Marks</th> 
    <th>Percentage</th>  
</tr>  

<tr>
    <td>${nameSub1}</td>
    <td>${eachmarks}</td>
    <td>${subMarks1}</td>
    <td>${eachpercentage1}%</td>
</tr>

<tr>
<td>${nameSub2}</td>
<td>${eachmarks}</td>
<td>${subMarks2}</td>
<td>${eachpercentage2}%</td>
</tr>

<tr>
<td>${nameSub3}</td>
<td>${eachmarks}</td>
<td>${subMarks3}</td>
<td>${eachpercentage3}%</td>
</tr>  

<tr>
<td>${nameSub4}</td>
<td>${eachmarks}</td>
<td>${subMarks4}</td>
<td>${eachpercentage4}%</td>
</tr>  

<tr>
<td>${nameSub5}</td>
<td>${eachmarks}</td>
<td>${subMarks5}</td>
<td>${eachpercentage5}%</td>
</tr>  

<tr>
<td></td>
<td>${totalMarksStd}</td>
<td>${obtainedMarks}</td>
<td>${Percentage}%</td>
</tr>  
</table>`)

// var name ;
// name = "mubashir"
// alert (name)


// var num = 123;
// alert(num)


// var num1 = 10;
// var num2 = 10;
// alert(num1 + num2)


// var myfirstnum1 = 10;
// var my_first_num2 = 10;
// var num3 = 10;
// alert(num1 + num2)



// var num = 10;

// alert( --num);

// alert( ++num);

// alert( num--);

// alert( num);


// --a(pre)
// a++(post)


//  var num = 10;

//  num = ++num + 1 +num;

//  alert(num)


//  var a = 2;
//  var b = 1;
//  var result = --a - --b + ++b + b--;
//  alert(result)


//  var name = "mubashir";

//  console.log(name);




// document.write("<h1>" + name + "</h1>")

