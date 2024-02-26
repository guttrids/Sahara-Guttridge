
var salutation = "WELCOME ";
var user = "Mr. Hunsicker and classmates";
var greeting = salutation + user;
var greetingEl= document.getElementById('greeting');
greetingEl.textContent = greetingEl = greeting;

var price = 159.99;
 var   studentDiscount = .20;
 var   studentPrice = price - ( price * studentDiscount);
 var  priceEl = document.getElementById('price');
  var  studentPriceEl = document.getElementById('student-price');

  priceEl.textContent = price.toFixed(2);
  studentPriceEl.textContent = studentPrice.toFixed(2);

  var price2 = 102.99;
 
 var   studentPrice2 = price2 - ( price2 * studentDiscount);
 var  price2El = document.getElementById('price2');
  var  studentPrice2El = document.getElementById('student-price2');

  price2El.textContent = price2.toFixed(2);
  studentPrice2El.textContent = studentPrice2.toFixed(2);