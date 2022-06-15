document.write("<h1>Our Resturant Menu<h1>");
document.write("<h1>Fast Food List</h1>");
var fooditems = ["zinger burger", "roll", "club sandwich", 'broast']
    var Special = ["mayo garlic roll","Large Zinger Burger","Special club sandwich","Spicy Broast"]
    var fastfood = prompt("Enter fast food which you want to order : ").toLowerCase();
    if (fooditems.indexOf(fastfood) !== -1) {
 
      document.write(`<h1><b>${fastfood}</b> Is Available</h1>`);
    for(i = 0; i < Special.length; i++) {
        document.write(`<h2>You must have try Varity of Fast Food</h2>`);
        document.write(`<h3><li>${Special[i]}</li></h3>`) ;
     }
       
       
    }
    else if(fastfood===""){
        question("Please Enter a Food Item");
    }
    else {
        document.write(`<h1><b>${fastfood}</b> Is Not Available</h1>`);

        for(i = 0; i < fooditems.length; i++) {
          document.write( `<h2>You Can Try in fast food</h2>`)
          document.write( `<h3><ul><li>${fooditems[i]}</li<</ul></h3>` );
        }
    }

    document.write("<br />" + "<br />")
    document.write("<h1>Spicy Food List</h1>");


var fooditems2 = ["chicken karhai","chicken tanduri","chicken tikka","seekh kabab","malai boti","white karhai"];
 var Special2 = ["chicken tanduri", "koila karhai", "chicken roll", "katakat"];
 var spice = prompt ("Enter The Spicy Food Which You Want To Order :").toLowerCase();
 if(fooditems2.indexOf(spice) !== -1){

  document.write(`<h1><b>${spice} </b> Is Available`);
  for(i = 0;i < Special.length;i++){
    document.write(`<h2>You Must Have To Try Variety Of Spicy Food`);
    document.write(`<h3><li>${Special2[i]}</li></h3>`);

  }

 }

 else if (spice===""){
      question("Please Enter a Food Item");
 }
 else {
  document.write(`<h1><b>${spice}</b> Is Not Available</h1>`);

    for (i = 0; i < fooditems2.length ; i++){
      document.write(`<h2>You Can Try In Spicy Foods<h2>`);
      document.write(`<h3><ul><li>${fooditems2[i]}</li></ul></h3>`);
    }
 }



