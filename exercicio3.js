const num1 = 32;
const num2 = 27;
const num3 = 100;

console.log(`Os números são ${num1}, ${num2} e ${num3}.`);

if (num1 > num2 && num1 > num3) {
  console.log(`O maior número é ${num1}.`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`O maior número é ${num2}.`);
} else {
  console.log(`O maior número é ${num3}.`);
}