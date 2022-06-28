var str ="JGKJGjkgkjKJGJKGkjkjgJgd365ytDDfe%$365GDhdKGKJgkjgKGgJHFhjfGHGf4pJHf7rUGgFR67yuFtUI87YG67vHvUYTr76Rghc5rtyF65e65d4354Xer";
var password = "";

for(var i = 0; i < 8 ;i++){
    var random = Math.floor(Math.random() * str.length);
    var round = Math.floor[random];
    password += str [random];
}


document.write("<h1> Password Generator </h1>")
document.write("<h2>" +password + "</h2>");