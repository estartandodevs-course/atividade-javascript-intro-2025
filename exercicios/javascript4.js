let number1 = 80;
let number2 = 50;
let number3 = 50;

if (number1 <= 0 || number2 <= 0 || number3 <= 0) {
  console.log("Erro: ângulo inválido");
} else {
  let soma = number1 + number2 + number3;
  if (soma === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
}
