/*Utilize if/else para retornar o maior de três números.*/

var number1 = 5;
var number2 = 7;
var number3 = 2;

if (number1 > number2 && number1 > number3) {
  console.log(number1);
} else if (number2 > number1 && number2 > number3) {
  console.log(number2);
} else console.log(number3);
