let number1 = 55;
let number2 = 70;
let number3 = 30;

if (number1 < number2 && number3 < number2) {
  console.log("O maior é: " + number2);
} else if (number2 < number1 && number3 < number1) {
  console.log("O maior é: " + number1);
} else {
  console.log("O maior é: " + number3);
}
