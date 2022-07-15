//Chapter 35-38
document.write("<h1> Chapter 35-38 </h1>")
//Question 1
document.write("<h1> Question 1 </h1>")
function abc() {
 var date = new Date()
 document.write("<b>" + date.toDateString() + "</b> <br>")                  
}

abc();

//Question 2
document.write("<h1> Question 2 </h1>")
function foo() {
    var a = prompt("Enter First Name");
    var b = prompt("Enter Second Name");
    document.write("<b>" + a + b + "</b> <br>")
}

foo();



//Question 3
document.write("<h1> Question 3 </h1>")
function  sum(a,b) {
    var firstnum = +prompt("Enter First Value");
    var secondnum = +prompt("Enter Second Value");

    var numbers = firstnum + secondnum;
    document.write("<b> Sum Of Two Numbers" + parseInt(numbers) + "</b> <br>")
}


sum(2 , 5);


//Question 4
document.write("<h1> Question 4 </h1>")
function calculator(firstnum , secondnum) {
 var firstnum= +prompt("Enter First Number");
 var secondnum = +prompt("Enter Second Number");
 var operator = prompt("Enter Operator : (+,-,*,/,%");

 if (operator === "+"){
    result = firstnum + secondnum;
    document.write("<b> Sum Of Two Number is : " + result +"</b><b>");
 }

 else if (operator === "-"){
    result = firstnum - secondnum;
    document.write("<b> Subtraction Of Two Number is : " + result + "</b><b>");
 }

 else if (operator === "*"){
    result = firstnum * secondnum;
    document.write("<b> Multiplication Of Two Number is : " + result + "</b><b>");
 }

 else if (operator === "/"){
    result = firstnum / secondnum;
    document.write("<b> Dividion Of Two Number is : " + result + "</b><b>");
 }

 else if (operator === "%"){
    result = firstnum % secondnum;
    document.write("<b> Peercentage Of Two Number is : " + result + " %" + "</b><b>");
 }

 else {
    document.write("Invailed Result")
 }
}

calculator();


//Question 5
document.write("<h1> Question 5 </h1>")
function squares() {
   var squarenum = +prompt("Enter a Number To Find Squares Of It : ");
   var findsquare = squarenum * squarenum;

   document.write("<b> Remainder Of Two Num Is : " + findsquare + "</b><br>");
}

squares();


//Question 6
document.write("<h1> Question 6 </h1>")
function factorialnumber()  {
    var factorial = 1;
    var factorialNumber = +prompt("Enter a number to find the factorical number : ")
    document.write(" <b>Factorial Of " + factorialNumber + " : </b><br>")

    // factorial of negative number is not possible 
    if (factorialNumber < 0) {
        document.write("The factorial of the negative number doesnot perform")
    }

    // factorial of 0! = 1
    else if (factorialNumber === 0) {

        document.write("<b>The factorial of 0 is 1</b>")
    }
    else if (factorialNumber >= 1) {
        for (i = 1; i <= factorialNumber; i++) {

            factorial *= i;
            document.write("<b>" + i + " ")

        }
        document.write(" <b>=  " + factorial + "</b>")

    }
}



factorialnumber();



//Question 7
document.write("<h1> Question 7 </h1>")
function counting() {
document.write("<b>Counting  : " + "</b> <br><br>")

var startnum = +prompt("Enter a Starting Number")
var endnum = +prompt("Enter a Ending Number")
for(var i = startnum; i <= endnum; i++){
   document.write("<b>" + i + "</b><br>")
}


}

counting();



//Question 8
document.write("<h1> Question 8 </h1>")
function calculatehypotneous() {
    var base = +prompt("Enter Base");
    var per = +prompt("Enter Perpendicular");
    var hyp = base*base + per*per;

    function calculatesquare() {
         hyp = Math.sqrt(hyp);
    }

    calculatesquare();
    document.write("<b>Hypotneous of the Triangle is : " + hyp + "</b><br>");
}

calculatehypotneous();



//Question 9
document.write("<h1> Question 9 </h1>")
function area(width,height){
    var width = +prompt("Enter Width");
    var height = +prompt("Enter Height");

    A = width * height;

document.write("<b>(Argument as Variable) Area of the Rectangle is  : " + A + "</b><br>");

var area = 45 * 54;
document.write("<b>(Argument as Value) Area of the Rectangle is  : " + area + "</b><br>")
}

area();



//Question 10

function palindrome() {
    var text = "";
var userinput = prompt("Enter a String");

for (var i = userinput.length - 1;i >= 0;i--){
    text += userinput[i];

}
    if(text===userinput){
        alert("Its Palindrome")
    }

    else{
        alert("Its not Palindrome")
    }

}

palindrome();


//Question 11
document.write("<h1> Question 11 </h1>")
function titledcase() {

    var userInput = prompt("Enter a word or Letter").toLowerCase();

    document.write("<b>User Input : " + userInput + "</b><br>")

    document.write("<b>Title case : </b>")

    var userInput = userInput.split(' ');
    for (i = 0; i < userInput.length; i++) {
        userInput[i] = userInput[i].charAt(0).toUpperCase() + userInput[i].slice(1) + " ";
        document.write("<b>" + userInput[i] + "</b>")
    }
   


}

titledcase();

//Question 12
document.write("<h1> Question 12 </h1>")
function letterOccurence(strings, character) {

    var strings = prompt("Enter a string :").toLowerCase();
    var character = prompt("Enter a character: ")

    var count = 0;
    for (var i = 0; i < strings.length; i++) {
        if (strings.charAt(i) == character)
            count++;
    }

    document.write("<b>Text : " + strings + "</b><br>")
    document.write("<b>There are " + count + " occurrence(s) of the word " + character + "</b><br>");


}

letterOccurence();

//Question 13
document.write("<h1> Question 13 </h1>")
function longestWord(str){

var str = prompt("Enter your string : ")
var splitArrayValue = str.split(' ');

var storeWord = "";

for (var i = 0; i < splitArrayValue.length; i++) {
    if (splitArrayValue[i].length > storeWord.length) {
        storeWord = splitArrayValue[i];
    }
}
    // return storeWord;
    document.write("<b>Actual String is : " + str + "</b><br>")
    document.write("<b>Longest word in String is : " + storeWord + "</b><br>")
    
}

longestWord()

//Question 14
document.write("<h1> Question 14 </h1>")
function CircumferenceAndArea() {

    function Circumference(r) {
        var r = parseFloat(prompt("Enter a radius for Circumference of Cricle : "))
        var coc = 2 * Math.PI * r;
        document.write("Circumference of circle " + coc + "<br>");
    }
    function Area(r) {
        var r = parseFloat(prompt("Enter a radius for Area of circle : "))
        var area = Math.PI * r * r;
        document.write("<b>Area of the circle: " + area + "</b><br>");
    }

    Circumference();
    Area();


}


CircumferenceAndArea();