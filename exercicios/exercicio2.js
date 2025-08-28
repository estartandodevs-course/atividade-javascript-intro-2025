function buscarMaior(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

let x = 12;
let y = 3;
let resultado = buscarMaior(x, y);

console.log("O maior numero é:", resultado);
