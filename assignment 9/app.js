//Chapter 31-34
//Question 1
var date = new Date();


document.write("<h1> Chapter 31-34</h1>");

document.write("<h1> Question 1 </h1>")
document.write("<b>" + date + "</b>");

//Question 2
var month = new Date().getMonth();
var monthnames = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
document.write("<h1> Question 2 </h1>")
document.write("<b>Current Month : " + monthnames[month])



//Question 3
var day = new Date().getDay();
var weaknames = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
document.write("<h1> Question 3</h1>")
document.write("current day : " + weaknames[day]);



//Question 4
var day = new Date().getDay();
var weaknames = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
if(weaknames[day]==="saturday" & "sunday"){
          alert("Its Fun Day")
}
else{
    alert("Its Working Day")
}


//Question 5
document.write("<h1> Question 5</h1>")
var now =  new Date();
var date = now.getDate();
if (date >= 1 && date <= 15){
    document.write("First Fifteen Days Of Month");
}
else if (date > 15 && date <= 31){
    document.write("Last Days Of The Month")
}


//Question 6

var today=new Date()
var diff1=new Date().getTime()
var diff2=new Date("december 1, 1970").getTime()
var result= diff1-diff2
var end1=Math.ceil(result /(1000*60))
var end2=Math.ceil(result /(1000*60*60))

document.write("<h1> Question 6</h1>")
document.write("Current Date :" + today + "<br>")
document.write("Elapsed millisecond : " + " " + end1 + "<br>")
document.write("Elapsed minutes : " + " " + end2 + "<br>")


//Question 7

var date = new Date().getHours;
if(date >= 12){
    alert("its PM")
}
else{
    alert("its AM")
}


//Question 8

var date = new Date("Dec 31, 2020");
document.write("<h1> Question 8</h1>")
document.write("Later Date : " + date);


//Question 9
var date = new Date("June 18, 2015");
var current = new Date();
var diff = current - date;

var ramdandayspassed = Math.round(diff / (1000 * 60 * 60 * 24));
document.write("<h1> Question 9</h1>")
document.write(ramdandayspassed + "Days have been passed since 1st ramdan, 2015");


//Question 10
var date = new Date("January 1, 2015");
var current = new Date();
var diff = current - date;

var SecPassed = Math.round(diff / (1000 * 60));
document.write("<h1> Question 10</h1>")
document.write("On Refernce date " + date + ", <br>" + SecPassed + "  Passed since begning of 2015");


//Question 11
var dateTime = new Date ("January 01, 2015 23:08:16")
document.write("<h1> Question 11</h1>");
document.write("Current Date : " + dateTime + "<br>");

var beforeHour = new Date ("January 01, 2015 22:08:16").getTime();

dateTime.setTime(beforeHour);
document.write("1 hour ago, it was " + dateTime);



//Question 12
var user = prompt("Enter your year");

    var userYear = new Date(user).getTime();

    var currentYear = new Date().getTime();

    var diff = currentYear - userYear;
    var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

    document.write("<h1> Question 12</h1>");
    document.write("Your age is : " + age + "<br>");
    document.write("Your birth year is : " + user);




//Question 13

var currentDate = new Date();
alert("Current date" + currentDate)

var yearsBack = new Date("1992 Dec 05").getTime();

currentDate.setTime(yearsBack);

alert("100 years back it was" + currentDate);


//Question 14
var customerName = prompt("Enter your Name : ");
var currentMonth = prompt("Enter your current Month: ");
var numberOfUnit = +prompt("Enter number of Units :");
var ChargesOfUnit = +prompt("Enter Charges per unit :");
var LatePaymentSurcharge = +prompt("Enter Late Payment Surcharge :");
var netAmount = +prompt("Enter Net Amount Payable (within Due Date)");

var net_Amount_Payable = numberOfUnit * ChargesOfUnit;
var Gross_Amount_Payable = netAmount + LatePaymentSurcharge;



document.write("<h1> Question 14</h1>");
document.write(`<h1>K-Electric Bill <br> </h1>`)
document.write(`<p>Customer Name: <b>${customerName}</b> <br> </p>`)
document.write(`<p>Month: <b>${currentMonth}</b> <br></p>`)
document.write(`<p> Number of Units: <b>${numberOfUnit} </b><br></p>`)
document.write(`<p>Charges per unit: <b>${ChargesOfUnit}</b> <br> </p>`)

document.write(`<p>Net Amount Payable (within Due Date): <b>${net_Amount_Payable}</b> <br> </p>`)
document.write(`<p>Late Payment Surcharge: <b>${LatePaymentSurcharge}</b> <br> </h4>`)
document.write(`<p>Gross Amount Payable (after Due Date): <b>${Gross_Amount_Payable}</b> <br> </p>`)