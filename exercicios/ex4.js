function validarTriangulo(angulo1, angulo2, angulo3) {
  if (angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0) {
    console.error("Erro: Todos os ângulos devem ser maiores que zero.");
    return false;
  }

  const soma = angulo1 + angulo2 + angulo3;
  if (soma > 180) {
    console.error("Erro: A soma dos ângulos ultrapassou 180°.");
    return false;
    /*console.error("Erro: A soma dos ângulos deve ser exatamente 180°.");
    return false;*/
  } else if (soma < 180) {
    console.error(
      "Erro: A soma dos ângulos está menor que 180º, e deve ser exatamente igual 180º"
    );
    return false;
  }
  console.log(" | Angulos aprovados.");
  return true;
}

console.log(validarTriangulo(60, 60, 30));
