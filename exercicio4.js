const a1 = 10;
const a2 = 40;
const a3 = 130;

const somaDosAngulos = a1 + a2 + a3;

 if (a1 <= 0 || a1 >= 180 || a2 <= 0 || a2 >= 180 || a3 <= 0 || a3 >= 180) {
  console.log('ERROR: ângulo inválido!');
} else {
  if (somaDosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
}