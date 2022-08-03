//CHAPTER 38-42
//QUESTION 1

// var base = +prompt("Enter Base");
// var powerofbase = +prompt("Enter Power");

// function Power(a, b) {
//     var calc = 1

//     for(i =0;i < b;i++){
//         calc *= a;
//     }

//     return calc;
// }
// base !== 0 ? console.log(Power(base, powerOfBase)) : alert("Base cannot be 0")



//QUESTION 2

// var input = +prompt("Enter a Year");

// function leapyear(a) {

//     if (input % 4 !== 0){
//         alert("It is Not a Leap Year");
//     }

//     else{
//         alert("Its a Leap year");
//     }
// }

// leapyear();



//QUESTION 3

// var input1 = +prompt("Enter First Side");
// var input2 = +prompt("Enter Second Side");
// var input3 = +prompt("Enter Third Side");

// function area(a,b,c) {
//     var array = [a,b,c];
//     var sides = (array);
//     function side(arr) {
//         return (arr[0] + arr[1] + arr[2]) / 2;

//     }

//     var area = Math.sqrt(Math.abs(sides * (sides - a) * (sides - b) * (sides - c)));
//     return area;

// }

// var result = area(input1,input2,input3);
// console.log(result);


// //QUESTION 4
// document.write("<h1> Question 4 </h1>")

// var a = +prompt("Enter the Obtained Marks in First Subject");
// var b = +prompt("Enter the Obtained Marks in Second Subject");
// var c = +prompt("Enter the Obtained Marks in Third Subject");

// function main() {
//        var d = avg(a,b,c);
//        var e = per(a,b,c);
//        document.write("<b>" + d + "is the Average </b>");
//        document.write("<br/>")
//        document.write("<b>" + e + "is the Percentage </b>");

// }

// function avg(a,b,c) {
//        var f = (a+b+c)/3;
//        return f;
// }

// function per(a,b,c) {
//    var g = (a+b+c)/300 * 100;
//    return g;
// }

// main();




//QUESTION 5

// function indexof() {
//     var input = prompt("Enter your Sentence").toLowerCase();
//     var index = prompt("Enter your letter to find its Index number");
//     for (i = 0; i < input.length;i++){
//         if(input[i] === index){
//             console.log(i);
//             break;
//         }
//         else if(i === input.length -1){
//             console.log("Not Find");
//         }
//     }
// }

// indexof();



//Question 6

// function RemoveVowels() {
//     var Sentence = "The quick brown fox".split("");
//     var arr= [];
//     var flag = false;
//     var vowels = "aeiou";
//     for (i = 0; i < Sentence.length;i++){
//         flag = false;
//         for(j = 0;j < vowels.length;i++){
//             if(sent[i] === vowels[j]){
//                 flag = true;
//             }
//         }

//         if (flag === false) {
//                         arr.push(sent[i]);
//                         flag = tr;
//                     }
//     }

//     return arr.join("");


//     }
//     var result = toRemoveVowels();
//     alert(result);





// Q7

// function doubleVowelOccurence() {

//     var sent = "Pleases read this application and give me gratuity".toLowerCase();
//     var vowelPossiblity = ["aa", "ae", "ai", "ao", "au", "ee", "ea", "ei", "eo", "eu", "ii", "ia", "ie", "io", "iu", "oo", "oa", "oe", "oi", "ou", "uu", "ua", "ue", "ui", "uo"];
//     var arr = [];
//     for (i = 0; i < sent.length; i++) {
//         for (j = 0; j < vowelPossiblity.length; j++) {
//             if (sent.slice(i, i + 2) === vowelPossiblity[j]) {
//                 arr.push(sent.slice(i, i + 2))
//             }
//         }
//     }
//     return arr;
// }

// var result = doubleVowelOccurence();

// alert(result);

// Q8

// var input = +prompt("Enter KM Distance");

// function kmToMeter(a) {
//     return a * 1000;
// }

// function kmToFeet(a) {
//     return a * 3280.84;
// }

// function kmToInches(a) {
//     return a * 39370.1;
// }

// function kmToCentiMeter(a) {
//     return a * 100000;
// }

// var kmIntoMeter = kmToMeter(input);
// var kmIntoFeet = kmToFeet(input);
// var kmIntoInches = kmToInches(input);
// var kmIntoCentiMeter = kmToCentiMeter(input);
// alert(kmIntoMeter + " Meter " + kmIntoFeet + " Feet " + kmIntoInches + " Inches " + kmIntoCentiMeter + " CentiMeter ");

// Q9

// var input = +prompt("Enter your Total Work Hour");

// function overtimePaid(a) {
//     if ((a - 40 !== Math.abs(a - 40))) {
//         return alert("You Didn't do Overtime");
//     }
//     else {
//         return alert("You get " + (a - 40) * 12 + " Rs for your overtime");
//     }
// }

// overtimePaid(input);




//QUESTION 10

// var userInput = +prompt("Enter Cash Amount");
// var result = 0;
// var hun = 0;
// var fiv = 0;
// var ten = 0;
// var one = 0;

// for(i=0;i < 5;i++){
     
//     if(userInput >= 100){
//         hun = Math.floor(userInput / 100);
//         userInput -= hun*100;

//     }

//     else if(userInput >= 50){
//         fiv = Math.floor(userInput / 50);
//         userInput -= fiv*50;

//     }
//     else if(userInput >= 10){
//         ten = Math.floor(userInput / 10);
//         userInput -= ten*10;

//     }
//     else if(userInput >= 1){
//         one = Math.floor(userInput / 1);
//         userInput -= one*1;

//     }
    


// }

// document.write(hun + "Hundred Rupee",fiv + "Fifty Rupee" , ten + "Ten Rupee" , one + "One Rupee")


