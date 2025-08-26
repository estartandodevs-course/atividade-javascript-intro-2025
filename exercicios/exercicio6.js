
const numero1 = 15;
const numero2 = 25;
const numero3 = 30;
let temNumeroPar = false;

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
    temNumeroPar = true;
} else {
    temNumeroPar = false; 
}
console.log(temNumeroPar);