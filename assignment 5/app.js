//Chapter 17-20

//Question 1

var num = [[],[],[]]

//Question 2

num[0] = [0,1,2,3]
num[1] = [1,0,1,2]
num[2] = [2,1,0,1]
document.write("<h1>Question 2</h1>")
document.write(num[0]+"<br/>"+num[1]+"<br/>"+num[2]+"<br/>")

//Question 3

document.write("<h1>Question 3</h1>")

for(var i = 1; i <= 10; i++){
    document.write(i + "<br/>")
}

//Question 4

document.write("<h1>Question 4</h1>")

var table = +prompt("Enter A Number To Show Its Multiplication Table");
var length = +prompt("Enter A Multiplication Table");

document.write("<b>Multiplication Table of " + table + "<br> Length " + length + "</b> <br/>");

for (var i = 1; i <= length; i++){
    document.write(table + " X " + i + " = " + table*i + "<br />");
}


//Question 5

document.write("<h1>Question 5</h1>")

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write(`<b>${fruits[0]}</b><br/>`)
document.write(`<b>${fruits[1]}</b><br/>`)
document.write(`<b>${fruits[2]}</b><br/>`)
document.write(`<b>${fruits[3]}</b><br/>`)
document.write(`<b>${fruits[4]}</b><br/>`)

document.write("<br>")

var arr = fruits.length

for (var i = 0; i <arr; i++){
    document.write("<b>Element at Index " + i + " is " + fruits[i] + "</b><br />"); 
}


//Question 6
document.write("<h1>Question 6</h1>")


var num = [];
var odd = [];
var even = [];
var series = [];


for(var i = 1; i <= 15; i++){
    num[i] = i+1;
}

document.write("<b>Counting :</b><br><br>" + num + "<br/>");
document.write("<br>");
document.write("<b>Reverse Counting :</b><br><br>" + num.reverse() + "<br />")
document.write("<br>");

for(var a = 1; a <= 20 ; a++){
   if(a % 2 !==0){
       even[a] = a;
   }
}

document.write("<b>Even :</b><br><br>" + even + "<br/>");
document.write("<br>");
for(var b = 2; b <= 20; b++){
    if(b % 2 === 0){
     odd[b] = b;
    }
}

document.write("<b>Odd :</b><br><br>" + odd + "<br/>");
document.write("<br>");
for(var d = 3; d <= 20; d++){
    if(d % 2 === 0){
        series[d] = d + "k";
    }
}

document.write("<b>Series :</b><br><br>" + series + "<br/>");
document.write("<br>");



//Question 7

document.write("<h1>Question 7</h1>")

var a = ["cake","apple pie","cookie","chips","patties"]
var user = prompt("Welcome to ABC Bkery what do you want to order sir/ma'am")
var b = a.indexOf(user)
if(b<0){
    alert("we are sorry"+user+"is not available in our bakery")
}
else{
    alert(user+"is available at index "+b+" in our bakery") 
}


//Question 8

document.write("<h1>Question 8</h1>")

A = [24, 53 , 78 , 91 , 12];
max = 0;
for (var i = 0;i < A.length; i++){
    if(max < A[i]) {
        max = A[i];
    }
}

document.write("Array Items ")
for (var i = 0; i < A,length;i++) {
    document.write(A[i], ",")
}
document.write("<br>The largest number is " + max)




//Question 9
document.write("<h1>Question 9</h1>")

A = [24, 53, 78, 91, 12];
min = [0];
for (var i = 0; i < A.length; i++){
    if(min < A[i]){
      min < A[i];
    }
}

document.write("Array Items");
for (var i = 0; i < A.length;i){
    document.write(A[i] , ",");
}
document.write("<br>The Smallest number is " + min)




//Question 10
document.write("<h1>Question 10</h1>")
for (var i = 1;i<=100; i++){
  if(i%5 === 0){
    document.write(i+" ,")
  }
}














//Question 8

// var arr = [24, 53 , 78 , 91 , 12];
// var max = Math.max.apply(Math,arr);
// console.log(max);
// document.write(
//     "Array Items :" + arr+
//     "<br/> The Largest Number is " +max
    
// )


//Question 9
// var arr = [24,53,78,91,12];
// var max = Math.max.apply(Math,arr)
// var min = Math.min.apply(Math,arr)
// console.log(max , min)
// document.write(
//     "Array items: "+arr+
//     "<br/> The largest number is " +max+
//     "<br/> The samllest number is " +min+"<br/>"
// )