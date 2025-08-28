function buscarMaior(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

let x = 12;
let y = 3;
let z = 14;
let resultado = buscarMaior(x, y, z);
console.log("O maior numero é:", resultado);
