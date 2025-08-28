function buscarAngulo(a1, a2, a3) {
  if (a1 <= 0 || a2 <= 0 || a3 <= 0) {
    console.error("Erro: Os ângulos devem ser maiores que zero.");
    return false;
  }

  const somaAngulo = a1 + a2 + a3;

  if (somaAngulo === 180) {
    return true;
  } else {
    console.error(
      `Erro: a soma dos ângulos (${somaAngulo}°) não é igual a 180`
    );
    return false;
  }
}

console.log(buscarAngulo(60, 60, 60));
console.log(buscarAngulo(12, 3, 14));
console.log(buscarAngulo(0, 0, 0));
